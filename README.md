# Lucas Cristofer — Marketing & Tecnologia

Portfólio comercial e técnico em Next.js + React + TypeScript.

## Estrutura atual

- Home com hero, retrato real, CTA para Portfólio e WhatsApp.
- Seção **Quem sou eu** sem vídeo no primeiro deploy.
- Portfólio com EVO Gestão e POUPEME como projetos reais.
- Case público do EVO exibe apenas dados demonstrativos fictícios; dados pessoais reais não são publicados.
- Página individual para cada case com duas camadas de leitura:
  - visão de produto: problema, direção, escopo e stack;
  - visão técnica: arquitetura, decisões, trade-offs, segurança, manutenção, deploy e próximos passos.
- Marketing e Tecnologia com páginas próprias.
- Projeto conceitual de Marketing apresentado com contexto, sem cliente ou resultado inventado.
- Cards de Marketing empilhados no mobile para evitar cortes e falso overflow.
- Navegação com Home, Portfólio, Tecnologia, Marketing, Sobre e Contato.
- Hover preto com texto branco nos links da navegação desktop.
- Instagram, LinkedIn e GitHub integrados.
- Botão flutuante de WhatsApp para `+55 41 98822-3578`.
- Contato com formulário via `mailto:` e canais diretos.
- SEO com metadata por página, Open Graph, Twitter card, JSON-LD, sitemap e robots.
- Acessibilidade com skip link, foco visível, alt text, landmarks e suporte a `prefers-reduced-motion`.

## Imagens

O projeto usa somente fotos fornecidas pelo próprio Lucas:

- `public/images/lucas-hero.webp`
- `public/images/lucas-about.webp`

Nenhuma imagem de pessoa foi gerada por IA.

## Rodar no Windows

No PowerShell, dentro da pasta:

```powershell
npm.cmd install
npm.cmd run dev
```

Abra `http://localhost:3000`.

Para validar produção:

```powershell
npm.cmd run security:audit
npm.cmd run build
npm.cmd run start
```

Também existem `install.cmd`, `dev.cmd` e `build.cmd` na raiz.

## Vídeo de apresentação

O componente foi preservado, mas a seção não é renderizada no primeiro deploy.

Quando o vídeo estiver pronto, veja os comentários em:

- `src/app/page.tsx`
- `src/app/sobre/page.tsx`
- `src/components/VideoShowcase.tsx`

A variável preparada é:

```env
NEXT_PUBLIC_INTRO_VIDEO_URL=/media/apresentacao.mp4
```

## URL de produção / SEO

Quando o domínio estiver definido:

```env
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com.br
```

## QA

Veja `QA.md` para a validação executada e as limitações do ambiente.
