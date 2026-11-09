import type { Metadata } from 'next';
import Link from 'next/link';
import { CaseIntro } from '@/components/CaseIntro';
import { CaseStory } from '@/components/CaseStory';
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
      <CaseIntro project={project} />

      <CaseStory
        project={project}
        headings={['Finanças precisam ser lidas, não decifradas.', 'Resumo primeiro. Detalhe sob demanda.', 'Fluxos, dados e infraestrutura conectados.']}
        scopeHeading="Visão financeira sem virar planilha."
      />

      <TechnicalCase
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

      <section className="next-case">
        <div className="shell">
          <Reveal variant="rule" className="next-case__inner">
            <p>Outro projeto</p>
            <Link href="/projetos/evo-gestao">EVO Gestão</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
