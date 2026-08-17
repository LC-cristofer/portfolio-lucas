import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowIcon } from '@/components/ArrowIcon';
import { ProjectVisual } from '@/components/ProjectVisual';
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
      <section className="case-hero case-hero--evo">
        <div className="shell case-hero__grid">
          <div className="case-hero__copy">
            <span className="eyebrow">Projeto real · {project.year}</span>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
            <div className="case-tags">{project.capabilities.slice(0, 4).map((item) => <span key={item}>{item}</span>)}</div>
            <a className="button button--primary" href={project.repoUrl} target="_blank" rel="noopener noreferrer">Ver repositório no GitHub <ArrowIcon /></a>
            <div className="case-privacy-note"><strong>Privacidade:</strong> o repositório público usa somente dados demonstrativos fictícios. Dados pessoais reais não fazem parte da versão publicada.</div>
          </div>
          <div className="case-hero__visual"><ProjectVisual project={project} /></div>
        </div>
      </section>

      <section className="section case-story">
        <div className="shell case-story__grid">
          <Reveal><div><span className="eyebrow">O problema</span><h2>Processos espalhados viram fricção.</h2><p>{project.challenge}</p></div></Reveal>
          <Reveal delay={60}><div><span className="eyebrow">A direção</span><h2>Organizar pela jornada, não pela planilha.</h2><p>{project.approach}</p></div></Reveal>
          <Reveal delay={120}><div><span className="eyebrow">O resultado técnico</span><h2>Uma base pronta para crescer.</h2><p>{project.outcome}</p></div></Reveal>
        </div>
      </section>

      <section className="section section--case-scope">
        <div className="shell case-scope-grid">
          <Reveal>
            <div>
              <span className="eyebrow">Escopo construído</span>
              <h2>Produto, não só interface.</h2>
            </div>
          </Reveal>
          <ul className="scope-list">
            {project.capabilities.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="section section--stack">
        <div className="shell stack-layout">
          <div><span className="eyebrow">Stack</span><h2>Tecnologia a serviço da operação.</h2></div>
          <div className="stack-chips">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </section>

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
        <div className="shell next-case__inner">
          <span className="eyebrow eyebrow--light">Próximo projeto</span>
          <h2>POUPEME</h2>
          <Link className="button button--light" href="/projetos/poupeme">Ver case <ArrowIcon /></Link>
        </div>
      </section>
    </>
  );
}
