import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { SplitText } from '@/components/SplitText';

export const metadata: Metadata = {
  title: 'Serviços',
  description: 'Sites, landing pages, sistemas, dashboards e integrações: do banco de dados à interface, com código que dá para manter.',
};

const services = [
  ['Sites profissionais', 'Arquitetura de informação, interface responsiva, SEO técnico e performance.'],
  ['Landing pages', 'Páginas focadas em conversão, campanhas, captação e validação de oferta.'],
  ['Sistemas e dashboards', 'Fluxos internos, áreas autenticadas, indicadores, gestão de dados e permissões.'],
  ['Integrações e automação', 'Formulários, APIs, notificações, serviços externos e redução de trabalho repetitivo.'],
  ['Manutenção e evolução', 'Correções, melhorias, acompanhamento técnico e evolução contínua do produto.'],
  ['Estrutura digital', 'Domínio, hospedagem, ambientes, analytics e preparação para produção.'],
];

const layers = [
  ['Frontend', 'React, Next.js, TypeScript, componentização, acessibilidade e responsividade.'],
  ['Backend', 'Node.js, APIs, autenticação, regras de negócio, segurança e integrações.'],
  ['Dados', 'PostgreSQL, Prisma, modelagem, consultas e consistência.'],
  ['Entrega', 'Docker, ambientes, performance, SEO técnico, QA e manutenção.'],
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-intro">
        <div className="shell">
          <h1><SplitText text="Sites e sistemas, do banco de dados à interface." /></h1>
          <p className="page-intro__lead">
            O escopo cresce conforme o problema, de uma página simples a um sistema interno com permissões. O princípio é o mesmo: clareza, velocidade e manutenção pensadas desde o início.
          </p>
          <div className="page-intro__actions">
            <Link className="button button--primary" href="/contato">Falar sobre um projeto</Link>
            <Link className="text-link" href="/projetos">Ver projetos</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal className="section-head"><h2>O que eu faço</h2></Reveal>
          <ul className="service-list">
            {services.map(([title, text], index) => (
              <Reveal as="li" variant="rule" delay={index % 2 ? 60 : 0} className="service-row" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal className="section-head">
            <h2>Como eu construo</h2>
            <p>Uma stack boa é a que serve o produto. Estas são as camadas que eu costumo cobrir em cada projeto.</p>
          </Reveal>
          <div className="layer-grid">
            {layers.map(([title, text], index) => (
              <Reveal as="article" variant="rule" delay={index * 70} className="layer-item" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
