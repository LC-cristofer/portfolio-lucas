import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/projetos', '/projetos/evo-gestao', '/projetos/poupeme', '/tecnologia', '/marketing', '/sobre', '/contato'];
  return routes.map((route) => ({ url: `${siteUrl}${route}`, lastModified: new Date(), changeFrequency: route === '' ? 'weekly' : 'monthly', priority: route === '' ? 1 : route === '/projetos' ? 0.9 : 0.8 }));
}
