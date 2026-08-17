import Link from 'next/link';
import type { Project } from '@/lib/projects';
import { ArrowIcon } from './ArrowIcon';
import { ProjectVisual } from './ProjectVisual';

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={`project-card project-card--${project.theme} ${featured ? 'is-featured' : ''}`}>
      <div className="project-card__visual">
        <ProjectVisual project={project} compact={!featured} />
      </div>
      <div className="project-card__content">
        <div className="project-card__meta">
          <span>Projeto real</span>
          <span>{project.year}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <Link className="text-link" href={`/projetos/${project.slug}`}>
          Ver estudo de caso <ArrowIcon size={16} />
        </Link>
      </div>
    </article>
  );
}
