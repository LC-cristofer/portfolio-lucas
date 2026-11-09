import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { Reveal } from '@/components/Reveal';
import { SocialLinks } from '@/components/SocialLinks';
import { SplitText } from '@/components/SplitText';
import { features, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contato',
  description: features.marketing
    ? 'Converse com Lucas Cristofer sobre sites, sistemas, marketing, design ou projetos integrados.'
    : 'Converse com Lucas Cristofer sobre um site, um painel ou um sistema para o seu negócio.',
};

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="shell contact-grid">
        <div className="contact-copy">
          <h1><SplitText text="Conte o que você precisa construir." /></h1>
          <p>Pode ser um site, um painel ou um sistema interno. Descreva o contexto e o que precisa funcionar, e eu respondo com os próximos passos.</p>

          <Reveal delay={150} className="contact-channels">
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer"><span>WhatsApp</span><strong>{site.whatsappNumber}</strong></a>
            <a href={`mailto:${site.email}`}><span>E-mail</span><strong>{site.email}</strong></a>
          </Reveal>

          <SocialLinks />
        </div>
        <Reveal delay={250} className="contact-form-wrap"><ContactForm /></Reveal>
      </div>
    </section>
  );
}
