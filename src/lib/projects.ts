type ProjectBase = {
  title: string;
  /** Tipo de produto, em linguagem simples. */
  kind: string;
  year: string;
  summary: string;
  theme: 'light' | 'dark';
  /** Mostra a tag "Em construção" no card. Remova quando o projeto estiver pronto. */
  inProgress?: boolean;
};

/** Projeto com estudo de caso completo em /projetos/[slug]. */
export type CaseProject = ProjectBase & {
  slug: 'evo-gestao' | 'poupeme';
  caseStudy: true;
  challenge: string;
  approach: string;
  outcome: string;
  stack: string[];
  capabilities: string[];
  repoUrl?: string;
  repoVisibility: 'public' | 'private';
};

/** Projeto só com card na lista (sem página própria). `link` é opcional. */
export type SketchProject = ProjectBase & {
  slug: 'espresso' | 'social-agent';
  caseStudy: false;
  /** Linha curta de tecnologias ou princípios, mostrada no card. */
  highlights: string[];
  link?: { label: string; href: string };
};

export type Project = CaseProject | SketchProject;

export const projects: Project[] = [
  {
    slug: 'evo-gestao',
    caseStudy: true,
    title: 'EVO Gestão',
    kind: 'Gestão de pessoas e operações',
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
    caseStudy: true,
    title: 'POUPEME',
    kind: 'Finanças pessoais',
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
  {
    slug: 'espresso',
    caseStudy: false,
    inProgress: true,
    title: 'Espresso Idiomas',
    kind: 'Site de uma escola de idiomas',
    year: '2026',
    summary:
      'Site de uma escola de idiomas que já estava no ar e trazendo resultados. Assumi o desenvolvimento: recupero o código-fonte a partir da versão publicada, organizo o repositório e evoluo o site em etapas, com preview e aprovação da cliente antes de cada mudança ir ao ar.',
    highlights: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    link: { label: 'Ver o site publicado', href: 'https://espressoidiomas.com' },
    theme: 'light',
  },
  {
    slug: 'social-agent',
    caseStudy: false,
    inProgress: true,
    title: 'Social Agent V2',
    kind: 'Gestão de redes sociais para agências',
    year: '2026',
    summary:
      'Plataforma para agências criarem, agendarem e publicarem conteúdo em várias redes. A IA decide e cria; o código valida, compõe a arte, agenda e publica. Está na fase 0: blueprint técnico e prova de conceito visual.',
    highlights: ['API-first', 'Multi-tenant', 'Seis redes sociais', 'Agente de IA dentro do portal'],
    theme: 'dark',
  },
];

export const getProject = (slug: CaseProject['slug']) =>
  projects.find((project): project is CaseProject => project.slug === slug)!;
