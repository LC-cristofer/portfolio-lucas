import Image from 'next/image';
import Link from 'next/link';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectVisual } from '@/components/ProjectVisual';
import { Reveal } from '@/components/Reveal';
import { SplitText } from '@/components/SplitText';
import { projects } from '@/lib/projects';
import { site } from '@/lib/site';

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="shell hero__grid">
          <div className="hero__copy">
            <h1><SplitText text={site.tagline} /></h1>
            <p className="hero__lead">
              Sou Lucas Cristofer, desenvolvedor full stack em Curitiba. Construo painéis, sistemas de gestão e sites com Next.js, TypeScript, Node.js e PostgreSQL.
            </p>
            <div className="hero__actions">
              <Link className="button button--primary" href="/projetos">Ver projetos</Link>
              <a className="text-link" href={site.whatsapp} target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a>
            </div>
          </div>
          <Reveal variant="window" delay={500} className="hero__visual">
            <ProjectVisual project={projects[0]} />
          </Reveal>
        </div>
      </section>

      <section className="section home-projects">
        <div className="shell">
          <Reveal className="section-head">
            <h2>Projetos</h2>
            <p>Dois produtos completos, do banco de dados à interface. Cada um tem um estudo de caso com as decisões técnicas.</p>
          </Reveal>
          <div className="project-list">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} reverse={index % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="section about-home">
        <div className="shell about-home__grid">
          <Reveal variant="wipe" className="about-home__photo">
            <Image src="/images/lucas-about.webp" alt="Retrato de Lucas Cristofer" width={1000} height={1250} sizes="(max-width: 900px) 70vw, 360px" />
          </Reveal>
          <Reveal delay={100} className="about-home__text">
            <h2>Código com olhar de comunicação.</h2>
            <p>
              Minha experiência em marketing me ensinou a pensar em público, mensagem e clareza. No desenvolvimento, isso vira interfaces que explicam o que fazer e sistemas que a equipe consegue usar.
            </p>
            <Link className="text-link" href="/sobre">Conhecer minha trajetória</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
