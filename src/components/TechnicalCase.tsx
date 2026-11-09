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
};

export function TechnicalCase({ intro, facts, architecture, decisions, review, improvements }: TechnicalCaseProps) {
  return (
    <section className="section technical-case">
      <div className="shell">
        <Reveal className="technical-case__heading">
          <h2>Decisões técnicas</h2>
          <p>{intro}</p>
        </Reveal>

        <dl className="tech-facts">
          {facts.map((fact, index) => (
            <Reveal key={fact.label} variant="rule" delay={index * 70} className="tech-fact">
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </Reveal>
          ))}
        </dl>

        <Reveal variant="rule" className="tech-block">
          <h3>Como as camadas se organizam</h3>
          <ol className="layers">
            {architecture.map((item) => <li key={item}>{item}</li>)}
          </ol>
        </Reveal>

        <div className="decisions">
          {decisions.map((decision) => (
            <Reveal as="article" variant="rule" className="decision" key={decision.title}>
              <div className="decision__head">
                <h3>{decision.title}</h3>
                <p className="decision__choice">{decision.choice}</p>
              </div>
              <div className="decision__body">
                <p>{decision.reason}</p>
                <p className="decision__tradeoff"><strong>Trade-off.</strong> {decision.tradeoff}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="review-grid">
          {review.map((item, index) => (
            <Reveal as="article" variant="rule" delay={index * 80} className="review-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal variant="rule" className="tech-block next-version">
          <h3>O que eu evoluiria antes de chamar isso de pronto para escalar</h3>
          <ul>
            {improvements.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
