import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowIcon } from '@/components/ArrowIcon';
import { Reveal } from '@/components/Reveal';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Serviços',
  description: 'Serviços de tecnologia e marketing: sites, sistemas, dashboards, integrações, manutenção, campanhas, identidade e presença digital.',
};

const technologyServices = [
  {
    title: 'Sites & landing pages',
    text: 'Para apresentar melhor um negócio, organizar uma oferta e conduzir a pessoa até o próximo passo sem depender de uma página improvisada.',
  },
  {
    title: 'Sistemas & dashboards',
    text: 'Interfaces e fluxos para organizar operação, informação e tarefas quando planilhas, mensagens e processos manuais começam a limitar o trabalho.',
  },
  {
    title: 'Integrações & automações',
    text: 'Conexão entre serviços, formulários, APIs e rotinas para reduzir tarefas repetitivas e evitar que informação importante fique espalhada.',
  },
  {
    title: 'Manutenção & evolução',
    text: 'Correções, melhorias de interface, performance e evolução de funcionalidades em produtos que já existem e precisam continuar amadurecendo.',
  },
];

const marketingServices = [
  {
    title: 'Campanhas & social media',
    text: 'Conceito, mensagem e direção visual para transformar um objetivo em comunicação coerente em diferentes formatos e canais.',
  },
  {
    title: 'Identidade & presença digital',
    text: 'Organização de linguagem visual, pontos de contato e percepção para que a marca pareça tão profissional quanto a entrega que oferece.',
  },
  {
    title: 'Materiais comerciais',
    text: 'Apresentações, peças institucionais, folders, criativos e materiais que ajudam a explicar melhor uma proposta e apoiar a venda.',
  },
  {
    title: 'Posicionamento & mensagem',
    text: 'Clareza sobre o que comunicar, para quem e com qual argumento — antes de produzir mais conteúdo sem uma direção definida.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="services-hero">
        <div className="shell services-hero__inner">
          <span className="eyebrow">Serviços</span>
          <h1>Serviços para construir, organizar e evoluir sua presença digital.</h1>
          <p>
            Tecnologia é a frente principal. Marketing entra quando mensagem, percepção e experiência também fazem parte do problema. Você pode contratar uma área específica ou combinar as duas quando isso realmente melhora a solução.
          </p>
          <div className="services-hero__actions">
            <a className="button button--primary" href={site.whatsapp} target="_blank" rel="noopener noreferrer">Explicar minha necessidade <ArrowIcon /></a>
            <Link className="button button--secondary" href="/projetos">Ver projetos <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <section className="services-block services-block--tech" id="tecnologia">
        <div className="shell">
          <Reveal>
            <div className="services-block__head">
              <div>
                <span className="eyebrow eyebrow--light">01 · Tecnologia</span>
                <h2>Quando o gargalo está na operação, no produto ou na experiência digital.</h2>
              </div>
              <p>
                O ponto de partida é entender o problema antes de escolher ferramenta ou stack. A solução pode ser uma página simples, um sistema completo ou uma evolução do que já existe.
              </p>
            </div>
          </Reveal>

          <div className="services-grid">
            {technologyServices.map((service, index) => (
              <Reveal key={service.title} delay={index * 60}>
                <article className="service-detail-card">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="services-block services-block--marketing" id="marketing">
        <div className="shell">
          <Reveal>
            <div className="services-block__head">
              <div>
                <span className="eyebrow">02 · Marketing</span>
                <h2>Quando a entrega é boa, mas a comunicação ainda não deixa isso claro.</h2>
              </div>
              <p>
                Marketing aqui não entra como volume de postagem. A prioridade é organizar mensagem, visual e pontos de contato para melhorar percepção e entendimento.
              </p>
            </div>
          </Reveal>

          <div className="services-grid">
            {marketingServices.map((service, index) => (
              <Reveal key={service.title} delay={index * 60}>
                <article className="service-detail-card">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="services-integrated">
        <div className="shell services-integrated__grid">
          <Reveal>
            <span className="eyebrow eyebrow--light">03 · Projeto integrado</span>
            <h2>Quando tecnologia e comunicação precisam resolver o mesmo problema.</h2>
          </Reveal>
          <Reveal className="services-integrated__side" delay={70}>
            <p>
              Em alguns projetos, separar completamente site, mensagem, design e desenvolvimento cria retrabalho. Nesses casos, eu organizo as decisões dentro de uma direção única e mantenho cada disciplina com seu papel claro.
            </p>
            <a className="button button--light" href={site.whatsapp} target="_blank" rel="noopener noreferrer">Falar sobre o projeto <ArrowIcon /></a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
