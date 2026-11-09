import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const root = path.resolve(import.meta.dirname, '..');
const srcRoot = path.join(root, 'src');
const files = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (/\.(ts|tsx)$/.test(entry.name)) files.push(p);
  }
}
walk(srcRoot);
const errors = [];
for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');
  const out = ts.transpileModule(source, {
    fileName: file,
    reportDiagnostics: true,
    compilerOptions: { jsx: ts.JsxEmit.Preserve, target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
  });
  for (const d of out.diagnostics || []) {
    if (d.category === ts.DiagnosticCategory.Error) errors.push({ file: path.relative(root, file), message: ts.flattenDiagnosticMessageText(d.messageText, ' ') });
  }
  for (const match of source.matchAll(/from\s+['"]@\/(.+?)['"]/g)) {
    const base = path.join(srcRoot, match[1]);
    const candidates = [base, base + '.ts', base + '.tsx', path.join(base, 'index.ts'), path.join(base, 'index.tsx')];
    if (!candidates.some(fs.existsSync)) errors.push({ file: path.relative(root, file), message: `Unresolved internal import @/${match[1]}` });
  }
}

const pageFiles = files.filter((f) => /src\/app\/(?:.*\/)?page\.tsx$/.test(f));
const countH1 = (text) => (text.match(/<h1[\s>]/g) || []).length;
for (const file of pageFiles) {
  const source = fs.readFileSync(file, 'utf8');
  // O <h1> pode estar na própria página ou em um componente local que ela importa (ex.: CaseIntro).
  let h1s = countH1(source);
  for (const match of source.matchAll(/from\s+['"]@\/components\/(.+?)['"]/g)) {
    const component = path.join(srcRoot, 'components', `${match[1]}.tsx`);
    if (fs.existsSync(component)) h1s += countH1(fs.readFileSync(component, 'utf8'));
  }
  if (h1s !== 1) errors.push({ file: path.relative(root, file), message: `Expected exactly 1 h1, found ${h1s}` });
  if (file !== path.join(srcRoot, 'app', 'page.tsx') && !source.includes('export const metadata')) errors.push({ file: path.relative(root, file), message: 'Missing page metadata export' });
}

// Todo import de CSS precisa apontar para um arquivo que existe.
for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');
  for (const match of source.matchAll(/import\s+['"]((?:\.|@)[^'"]+\.css)['"]/g)) {
    const target = match[1].startsWith('@/') ? path.join(srcRoot, match[1].slice(2)) : path.resolve(path.dirname(file), match[1]);
    if (!fs.existsSync(target)) errors.push({ file: path.relative(root, file), message: `Missing CSS file ${match[1]}` });
  }
}

// A chave de Marketing precisa existir e ser um booleano.
const flagsFile = path.join(srcRoot, 'lib', 'features.json');
try {
  const flags = JSON.parse(fs.readFileSync(flagsFile, 'utf8'));
  if (typeof flags.marketing !== 'boolean') errors.push({ file: 'src/lib/features.json', message: '"marketing" must be a boolean' });
} catch {
  errors.push({ file: 'src/lib/features.json', message: 'Missing or invalid feature flags file' });
}

const allSource = files.map((f) => fs.readFileSync(f, 'utf8')).join('\n');
for (const term of ['EVO Gestão', 'POUPEME', 'Desenvolvedor Full Stack', 'Sistemas e sites, do banco de dados à tela.', 'https://www.instagram.com/lucas.cristofer/', 'https://www.linkedin.com/in/lucas-cristofer-13231a3b9/', 'https://wa.me/5541988223578']) {
  if (!allSource.includes(term)) errors.push({ file: '*', message: `Missing required term: ${term}` });
}
for (const forbidden of ['Quiz-de-programa', 'quiz-programacao', 'Norte Barber', 'Lorem ipsum', 'TODO:', 'githubAvatar', 'marketing-hero-board__accent', '/servicos"', "/servicos'"]) {
  if (allSource.includes(forbidden)) errors.push({ file: '*', message: `Forbidden legacy content: ${forbidden}` });
}

const allowedRoutes = new Set(['/', '/projetos', '/projetos/evo-gestao', '/projetos/poupeme', '/tecnologia', '/marketing', '/sobre', '/contato']);
for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');
  for (const m of source.matchAll(/href\s*=\s*["'](\/[^"']*)["']/g)) {
    const href = m[1].split('#')[0];
    if (href && !allowedRoutes.has(href)) errors.push({ file: path.relative(root, file), message: `Unknown internal route ${href}` });
  }
}

const publicImages = path.join(root, 'public', 'images');
const images = fs.readdirSync(publicImages).filter((f) => !f.startsWith('.'));
for (const required of ['lucas-hero.webp', 'lucas-about.webp']) {
  if (!images.includes(required)) errors.push({ file: 'public/images', message: `Missing image ${required}` });
}
for (const extra of images.filter((x) => !['lucas-hero.webp', 'lucas-about.webp'].includes(x))) {
  errors.push({ file: 'public/images', message: `Unexpected legacy image ${extra}` });
}

const result = { files: files.length, pages: pageFiles.length, errors, passed: errors.length === 0 };
console.log(JSON.stringify(result, null, 2));
if (errors.length) process.exit(1);
