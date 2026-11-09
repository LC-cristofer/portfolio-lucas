import Link from 'next/link';
import type { Project } from '@/lib/projects';
import { ProjectVisual } from './ProjectVisual';
import { Reveal } from './Reveal';

/** Um projeto por linha: tela do produto de um lado, texto do outro. `reverse` inverte os lados. */
export function ProjectCard({ project, reverse = false }: { project: Project; reverse?: boolean }) {
  const href = `/projetos/${project.slug}`;

  return (
    <Reveal as="article" variant="rule" className={`project-row${reverse ? ' is-reverse' : ''}`}>
      <Reveal variant="window" delay={140} className="project-row__visual">
        <Link href={href} tabIndex={-1} aria-hidden="true">
          <ProjectVisual project={project} />
        </Link>
      </Reveal>
      <Reveal delay={80} className="project-row__text">
        <h3>{project.title}</h3>
        <p className="project-row__kind">{project.kind}, {project.year}</p>
        <p>{project.summary}</p>
        <p className="project-row__stack">{project.stack.join(', ')}</p>
        <Link className="text-link" href={href}>Ler o estudo de caso</Link>
      </Reveal>
    </Reveal>
  );
}
