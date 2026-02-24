---
title: Operacion local
sidebar_position: 3
owner_role: Cacharrero
last_reviewed: 2026-02-24
status: published
---

# Operacion local

## Requisitos

- Node.js 20+
- npm 10+

## Arranque local

```bash
npm ci
npm run start
```

## Build de validacion

```bash
npm run check
```

## Checklist tecnico antes de PR

- [ ] Navegacion de sidebar sin errores.
- [ ] Rutas nuevas visibles en home.
- [ ] `static/data/homepage.json` valida URLs remotas vigentes.
- [ ] Frontmatter obligatorio completo.
- [ ] Build local en verde.

## Problemas comunes

- `docusaurus: not found`: ejecutar `npm ci` en la raiz del repositorio de manuales.
- `Broken links`: corregir rutas internas antes de merge.
- `Build fails in CI`: revisar cambios en `docusaurus.config.ts` y `sidebars.ts`.
