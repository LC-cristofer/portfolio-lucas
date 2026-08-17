import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowIcon } from '@/components/ArrowIcon';
import { AutoCarousel } from '@/components/AutoCarousel';
import { MarketingStudy } from '@/components/MarketingStudy';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Marketing',
  description: 'Campanhas, social media, identidade visual e materiais com estratégia, direção criativa e consistência de marca.',
};

const services = [
  ['Campanhas', 'Conceito, mensagem, direção visual e desdobramento por canal.'],
  ['Social media', 'Direção de conteúdo, posts, stories, criativos e peças para mídia paga.'],
  ['Identidade visual', 'Linguagem visual, tipografia, cores e aplicações essenciais da marca.'],
  ['Materiais impressos', 'Flyers, folders, cartazes, banners e materiais institucionais.'],
  ['Apresentações', 'Materiais comerciais e institucionais com narrativa e hierarquia.'],
  ['Presença digital', 'Organização de site, redes, Google, WhatsApp e pontos de contato da marca.'],
];

export default function MarketingPage() {
  return (
    <>
      <section className="discipline-hero discipline-hero--marketing">
        <div className="shell marketing-hero-grid">
          <div className="discipline-hero__copy discipline-hero__copy--marketing">
            <span className="eyebrow">Marketing</span>
            <h1>Comunicação coerente para a marca ser lembrada pelo motivo certo.</h1>
            <p>Estratégia, campanha, conteúdo e identidade visual organizados para criar presença — não apenas peças bonitas e desconectadas.</p>
            <Link className="button button--primary" href="/contato">Falar sobre marketing <ArrowIcon /></Link>
          </div>

          <AutoCarousel className="marketing-hero-system" aria-label="Etapas de um projeto de marketing" interval={3600}>
            <article><span>01</span><strong>Estratégia</strong><p>O que precisa ser comunicado, para quem e por quê.</p></article>
            <article><span>02</span><strong>Direção</strong><p>Mensagem, tom e linguagem visual que organizam a percepção.</p></article>
            <article><span>03</span><strong>Desdobramento</strong><p>Aplicação consistente em campanhas, social e materiais.</p></article>
          </AutoCarousel>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal>
            <div className="section-heading section-heading--split">
              <div><span className="eyebrow">Serviços</span><h2>Da estratégia à peça final.</h2></div>
              <p>O serviço pode ser pontual ou contínuo. A prioridade é manter mensagem, visual e canal alinhados ao objetivo do negócio.</p>
            </div>
          </Reveal>
          <div className="service-grid service-grid--marketing">
            {services.map(([title, text], index) => (
              <Reveal key={title} delay={index * 45}>
                <article className="service-item"><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--concept-study" id="estudo-conceitual">
        <div className="shell concept-study-grid">
          <Reveal className="concept-study-copy">
            <span className="eyebrow">Projeto conceitual</span>
            <h2>Campanha Inclusão</h2>
            <p className="concept-study-lead">Um estudo de direção criativa para demonstrar como eu transformo um tema amplo em mensagem, sistema visual e peças coerentes.</p>
            <div className="concept-story">
              <article><span>Contexto</span><p>Comunicar inclusão de forma humana, evitando linguagem burocrática e slogans vazios.</p></article>
              <article><span>Direção</span><p>Construir uma ideia central simples, capaz de funcionar em canais e formatos diferentes.</p></article>
              <article><span>Conceito</span><p>“Incluir começa por abrir espaço.” A campanha parte de uma ação concreta antes da promessa.</p></article>
              <article><span>Aplicações</span><p>Key visual, social media e material institucional dentro do mesmo sistema.</p></article>
            </div>
          </Reveal>
          <Reveal delay={90}><MarketingStudy /></Reveal>
        </div>
      </section>

      <section className="section section--marketing-process">
        <div className="shell">
          <div className="section-heading"><span className="eyebrow eyebrow--light">Processo</span><h2>Uma mensagem, vários pontos de contato.</h2></div>
          <ol className="marketing-process-grid">
            <li><span>01</span><strong>Diagnóstico</strong><p>Objetivo, público, contexto e percepção atual da marca.</p></li>
            <li><span>02</span><strong>Mensagem</strong><p>Proposta, argumento, tom de voz e hierarquia do conteúdo.</p></li>
            <li><span>03</span><strong>Sistema visual</strong><p>Direção que funciona em mais de uma peça e mais de um canal.</p></li>
            <li><span>04</span><strong>Execução</strong><p>Desdobramento e revisão para manter consistência até a entrega.</p></li>
          </ol>
        </div>
      </section>
    </>
  );
}
