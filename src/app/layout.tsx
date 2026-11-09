import type { Metadata, Viewport } from 'next';
import './globals.css';
import './mobile-home.css';
import './mobile-global.css';
import './site-evolution.css';
import './home-hero-full.css';
import './home-polish.css';
import './dark-section-polish.css';
import './typography-system.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { site, siteUrl } from '@/lib/site';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f5f5f7',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  // A imagem de compartilhamento (1200×630) vem de opengraph-image.tsx e twitter-image.tsx.
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  jobTitle: 'Marketing & Tecnologia',
  email: site.email,
  url: siteUrl,
  sameAs: [site.github, site.instagram, site.linkedin],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'business inquiries',
    telephone: site.whatsappNumber,
  },
  knowsAbout: ['Marketing digital', 'Design', 'Desenvolvimento web', 'React', 'Next.js', 'Produtos digitais'],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <WhatsAppButton />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      </body>
    </html>
  );
}
