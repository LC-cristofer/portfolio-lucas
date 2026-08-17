import Link from 'next/link';
import { SocialLinks } from '@/components/SocialLinks';
import { site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-lead">
          <span className="eyebrow eyebrow--light">Lucas Cristofer</span>
          <p>Marketing, design e tecnologia para transformar presença digital em resultado.</p>
        </div>
        <nav className="footer-nav" aria-label="Navegação do rodapé">
          <Link href="/">Home</Link>
          <Link href="/projetos">Portfólio</Link>
          <Link href="/tecnologia">Tecnologia</Link>
          <Link href="/marketing">Marketing</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/contato">Contato</Link>
        </nav>
        <div className="footer-contact">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">{site.whatsappNumber} ↗</a>
          <SocialLinks compact light />
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Lucas Cristofer</span>
        <span>Curitiba · Projetos remotos e presenciais</span>
      </div>
    </footer>
  );
}
