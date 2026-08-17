import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowIcon } from '@/components/ArrowIcon';
import { Reveal } from '@/components/Reveal';
// import { VideoShowcase } from '@/components/VideoShowcase'; // Reativar junto com a seção comentada abaixo.

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Conheça a forma de trabalho de Lucas Cristofer na interseção entre estratégia, design, marketing e desenvolvimento.',
};

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div className="shell about-hero-grid">
          <div className="about-hero-copy">
            <span className="eyebrow">Quem sou eu</span>
            <h1>Eu trabalho na interseção entre comunicação, design e tecnologia.</h1>
            <p>Minha base em marketing me faz começar pela mensagem, pelo público e pelo objetivo. O desenvolvimento entra para transformar essa direção em experiências e produtos que funcionam no dia a dia.</p>
          </div>
          <figure className="about-portrait about-portrait--studio">
            <Image src="/images/lucas-hero.webp" alt="Retrato profissional de Lucas Cristofer" fill priority sizes="(max-width: 900px) 100vw, 42vw" />
          </figure>
        </div>
      </section>

      {/*
        Seção de apresentação em vídeo temporariamente oculta para o primeiro deploy.
        Reative este bloco quando o vídeo final estiver pronto e reative o import de VideoShowcase.

        <section className="section section--about-video">
          <div className="shell about-video-grid">
            <Reveal className="about-video-copy">
              <span className="eyebrow">Apresentação</span>
              <h2>Minha forma de pensar, em poucos minutos.</h2>
              <p>Trajetória, processo e o tipo de problema que gosto de resolver.</p>
            </Reveal>
            <Reveal delay={70}><VideoShowcase /></Reveal>
          </div>
        </section>
      */}

      <section className="section section--principles">
        <div className="shell principles-grid">
          <div><span className="eyebrow eyebrow--light">Princípios</span><h2>O que guia meu trabalho.</h2></div>
          <div className="principle-list">
            <article><span>01</span><h3>Clareza é parte do design.</h3><p>Se a pessoa não entende o que fazer, a interface ainda não terminou.</p></article>
            <article><span>02</span><h3>Estética precisa ter função.</h3><p>Movimento, cor e composição existem para conduzir atenção, não para provar habilidade.</p></article>
            <article><span>03</span><h3>Negócio e usuário não são lados opostos.</h3><p>Um bom produto resolve o problema da pessoa e melhora o resultado de quem oferece.</p></article>
            <article><span>04</span><h3>Entrega inclui revisão.</h3><p>Responsividade, conteúdo, estados, acessibilidade e fluxo fazem parte do produto.</p></article>
          </div>
        </div>
      </section>

      <section className="closing-cta closing-cta--blue">
        <div className="shell closing-cta__inner">
          <span className="eyebrow eyebrow--light">Vamos trabalhar juntos?</span>
          <h2>Se o problema é importante, a execução também precisa ser.</h2>
          <Link className="button button--light" href="/contato">Falar sobre um projeto <ArrowIcon /></Link>
        </div>
      </section>
    </>
  );
}
