import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowIcon } from '@/components/ArrowIcon';
import { MarketingStudy } from '@/components/MarketingStudy';
import { ProjectCard } from '@/components/ProjectCard';
import { Reveal } from '@/components/Reveal';
import { projects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'Portfólio de Lucas Cristofer com produtos digitais reais e um projeto conceitual de marketing apresentado com contexto e processo.',
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero page-hero--light">
        <div className="shell page-hero__grid">
          <div>
            <span className="eyebrow">Portfólio</span>
            <h1>Projetos para mostrar como eu penso, desenho e construo.</h1>
          </div>
          <p>Produtos digitais reais com contexto de produto e leitura técnica — arquitetura, decisões, trade-offs, segurança e próximos passos — além de um estudo conceitual de marketing apresentado sem confundir conceito com trabalho de cliente.</p>
        </div>
      </section>

      <section className="section section--project-index">
        <div className="shell project-index">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 70}>
              <ProjectCard project={project} featured />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--concept-index">
        <div className="shell concept-index-grid">
          <Reveal className="concept-index-copy">
            <span className="eyebrow">Marketing · estudo conceitual</span>
            <h2>Campanha Inclusão</h2>
            <p>
              Um estudo de direção criativa para demonstrar raciocínio de campanha, sistema visual e desdobramento em diferentes formatos.
            </p>
            <dl className="concept-dl">
              <div><dt>Briefing</dt><dd>Comunicar inclusão de forma simples, humana e adaptável a canais diferentes.</dd></div>
              <div><dt>Público</dt><dd>Equipes, comunidade e públicos institucionais.</dd></div>
              <div><dt>Entregáveis</dt><dd>Conceito, key visual, social media, material institucional e regras de desdobramento.</dd></div>
            </dl>
            <Link className="text-link" href="/marketing#estudo-conceitual">Ver estudo completo <ArrowIcon /></Link>
          </Reveal>
          <Reveal delay={80}><MarketingStudy /></Reveal>
        </div>
      </section>
    </>
  );
}
