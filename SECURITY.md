# Segurança

## Dependências fixadas
- Next.js: 15.5.21
- React / React DOM: 19.0.8

Essas versões foram escolhidas para sair das faixas vulneráveis conhecidas consultadas em 16/08/2026.

## Hardening aplicado
- Content-Security-Policy
- HSTS em produção
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy
- Permissions-Policy
- Cross-Origin-Opener-Policy
- JSON-LD com escape de `<`
- Links externos com `noopener noreferrer`
- URL de vídeo limitada a HTTPS ou caminho local
- Limites e validação adicional no formulário
- Nenhum Server Action, endpoint de API, cookie ou segredo de servidor no projeto

## Antes de publicar
Depois de `npm install`, rode:

```powershell
npm.cmd run security:audit
npm.cmd run build
```

Se `npm audit` retornar HIGH ou CRITICAL, não publique antes de revisar.
