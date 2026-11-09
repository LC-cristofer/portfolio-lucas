import type { Metadata } from 'next';
import { ConceptSection } from '@/components/ConceptSection';
import { ProjectCard } from '@/components/ProjectCard';
import { SplitText } from '@/components/SplitText';
import { projects } from '@/lib/projects';
import { features } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Projetos',
  description: 'Quatro projetos: dois produtos completos com estudo de caso técnico (arquitetura, decisões, segurança e próximos passos) e dois em construção.',
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-intro">
        <div className="shell">
          <h1><SplitText text="Projetos" /></h1>
          <p className="page-intro__lead">
            Produtos que construí do banco de dados à interface. Os dois primeiros têm estudo de caso completo, com arquitetura, decisões e trade-offs. Os outros dois estão em construção.
          </p>
        </div>
      </section>

      <section className="section project-index">
        <div className="shell project-list">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} reverse={index % 2 === 1} />
          ))}
        </div>
      </section>

      {features.marketing ? <ConceptSection /> : null}
    </>
  );
}
