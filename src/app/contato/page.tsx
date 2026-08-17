import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { SocialLinks } from '@/components/SocialLinks';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Converse com Lucas Cristofer sobre sites, sistemas, marketing, design ou projetos integrados.',
};

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="shell contact-grid">
        <div className="contact-copy">
          <span className="eyebrow">Contato</span>
          <h1>Me conte o que você precisa colocar de pé.</h1>
          <p>Uma ideia, um site novo, uma campanha, um sistema interno ou uma presença digital que precisa melhorar. O primeiro passo é entender o cenário e definir a direção certa.</p>

          <div className="contact-channels">
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer"><span>WhatsApp</span><strong>{site.whatsappNumber}</strong></a>
            <a href={`mailto:${site.email}`}><span>E-mail</span><strong>{site.email}</strong></a>
          </div>

          <SocialLinks />
        </div>
        <div className="contact-form-card"><ContactForm /></div>
      </div>
    </section>
  );
}
