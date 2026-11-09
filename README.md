# Lucas Cristofer — Desenvolvedor Full Stack

Portfólio técnico em Next.js (App Router) + React + TypeScript.

## Páginas

- **Home** — apresentação, os dois projetos e quem sou eu.
- **Projetos** — EVO Gestão e POUPEME, cada um com estudo de caso em duas camadas: visão de produto (problema, direção, escopo, tecnologias) e visão técnica (arquitetura, decisões, trade-offs, segurança, manutenção, deploy e próximos passos).
- **Serviços** (`/tecnologia`) — o que faço e como construo. `/servicos` redireciona para `/tecnologia`.
- **Sobre** e **Contato** — formulário via `mailto:` e canais diretos (WhatsApp e e-mail).

O EVO Gestão exibe apenas dados fictícios; dados pessoais reais não são publicados.

## Marketing (desativado por enquanto)

A parte de Marketing continua no código, mas está desligada. Para voltar com ela, troque o valor em `src/lib/features.json`:

```json
{ "marketing": true }
```

Isso reativa a página `/marketing`, o item no menu e no rodapé, o estudo conceitual em `/projetos`, as opções do formulário, o sitemap, os textos de SEO e o cargo no cabeçalho. Com a chave desligada, `/marketing` redireciona para `/tecnologia`.
Os textos da home e da página Sobre estão escritos para o site sem Marketing e precisam de revisão quando a chave voltar.

## Visual e animação

- Um CSS principal (`src/app/styles.css`), mais `product-preview.css` (telas dos projetos) e `marketing/marketing.css` (só Marketing).
- Fonte Schibsted Grotesk, servida pelo próprio site (`next/font/local`).
- Movimento com propósito: título que sobe por palavras, telas dos projetos que se montam (gráfico se traça, números contam), linhas que se desenham ao rolar, barra de progresso de rolagem e transição entre páginas.
- `prefers-reduced-motion` desliga tudo isso, e sem JavaScript o conteúdo aparece direto.

## Recursos

- SEO: metadata por página, Open Graph e Twitter card (imagem 1200×630 gerada em `opengraph-image.tsx`), JSON-LD, sitemap e robots.
- Acessibilidade: skip link, foco visível, landmarks, alt text e `prefers-reduced-motion`.
- Segurança: veja `SECURITY.md`.

## Imagens

Somente fotos fornecidas pelo próprio Lucas (`public/images/lucas-hero.webp` e `lucas-about.webp`). As telas dos projetos são desenhadas em HTML/SVG com dados de exemplo.

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

`qa:source` confere imports internos e de CSS, um `<h1>` por página, metadata, rotas internas válidas, a chave de Marketing e conteúdo obrigatório.

## URL de produção

```env
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com.br
```
