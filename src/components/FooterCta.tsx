'use client';

import { usePathname } from 'next/navigation';
import { site } from '@/lib/site';
import { Reveal } from './Reveal';

/** Convite final no topo do rodapé. Na página de contato ele some, porque o formulário já é o convite. */
export function FooterCta() {
  const pathname = usePathname();
  if (pathname === '/contato') return null;

  return (
    <div className="shell footer-cta">
      <Reveal as="h2" className="footer-cta__title">Tem um sistema ou site para tirar do papel?</Reveal>
      <Reveal delay={120} className="footer-cta__channels">
        <a className="footer-cta__mail" href={`mailto:${site.email}`}>{site.email}</a>
        <a className="text-link text-link--light" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
          WhatsApp {site.whatsappNumber}
        </a>
      </Reveal>
    </div>
  );
}
