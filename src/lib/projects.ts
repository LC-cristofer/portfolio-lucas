export type Project = {
  slug: 'evo-gestao' | 'poupeme';
  title: string;
  label: string;
  year: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  stack: string[];
  capabilities: string[];
  repoUrl?: string;
  repoVisibility: 'public' | 'private';
  theme: 'light' | 'dark';
};

export const projects: Project[] = [
  {
    slug: 'evo-gestao',
    title: 'EVO Gestão',
    label: 'Produto digital · Operações e RH',
    year: '2026',
    summary:
      'Plataforma full stack para centralizar pessoas, admissões, documentos, indicadores e rotinas administrativas.',
    challenge:
      'Organizar processos distribuídos em planilhas, mensagens e tarefas manuais dentro de uma experiência única, segura e legível para perfis diferentes.',
    approach:
      'A solução foi estruturada por jornadas de uso: visão geral, funcionários, admissões, documentos, indicadores, auditoria e operação por unidade. A arquitetura separa frontend, API, banco e serviços auxiliares para facilitar manutenção e evolução.',
    outcome:
      'Uma base de produto extensa com dashboards, RBAC, autenticação, relatórios, importação, notificações, auditoria e módulos operacionais integrados.',
    stack: ['Next.js', 'React', 'TypeScript', 'Express', 'PostgreSQL', 'JWT', 'Recharts', 'Docker'],
    capabilities: ['Dashboard por perfil', 'Admissão digital', 'Gestão de pessoas', 'Documentos e relatórios', 'Auditoria', 'Indicadores'],
    repoUrl: 'https://github.com/LC-cristofer/evo-gest-o',
    repoVisibility: 'public',
    theme: 'light',
  },
  {
    slug: 'poupeme',
    title: 'POUPEME',
    label: 'Produto digital · Finanças',
    year: '2026',
    summary:
      'Sistema financeiro full stack com autenticação, transações, categorias, metas e leitura visual da saúde financeira.',
    challenge:
      'Transformar dados financeiros em decisões rápidas sem reproduzir a densidade e a fricção de uma planilha tradicional.',
    approach:
      'O produto prioriza hierarquia de informação, leitura por indicadores, gráficos objetivos e fluxos curtos para registrar, classificar e analisar movimentações.',
    outcome:
      'Aplicação com frontend e backend, autenticação JWT, banco relacional, cache, métricas, insights e infraestrutura via Docker.',
    stack: ['Next.js', 'React', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL', 'Redis', 'Docker'],
    capabilities: ['Resumo financeiro', 'Transações', 'Categorias', 'Metas', 'Insights', 'Dashboard'],
    repoVisibility: 'private',
    theme: 'dark',
  },
];

export const getProject = (slug: Project['slug']) => projects.find((project) => project.slug === slug)!;
