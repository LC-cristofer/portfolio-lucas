import type { Metadata } from 'next';
import Link from 'next/link';
import { CaseIntro } from '@/components/CaseIntro';
import { CaseStory } from '@/components/CaseStory';
import { Reveal } from '@/components/Reveal';
import { TechnicalCase } from '@/components/TechnicalCase';
import { getProject } from '@/lib/projects';

const project = getProject('evo-gestao');

export const metadata: Metadata = {
  title: 'EVO Gestão',
  description: project.summary,
};

export default function EvoPage() {
  return (
    <>
      <CaseIntro project={project} note="O repositório público usa somente dados fictícios de demonstração. Dados pessoais reais não fazem parte da versão publicada." />

      <CaseStory
        project={project}
        headings={['Processos espalhados viram fricção.', 'Organizar pela jornada, não pela planilha.', 'Uma base pronta para crescer.']}
        scopeHeading="Produto, não só interface."
      />

      <TechnicalCase
        intro="O EVO foi pensado como um sistema de gestão com domínio relacional, permissões diferentes por papel e vários módulos operacionais. A arquitetura prioriza clareza de responsabilidades, manutenção por uma equipe pequena e espaço para crescer sem começar com complexidade distribuída desnecessária."
        facts={[
          { label: 'Arquitetura', value: 'Monólito modular' },
          { label: 'Frontend', value: 'Next.js + React Query + Zustand' },
          { label: 'Backend', value: 'Express + API HTTP' },
          { label: 'Dados', value: 'PostgreSQL + auditoria' },
        ]}
        architecture={[
          'Next.js organiza interface, jornadas e dashboards',
          'Express concentra regras de negócio e autorização',
          'PostgreSQL preserva relações e consistência do domínio',
          'Jobs, e-mail, uploads e logs apoiam rotinas operacionais',
        ]}
        decisions={[
          {
            title: 'Por que monólito modular e não microsserviços?',
            choice: 'Menos complexidade operacional no estágio atual.',
            reason: 'Para um sistema com equipe pequena e dezenas de módulos relacionados, separar responsabilidades dentro de uma aplicação modular mantém deploy, transações e debugging mais simples. As fronteiras continuam claras o suficiente para extrair serviços no futuro se houver necessidade real.',
            tradeoff: 'O crescimento exige disciplina de módulos e contratos internos. Se tudo começar a compartilhar tudo, o monólito deixa de ser modular e vira acoplamento.',
          },
          {
            title: 'Por que PostgreSQL?',
            choice: 'O problema é fortemente relacional.',
            reason: 'Funcionários, unidades, cargos, admissões, benefícios, documentos, histórico e permissões possuem relações que precisam permanecer consistentes. Um banco relacional facilita integridade, consultas com joins, transações e auditoria.',
            tradeoff: 'Modelagem e migrations precisam ser tratadas com cuidado; mudanças de domínio mal planejadas podem gerar migrações custosas conforme a base cresce.',
          },
          {
            title: 'React Query e Zustand juntos fazem sentido?',
            choice: 'Cada ferramenta resolve um tipo diferente de estado.',
            reason: 'React Query fica responsável por server state — cache, loading, erro, refetch e sincronização com a API. Zustand fica restrito ao estado global do cliente, como autenticação e permissões. Isso evita transformar uma store global em réplica manual do backend.',
            tradeoff: 'É preciso manter a fronteira clara. Duplicar a mesma informação no cache e na store cria inconsistência e aumenta a dificuldade de debugging.',
          },
          {
            title: 'Como permissões entram na arquitetura?',
            choice: 'RBAC no backend, não só na interface.',
            reason: 'A interface adapta a experiência por papel, mas a autorização real precisa acontecer na API. TI, diretoria, RH e supervisão possuem escopos diferentes, inclusive restrição por unidade, então esconder um botão no frontend não seria uma barreira de segurança suficiente.',
            tradeoff: 'RBAC tende a ficar complexo quando exceções aumentam. Uma evolução natural seria centralizar políticas e testes de autorização por recurso e ação.',
          },
        ]}
        review={[
          { title: 'Segurança e privacidade', body: 'O projeto documenta JWT com refresh token, bcrypt, rate limiting, Helmet, CORS restrito, validação com Zod, queries parametrizadas, regras de upload e auditoria de ações críticas. Para a versão pública de portfólio, dados pessoais foram removidos e substituídos por uma base fictícia de demonstração. Em produção, eu ainda trataria rotação de secrets, política de sessão, backup e MFA para perfis privilegiados.' },
          { title: 'Manutenção e observabilidade', body: 'A separação entre frontend, API, banco e serviços auxiliares facilita localizar responsabilidades. Logs com Winston e audit logs ajudam a rastrear operação; a próxima camada seria centralizar logs, métricas, tracing e alertas em vez de depender apenas de arquivos locais.' },
          { title: 'Deploy e escala', body: 'O desenho contempla PM2 e execução em cluster no Windows Server, além de Docker Compose no repositório. Antes de escalar horizontalmente, eu mediria gargalos reais de API, banco, uploads e jobs para não distribuir complexidade sem evidência.' },
        ]}
        improvements={[
          'Criar testes de integração para autenticação, RBAC, admissões e fluxos de maior risco.',
          'Adicionar CI com lint, typecheck, testes, migrations controladas e análise de segurança antes do deploy.',
          'Mover uploads para object storage se volume, disponibilidade ou múltiplas instâncias passarem a exigir armazenamento compartilhado.',
          'Formalizar observabilidade com métricas, logs centralizados, alertas e estratégia de backup/restore testada.',
        ]}
      />

      <section className="next-case">
        <div className="shell">
          <Reveal variant="rule" className="next-case__inner">
            <p>Próximo projeto</p>
            <Link href="/projetos/poupeme">POUPEME</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
