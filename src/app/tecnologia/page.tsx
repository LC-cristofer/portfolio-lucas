import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowIcon } from '@/components/ArrowIcon';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectVisual } from '@/components/ProjectVisual';
import { Reveal } from '@/components/Reveal';
import { projects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Tecnologia',
  description: 'Sites, landing pages, sistemas, dashboards e produtos digitais com estratégia, interface e desenvolvimento alinhados.',
};

export default function TechnologyPage() {
  const evo = projects[0];
  return (
    <>
      <section className="discipline-hero discipline-hero--tech">
        <div className="shell discipline-hero__grid">
          <div className="discipline-hero__copy">
            <span className="eyebrow eyebrow--light">Tecnologia</span>
            <h1>Tecnologia para transformar processo em produto e ideia em experiência.</h1>
            <p>Sites, sistemas e produtos digitais com interface clara, estrutura técnica sólida e espaço para evoluir conforme o negócio cresce.</p>
            <Link className="button button--light" href="/contato">Falar sobre tecnologia <ArrowIcon /></Link>
          </div>
          <div className="discipline-hero__visual"><ProjectVisual project={evo} compact /></div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal><div className="section-heading section-heading--split"><div><span className="eyebrow">Serviços</span><h2>Do site ao sistema interno.</h2></div><p>O escopo cresce conforme o problema. O princípio continua o mesmo: clareza, velocidade e manutenção pensadas desde o início.</p></div></Reveal>
          <div className="service-grid">
            {[
              ['Sites profissionais', 'Arquitetura de informação, interface responsiva, SEO técnico e performance.'],
              ['Landing pages', 'Páginas focadas em conversão, campanhas, captação e validação de oferta.'],
              ['Sistemas & dashboards', 'Fluxos internos, áreas autenticadas, indicadores, gestão de dados e permissões.'],
              ['Integrações & automação', 'Formulários, APIs, notificações, serviços externos e redução de trabalho repetitivo.'],
              ['Manutenção & evolução', 'Correções, melhorias, acompanhamento técnico e evolução contínua do produto.'],
              ['Estrutura digital', 'Domínio, hospedagem, ambientes, analytics e preparação para produção.'],
            ].map(([title, text], index) => <Reveal delay={index * 45} key={title}><article className="service-item"><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></article></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section section--selected-work">
        <div className="shell">
          <Reveal><div className="section-heading section-heading--split"><div><span className="eyebrow">Projetos reais</span><h2>Projetos que colocam a tecnologia em uso.</h2></div><p>Dois produtos full stack que mostram minha forma de estruturar interface, dados, regras de negócio e operação.</p></div></Reveal>
          <div className="project-stack">
            {projects.map((project, index) => <Reveal key={project.slug} delay={index * 60}><ProjectCard project={project} featured /></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section section--tech-method">
        <div className="shell tech-method-grid">
          <div><span className="eyebrow eyebrow--light">Como eu construo</span><h2>Uma stack boa é a que serve o produto.</h2></div>
          <div className="tech-layers">
            <article><span>01</span><strong>Frontend</strong><p>React, Next.js, TypeScript, componentização, acessibilidade e responsividade.</p></article>
            <article><span>02</span><strong>Backend</strong><p>Node.js, APIs, autenticação, regras de negócio, segurança e integrações.</p></article>
            <article><span>03</span><strong>Dados</strong><p>PostgreSQL, Prisma, modelagem, consultas e consistência.</p></article>
            <article><span>04</span><strong>Entrega</strong><p>Docker, ambientes, performance, SEO técnico, QA e manutenção.</p></article>
          </div>
        </div>
      </section>
    </>
  );
}
