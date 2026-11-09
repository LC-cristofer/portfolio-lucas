import Link from 'next/link';
import { FooterCta } from '@/components/FooterCta';
import { SocialLinks } from '@/components/SocialLinks';
import { features, site } from '@/lib/site';

const links = [
  { href: '/projetos', label: 'Projetos' },
  { href: '/tecnologia', label: 'Serviços' },
  ...(features.marketing ? [{ href: '/marketing', label: 'Marketing' }] : []),
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <FooterCta />
      <div className="shell footer-grid">
        <div className="footer-brand">
          <strong>{site.name}</strong>
          <span>{site.city}, projetos remotos e presenciais</span>
        </div>
        <nav className="footer-nav" aria-label="Rodapé">
          {links.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <SocialLinks light />
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} {site.name}</span>
      </div>
    </footer>
  );
}
