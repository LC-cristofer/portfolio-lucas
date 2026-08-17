import { Reveal } from './Reveal';

type Fact = {
  label: string;
  value: string;
};

type Decision = {
  title: string;
  choice: string;
  reason: string;
  tradeoff: string;
};

type ReviewBlock = {
  title: string;
  body: string;
};

type TechnicalCaseProps = {
  intro: string;
  facts: Fact[];
  architecture: string[];
  decisions: Decision[];
  review: ReviewBlock[];
  improvements: string[];
  dark?: boolean;
};

export function TechnicalCase({
  intro,
  facts,
  architecture,
  decisions,
  review,
  improvements,
  dark = false,
}: TechnicalCaseProps) {
  return (
    <section className={`section technical-case ${dark ? 'technical-case--dark' : ''}`}>
      <div className="shell technical-case__inner">
        <Reveal>
          <div className="technical-case__heading">
            <span className={`eyebrow ${dark ? 'eyebrow--light' : ''}`}>Leitura técnica</span>
            <h2>Stack e decisões técnicas.</h2>
            <p>{intro}</p>
          </div>
        </Reveal>

        <div className="technical-facts" aria-label="Resumo técnico do projeto">
          {facts.map((fact, index) => (
            <Reveal key={fact.label} delay={index * 45}>
              <article className="technical-fact">
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="technical-architecture">
            <div>
              <span className={`eyebrow ${dark ? 'eyebrow--light' : ''}`}>Arquitetura</span>
              <h3>Como as camadas se organizam</h3>
            </div>
            <ol>
              {architecture.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{item}</strong>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <div className="technical-decisions">
          {decisions.map((decision, index) => (
            <Reveal key={decision.title} delay={index * 55}>
              <article className="technical-decision">
                <span className="technical-decision__index">Decisão {String(index + 1).padStart(2, '0')}</span>
                <h3>{decision.title}</h3>
                <strong>{decision.choice}</strong>
                <p>{decision.reason}</p>
                <div className="technical-tradeoff">
                  <span>Trade-off</span>
                  <p>{decision.tradeoff}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="technical-review">
          {review.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <article>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="technical-next">
            <div>
              <span className={`eyebrow ${dark ? 'eyebrow--light' : ''}`}>Próxima versão</span>
              <h3>O que eu evoluiria antes de chamar isso de “pronto para escalar”.</h3>
            </div>
            <ul>
              {improvements.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
