import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './styles.css';
import './product-preview.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { features, site, siteUrl } from '@/lib/site';

const sans = localFont({
  src: './fonts/SchibstedGrotesk-latin-variable.woff2',
  variable: '--font-sans',
  weight: '400 900',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name}, ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  // A imagem de compartilhamento (1200×630) vem de opengraph-image.tsx e twitter-image.tsx.
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: `${site.name}, ${site.role}`,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name}, ${site.role}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  jobTitle: site.role,
  email: site.email,
  url: siteUrl,
  sameAs: [site.github, site.instagram, site.linkedin],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'business inquiries',
    telephone: site.whatsappNumber,
  },
  knowsAbout: [
    'Desenvolvimento web',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
    'Produtos digitais',
    ...(features.marketing ? ['Marketing digital', 'Design'] : []),
  ],
};

// Sem JavaScript, as animações de entrada não rodam: mostra tudo já no estado final.
const noScriptCss =
  '.reveal{opacity:1!important;transform:none!important}' +
  '.reveal--wipe>*{clip-path:none!important;transform:none!important}' +
  '.reveal--rule::before{transform:none!important}' +
  '.reveal--rule>*{opacity:1!important;transform:none!important}' +
  '.product-preview .draw{stroke-dashoffset:0!important}.product-preview .area{opacity:1!important}' +
  '.product-preview .preview-heading-row,.product-preview .preview-kpis>div,.product-preview .task-row,.product-preview .donut-ring{opacity:1!important;transform:none!important}';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={sans.variable}>
      <head>
        <noscript><style>{noScriptCss}</style></noscript>
      </head>
      <body>
        <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
        <ScrollProgress />
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <WhatsAppButton />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      </body>
    </html>
  );
}
