import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowIcon } from '@/components/ArrowIcon';
import { ProjectVisual } from '@/components/ProjectVisual';
import { Reveal } from '@/components/Reveal';
import { TechnicalCase } from '@/components/TechnicalCase';
import { getProject } from '@/lib/projects';

const project = getProject('poupeme');

export const metadata: Metadata = {
  title: 'POUPEME',
  description: project.summary,
};

export default function PoupemePage() {
  return (
    <>
      <section className="case-hero case-hero--poupeme">
        <div className="shell case-hero__grid">
          <div className="case-hero__copy case-hero__copy--dark">
            <span className="eyebrow eyebrow--light">Projeto real · Repositório privado · {project.year}</span>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
            <div className="case-tags case-tags--dark">{project.capabilities.slice(0, 4).map((item) => <span key={item}>{item}</span>)}</div>
            <span className="private-note">Código em repositório privado — sem link público.</span>
          </div>
          <div className="case-hero__visual"><ProjectVisual project={project} /></div>
        </div>
      </section>

      <section className="section case-story">
        <div className="shell case-story__grid">
          <Reveal><div><span className="eyebrow">O problema</span><h2>Finanças precisam ser lidas, não decifradas.</h2><p>{project.challenge}</p></div></Reveal>
          <Reveal delay={60}><div><span className="eyebrow">A direção</span><h2>Resumo primeiro. Detalhe sob demanda.</h2><p>{project.approach}</p></div></Reveal>
          <Reveal delay={120}><div><span className="eyebrow">O resultado técnico</span><h2>Fluxos, dados e infraestrutura conectados.</h2><p>{project.outcome}</p></div></Reveal>
        </div>
      </section>

      <section className="section section--case-scope">
        <div className="shell case-scope-grid">
          <div><span className="eyebrow">Escopo construído</span><h2>Visão financeira sem virar planilha.</h2></div>
          <ul className="scope-list">{project.capabilities.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}</li>)}</ul>
        </div>
      </section>

      <section className="section section--stack section--stack-dark">
        <div className="shell stack-layout">
          <div><span className="eyebrow eyebrow--light">Stack</span><h2>Frontend, backend, dados e infraestrutura.</h2></div>
          <div className="stack-chips stack-chips--dark">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </section>

      <TechnicalCase
        dark
        intro="O POUPEME separa a experiência em Next.js de uma API Express e usa PostgreSQL como fonte principal de dados. A leitura técnica aqui não é apenas sobre a stack: é sobre consistência financeira, autenticação, cache, evolução do domínio e o que precisaria endurecer antes de um cenário de produção com dinheiro real."
        facts={[
          { label: 'Arquitetura', value: 'Frontend + API separada' },
          { label: 'Persistência', value: 'Prisma + PostgreSQL 15' },
          { label: 'Cache', value: 'Redis 7 opcional' },
          { label: 'Infra', value: 'Docker Compose' },
        ]}
        architecture={[
          'Next.js entrega os fluxos financeiros e dashboards',
          'Express expõe autenticação e recursos via API',
          'Prisma organiza acesso, schema e evolução dos dados',
          'PostgreSQL persiste o domínio; Redis apoia cache quando necessário',
        ]}
        decisions={[
          {
            title: 'Por que PostgreSQL em um produto financeiro?',
            choice: 'Consistência vale mais do que flexibilidade de schema.',
            reason: 'Transações, categorias, usuários e metas formam um domínio relacional e sensível a inconsistências. PostgreSQL oferece integridade, constraints, índices e transações ACID, uma base adequada para evoluir regras financeiras sem depender de correções na camada de interface.',
            tradeoff: 'O banco não resolve consistência sozinho. Operações compostas precisam usar transações, constraints e regras de domínio corretamente; caso contrário, ainda é possível persistir estados inválidos.',
          },
          {
            title: 'Por que Prisma?',
            choice: 'Produtividade de acesso a dados com schema explícito.',
            reason: 'Prisma reduz código repetitivo de persistência, torna a modelagem visível e facilita migrations. Em TypeScript, também melhora a previsibilidade do contrato entre aplicação e banco, especialmente em um domínio que tende a ganhar novas entidades e relações.',
            tradeoff: 'Abstração não elimina SQL. Consultas críticas, índices, planos de execução e transações ainda precisam ser entendidos quando performance ou regras complexas aparecerem.',
          },
          {
            title: 'Redis é obrigatório?',
            choice: 'Não. Cache deve ser otimização, não dependência do domínio.',
            reason: 'O repositório trata Redis como opcional. Isso é uma boa fronteira: a verdade permanece no PostgreSQL e o cache pode reduzir leituras repetidas sem impedir a aplicação de funcionar quando estiver indisponível.',
            tradeoff: 'Ao introduzir cache surge o problema de invalidação. Métricas financeiras não podem exibir dado antigo sem uma política clara de TTL, atualização e fallback.',
          },
          {
            title: 'JWT resolve autenticação sozinho?',
            choice: 'Resolve transporte de identidade, não todo o ciclo de sessão.',
            reason: 'JWT combinado com bcrypt permite autenticar e proteger rotas de forma simples em uma API separada. Para um produto financeiro em produção eu complementaria isso com estratégia de revogação, rotação, cookies seguros quando aplicável, trilha de login e proteção reforçada de endpoints sensíveis.',
            tradeoff: 'Tokens longos e armazenados de forma inadequada ampliam impacto em caso de vazamento. Segurança de sessão precisa ser pensada como sistema, não como uma biblioteca.',
          },
        ]}
        review={[
          { title: 'Segurança', body: 'O repositório documenta bcrypt, JWT com expiração, rate limiting, Helmet, CORS configurado por domínio e middleware de proteção de rotas. Para produção eu adicionaria testes de autorização, rotação de secrets, auditoria de eventos sensíveis e uma revisão específica de armazenamento de tokens.' },
          { title: 'Qualidade de dados', body: 'Em finanças, o ponto crítico é impedir estado impossível: valores inválidos, duplicidades, operações parciais ou somatórios inconsistentes. Eu trataria constraints, transações de banco, idempotência e testes de integração como requisitos antes de aumentar o escopo.' },
          { title: 'Infraestrutura', body: 'Docker Compose torna frontend, API, PostgreSQL e Redis reproduzíveis no mesmo ambiente. Em produção, eu separaria persistência da vida útil dos containers, adicionaria backups testados, health checks, logs centralizados e configuração segura de variáveis de ambiente.' },
        ]}
        improvements={[
          'Cobrir autenticação, CRUD financeiro e cálculos com testes de integração e E2E dos fluxos críticos.',
          'Definir transações e idempotência para operações financeiras compostas e revisar constraints do banco.',
          'Medir antes de cachear: documentar estratégia de Redis, TTL, invalidação e fallback.',
          'Adicionar observabilidade, backup/restore, gestão de secrets e pipeline de CI/CD antes de tratar o sistema como produção financeira.',
        ]}
      />

      <section className="next-case next-case--light">
        <div className="shell next-case__inner">
          <span className="eyebrow">Voltar aos projetos</span>
          <h2>EVO Gestão</h2>
          <Link className="button button--primary" href="/projetos/evo-gestao">Ver case <ArrowIcon /></Link>
        </div>
      </section>
    </>
  );
}
