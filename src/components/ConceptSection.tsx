import Link from 'next/link';
import { ArrowIcon } from './ArrowIcon';
import { MarketingStudy } from './MarketingStudy';
import { Reveal } from './Reveal';

/** Estudo conceitual de marketing mostrado em /projetos. Só aparece quando features.marketing é true. */
export function ConceptSection() {
  return (
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
  );
}
