import type { Project } from '@/lib/projects';
import { Reveal } from './Reveal';

type CaseStoryProps = {
  project: Project;
  /** Títulos das três linhas: problema, direção e resultado. */
  headings: [string, string, string];
  scopeHeading: string;
};

/** Problema, direção e resultado do projeto, mais o escopo construído e as tecnologias. */
export function CaseStory({ project, headings, scopeHeading }: CaseStoryProps) {
  const rows = [
    [headings[0], project.challenge],
    [headings[1], project.approach],
    [headings[2], project.outcome],
  ];

  return (
    <section className="section case-story">
      <div className="shell">
        {rows.map(([title, text]) => (
          <Reveal key={title} variant="rule" className="case-row">
            <h2>{title}</h2>
            <p>{text}</p>
          </Reveal>
        ))}
        <Reveal variant="rule" className="case-row">
          <h2>{scopeHeading}</h2>
          <div>
            <ul className="scope-list">
              {project.capabilities.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p className="stack-line"><strong>Tecnologias.</strong> {project.stack.join(', ')}.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
