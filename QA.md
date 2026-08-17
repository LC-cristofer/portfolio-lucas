# QA — Portfólio comercial + leitura técnica

## Alterações desta revisão

- Mantida a versão visual aprovada: responsividade, vídeo oculto e hover da navegação preservados.
- Página Portfólio agora deixa explícito que os cases possuem leitura técnica.
- EVO Gestão recebeu seção técnica com:
  - arquitetura;
  - motivos das escolhas;
  - trade-offs;
  - RBAC e segurança;
  - manutenção/observabilidade;
  - deploy/escala;
  - pontos de evolução.
- POUPEME recebeu seção técnica com:
  - separação frontend/API;
  - PostgreSQL e Prisma;
  - Redis como cache opcional;
  - JWT e ciclo de sessão;
  - qualidade de dados financeiros;
  - infraestrutura;
  - pontos de evolução.
- O texto foi escrito para permitir duas leituras: rápida para recrutamento/comercial e aprofundada para dev sênior/tech lead.

## Validação executada

### Sintaxe TS/TSX

- 26 arquivos TypeScript/TSX analisados com TypeScript 5.8.3 (`transpileModule`).
- 0 erros de sintaxe.
- Imports internos e regras do `qa/source-check.mjs` validados: PASS.

### Viewports

Foram revisadas 9 páginas em 6 tamanhos:

- 1440 × 900
- 1366 × 768
- 1024 × 768
- 768 × 1024
- 430 × 932
- 390 × 844

Total: **54 combinações**.

Resultado do QA automatizado do espelho visual: **54/54 PASS**.

Checks incluídos:

- overflow horizontal;
- elementos fora da viewport;
- exatamente um H1 por página;
- tamanho máximo de H1;
- imagens carregadas e texto alternativo;
- nomes acessíveis em links e botões;
- labels nos campos do formulário;
- um único `<main>`;
- erros de console;
- abertura e fechamento do menu mobile;
- validação do formulário;
- ausência de carousel horizontal cortado em mobile.

### Revisão visual

As novas seções técnicas dos cases foram revisadas em desktop e mobile. Os grids de fatos, arquitetura, decisões, revisão e próximos passos colapsam para uma coluna sem largura fixa ou cards cortados.

## Limitação

O QA visual usa um espelho estático com a mesma folha de estilos e a mesma estrutura principal das novas seções. Ele valida composição e responsividade, mas não substitui a renderização real do Next.

O `next build` não foi executado neste ambiente porque a instalação do npm não está disponível aqui de forma confiável. Antes do deploy, rode localmente:

```powershell
npm.cmd install
npm.cmd run security:audit
npm.cmd run build
```

## Privacidade do EVO
- Prévia visual usa números demonstrativos fictícios.
- Case informa que o repositório público foi sanitizado e não publica dados pessoais reais.
