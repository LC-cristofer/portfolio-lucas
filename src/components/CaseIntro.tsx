import Link from 'next/link';
import type { Project } from '@/lib/projects';
import { ProjectVisual } from './ProjectVisual';
import { Reveal } from './Reveal';
import { SplitText } from './SplitText';

/** Abertura de um estudo de caso: título, resumo, ficha rápida e a tela do produto. */
export function CaseIntro({ project, note }: { project: Project; note?: string }) {
  return (
    <section className="case-intro">
      <div className="shell case-intro__top">
        <Link className="back-link" href="/projetos">Projetos</Link>
        <h1><SplitText text={project.title} /></h1>
        <p className="case-intro__lead">{project.summary}</p>
        <dl className="case-facts">
          <div><dt>Ano</dt><dd>{project.year}</dd></div>
          <div><dt>Tipo</dt><dd>{project.kind}</dd></div>
          <div>
            <dt>Código</dt>
            <dd>
              {project.repoUrl ? (
                <a className="text-link" href={project.repoUrl} target="_blank" rel="noopener noreferrer">Repositório no GitHub</a>
              ) : (
                'Repositório privado'
              )}
            </dd>
          </div>
        </dl>
        {note ? <p className="case-intro__note">{note}</p> : null}
      </div>
      <div className="case-intro__stage">
        <div className="shell">
          <Reveal variant="window">
            <ProjectVisual project={project} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
