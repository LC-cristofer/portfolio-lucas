import Link from 'next/link';
import type { Project } from '@/lib/projects';
import { ProjectVisual } from './ProjectVisual';
import { Reveal } from './Reveal';

/** Um projeto por linha: tela do produto de um lado, texto do outro. `reverse` inverte os lados. */
export function ProjectCard({ project, reverse = false }: { project: Project; reverse?: boolean }) {
  const caseHref = project.caseStudy ? `/projetos/${project.slug}` : null;
  const external = project.caseStudy ? null : project.link ?? null;
  const meta = project.caseStudy ? project.stack : project.highlights;
  const visual = <ProjectVisual project={project} />;

  return (
    <Reveal as="article" variant="rule" className={`project-row${reverse ? ' is-reverse' : ''}`}>
      <Reveal variant="window" delay={140} className="project-row__visual">
        {caseHref ? (
          <Link href={caseHref} tabIndex={-1} aria-hidden="true">{visual}</Link>
        ) : external ? (
          <a href={external.href} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true">{visual}</a>
        ) : (
          visual
        )}
      </Reveal>
      <Reveal delay={80} className="project-row__text">
        <div className="project-row__head">
          <h3>{project.title}</h3>
          {project.inProgress ? <span className="status-tag">Em construção</span> : null}
        </div>
        <p className="project-row__kind">{project.kind}, {project.year}</p>
        <p>{project.summary}</p>
        <p className="project-row__stack">{meta.join(', ')}</p>
        {caseHref ? (
          <Link className="text-link" href={caseHref}>Ler o estudo de caso</Link>
        ) : external ? (
          <a className="text-link" href={external.href} target="_blank" rel="noopener noreferrer">{external.label}</a>
        ) : null}
      </Reveal>
    </Reveal>
  );
}
