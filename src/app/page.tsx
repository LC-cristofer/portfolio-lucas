import Image from 'next/image';
import Link from 'next/link';
import { ArrowIcon } from '@/components/ArrowIcon';
import { ProjectCard } from '@/components/ProjectCard';
import { Reveal } from '@/components/Reveal';
import { SocialLinks } from '@/components/SocialLinks';
// import { VideoShowcase } from '@/components/VideoShowcase'; // Reativar quando o vídeo de apresentação estiver pronto.
import { projects } from '@/lib/projects';
import { site } from '@/lib/site';

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="shell home-hero__grid">
          <div className="home-hero__copy">
            <span className="eyebrow">Lucas Cristofer · Marketing & Tecnologia</span>
            <h1>Comunicação que chama atenção. Tecnologia que sustenta o negócio.</h1>
            <p className="hero-lead">
              Crio sites, produtos digitais e campanhas para profissionais e empresas que precisam se apresentar melhor, vender melhor e simplificar processos.
            </p>
            <div className="hero-actions">
              <Link className="button button--primary" href="/projetos">Ver portfólio <ArrowIcon /></Link>
              <a className="text-link text-link--hero" href={site.whatsapp} target="_blank" rel="noopener noreferrer">Falar no WhatsApp <ArrowIcon /></a>
            </div>
            <div className="hero-services" aria-label="Áreas de atuação">
              <span>Sites & landing pages</span>
              <span>Produtos digitais</span>
              <span>Campanhas</span>
              <span>Identidade & conteúdo</span>
            </div>
          </div>

          <div className="hero-portrait-wrap">
            <figure className="hero-portrait">
              <Image
                src="/images/lucas-hero.webp"
                alt="Lucas Cristofer"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 46vw"
              />
              <figcaption className="hero-portrait__caption">
                <span>Marketing · Design · Desenvolvimento</span>
                <strong>Estratégia e execução no mesmo projeto.</strong>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section section--about-home" id="quem-sou-eu">
        <div className="shell about-home-grid about-home-grid--text-only">
          {/*
            Vídeo de apresentação temporariamente oculto para o primeiro deploy.
            Quando o vídeo estiver pronto:
            1. reative o import de VideoShowcase no topo deste arquivo;
            2. troque about-home-grid--text-only por about-home-grid--media-first;
            3. reative o bloco abaixo antes do texto.

            <Reveal className="about-home-media">
              <VideoShowcase />
            </Reveal>
          */}
          <Reveal className="about-home-copy">
            <span className="eyebrow eyebrow--light">Quem sou eu</span>
            <h2>Eu conecto comunicação e tecnologia para resolver problemas de negócio.</h2>
            <p>
              Minha experiência em marketing me ensinou a pensar em mensagem, público e percepção. O desenvolvimento me deu a ferramenta para transformar essa estratégia em sites, sistemas e experiências digitais que funcionam de verdade.
            </p>
            <div className="about-pillars">
              <span>Estratégia</span><span>Direção visual</span><span>Desenvolvimento</span>
            </div>
            <div className="about-home-actions">
              <Link className="button button--light" href="/sobre">Conhecer meu trabalho <ArrowIcon /></Link>
              <SocialLinks compact light />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--selected-work">
        <div className="shell">
          <Reveal>
            <div className="section-heading section-heading--split">
              <div>
                <span className="eyebrow">Portfólio em destaque</span>
                <h2>Projetos reais para mostrar como eu penso e construo.</h2>
              </div>
              <p>
                Aqui você encontra produtos digitais desenvolvidos com foco em operação, clareza de interface e evolução técnica — com contexto suficiente para entender o que existe por trás da tela.
              </p>
            </div>
          </Reveal>
          <div className="project-stack">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 70}>
                <ProjectCard project={project} featured />
              </Reveal>
            ))}
          </div>
          <div className="section-footer-action">
            <Link className="button button--secondary" href="/projetos">Ver portfólio completo <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <section className="section section--disciplines">
        <div className="shell discipline-layout">
          <Reveal className="discipline-layout__intro">
            <span className="eyebrow">Serviços</span>
            <h2>Você pode contratar uma frente ou combinar as duas.</h2>
            <p>
              Tecnologia e marketing têm escopos próprios. Quando o projeto exige os dois, estratégia, conteúdo, design e desenvolvimento são pensados juntos desde o começo.
            </p>
          </Reveal>
          <div className="discipline-list">
            <Reveal>
              <article>
                <span>01</span>
                <div><h3>Tecnologia</h3><p>Sites, landing pages, sistemas, dashboards, integrações e manutenção.</p></div>
                <Link aria-label="Explorar serviços de tecnologia" href="/tecnologia"><ArrowIcon /></Link>
              </article>
            </Reveal>
            <Reveal delay={70}>
              <article>
                <span>02</span>
                <div><h3>Marketing</h3><p>Campanhas, social media, identidade, materiais e presença digital.</p></div>
                <Link aria-label="Explorar serviços de marketing" href="/marketing"><ArrowIcon /></Link>
              </article>
            </Reveal>
            <Reveal delay={140}>
              <article>
                <span>03</span>
                <div><h3>Projeto integrado</h3><p>Uma única direção para marca, comunicação e produto digital.</p></div>
                <Link aria-label="Falar sobre projeto integrado" href="/contato"><ArrowIcon /></Link>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--process">
        <div className="shell">
          <Reveal>
            <div className="section-heading section-heading--split">
              <div><span className="eyebrow">Processo</span><h2>Da primeira conversa à entrega.</h2></div>
              <p>Um processo direto para entender o problema, tomar decisões cedo e reduzir retrabalho durante a execução.</p>
            </div>
          </Reveal>
          <ol className="process-grid">
            {[
              ['01', 'Diagnóstico', 'Entendo objetivo, público, cenário atual e o que precisa mudar.'],
              ['02', 'Direção', 'Defino arquitetura, mensagem, referências e prioridades do projeto.'],
              ['03', 'Criação', 'Design e conteúdo são desenvolvidos com validações curtas.'],
              ['04', 'Construção', 'Desenvolvo, integro e preparo o produto para uso real.'],
              ['05', 'Revisão', 'Confiro responsividade, conteúdo, acessibilidade, fluxos e acabamento.'],
            ].map(([n, title, text]) => (
              <li key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="closing-cta">
        <div className="shell closing-cta__inner">
          <Reveal>
            <span className="eyebrow eyebrow--light">Vamos conversar?</span>
            <h2>Me conte o que você precisa colocar de pé.</h2>
            <div className="closing-actions">
              <a className="button button--light" href={site.whatsapp} target="_blank" rel="noopener noreferrer">Falar no WhatsApp <ArrowIcon /></a>
              <Link className="text-link text-link--light" href="/contato">Enviar briefing <ArrowIcon /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
