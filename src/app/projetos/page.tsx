import type { Metadata } from 'next';
import { ConceptSection } from '@/components/ConceptSection';
import { ProjectCard } from '@/components/ProjectCard';
import { SplitText } from '@/components/SplitText';
import { projects } from '@/lib/projects';
import { features } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Projetos',
  description: 'Dois produtos digitais completos, com a leitura técnica de cada um: arquitetura, decisões, segurança e próximos passos.',
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-intro">
        <div className="shell">
          <h1><SplitText text="Projetos" /></h1>
          <p className="page-intro__lead">
            Produtos que construí do banco de dados à interface. Cada estudo de caso mostra a arquitetura, as decisões, os trade-offs e o que eu faria na próxima versão.
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
