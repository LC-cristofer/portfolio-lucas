import features from './features.json';

/** Chaves liga/desliga do site. Para reativar Marketing, troque "marketing" para true em features.json. */
export { features };

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio-lucas-liart.vercel.app';

export const site = {
  name: 'Lucas Cristofer',
  role: features.marketing ? 'Marketing & Tecnologia' : 'Desenvolvedor Full Stack',
  tagline: features.marketing
    ? 'Sites, sistemas e comunicação que ajudam negócios a operar e vender melhor.'
    : 'Sistemas e sites, do banco de dados à tela.',
  email: 'Lucas.cristofer@gmail.com',
  github: 'https://github.com/LC-cristofer',
  instagram: 'https://www.instagram.com/lucas.cristofer/',
  linkedin: 'https://www.linkedin.com/in/lucas-cristofer-13231a3b9/',
  whatsapp: 'https://wa.me/5541988223578',
  whatsappNumber: '+55 41 98822-3578',
  city: 'Curitiba',
  description: features.marketing
    ? 'Estratégia, design e tecnologia para criar presença digital, produtos e campanhas que ajudam negócios a vender melhor e operar melhor.'
    : 'Desenvolvedor full stack em Curitiba. Sistemas de gestão, painéis e sites com Next.js, TypeScript, Node.js e PostgreSQL.',
};
