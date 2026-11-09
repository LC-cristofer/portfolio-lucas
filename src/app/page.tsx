import Link from 'next/link';
import { ArrowIcon } from '@/components/ArrowIcon';
import { HomeHeroCarousel } from '@/components/HomeHeroCarousel';
import { ProjectCard } from '@/components/ProjectCard';
import { Reveal } from '@/components/Reveal';
import { SocialLinks } from '@/components/SocialLinks';
import { projects } from '@/lib/projects';
import { site } from '@/lib/site';

export default function HomePage() {
  return (
    <>
      <section className="home-showcase">
        <div className="shell home-showcase__hero">
          <HomeHeroCarousel />
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
                Produtos digitais com foco em operação, clareza de interface e evolução técnica — com contexto suficiente para entender o que existe por trás da tela.
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

      <section className="section section--about-home" id="quem-sou-eu">
        <div className="shell about-home-grid about-home-grid--text-only">
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
              <Link className="button button--light" href="/sobre">Conhecer minha trajetória <ArrowIcon /></Link>
              <SocialLinks compact light />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="closing-cta closing-cta--blue">
        <div className="shell closing-cta__inner">
          <Reveal>
            <span className="eyebrow eyebrow--light">Vamos conversar?</span>
            <h2>Me conte o que você precisa colocar de pé.</h2>
            <div className="closing-actions">
              <a className="button button--light" href={site.whatsapp} target="_blank" rel="noopener noreferrer">Falar no WhatsApp <ArrowIcon /></a>
              <Link className="text-link text-link--light" href="/contato">Prefiro escrever por e-mail <ArrowIcon /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
