# Lucas Cristofer — Marketing & Tecnologia

Portfólio comercial e técnico em Next.js (App Router) + React + TypeScript.

## Páginas

- **Home** — hero em carrossel, projetos em destaque, quem sou eu e contato.
- **Portfólio** — EVO Gestão e POUPEME, cada um com estudo de caso em duas camadas: visão de produto (problema, direção, escopo, stack) e visão técnica (arquitetura, decisões, trade-offs, segurança, manutenção, deploy e próximos passos).
- **Tecnologia** e **Marketing** — o que faço em cada frente, com os serviços de cada uma. A antiga página Serviços foi incorporada a elas e `/servicos` redireciona para `/tecnologia`.
- **Sobre** e **Contato** — formulário via `mailto:` e canais diretos (WhatsApp e e-mail).

O EVO Gestão exibe apenas dados fictícios; dados pessoais reais não são publicados. O projeto de marketing é um estudo conceitual, sem cliente ou resultado inventado.

## Recursos

- SEO: metadata por página, Open Graph e Twitter card (imagem 1200×630 gerada em `opengraph-image.tsx`), JSON-LD, sitemap e robots.
- Acessibilidade: skip link, foco visível, landmarks, alt text, `prefers-reduced-motion` e carrossel que pausa em hover/foco.
- Segurança: veja `SECURITY.md`.

## Imagens

Somente fotos fornecidas pelo próprio Lucas (`public/images/lucas-hero.webp` e `lucas-about.webp`) e imagens de capa do Unsplash no hero da home.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`. No Windows, `install.cmd`, `dev.cmd` e `build.cmd` fazem o mesmo.

## Validar antes de publicar

```bash
npm run typecheck
npm run qa:source
npm run security:audit
npm run build
```

`qa:source` confere imports internos, um `<h1>` por página, metadata, rotas internas válidas e conteúdo obrigatório.

## URL de produção

```env
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com.br
```
