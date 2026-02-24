---
title: Arquitectura de plataforma
sidebar_position: 2
owner_role: Cacharrero
last_reviewed: 2026-02-24
status: published
---

# Arquitectura de plataforma

## Stack oficial

- Motor: Docusaurus 3.
- Contenido: Markdown/MDX en `docs/`.
- Hosting: GitHub Pages.
- Dominio: `manual.solecolombia.org`.
- Edicion online: Decap CMS en `/admin`.

## Estructura base

```text
.
├── docs/
│   ├── cacharrero/
│   ├── subir-informacion/
│   └── legacy/
├── src/pages/index.tsx
├── sidebars.ts
├── docusaurus.config.ts
├── static/admin/
└── .github/workflows/
```

## Contratos documentales v1

Cada documento operativo debe incluir:

- `title`
- `sidebar_position`
- `owner_role`
- `last_reviewed`
- `status` (`draft|review|published`)

## Contrato de rutas publicas

- `/docs/cacharrero/...`
- `/docs/subir-informacion/...`
- `/docs/legacy/...`

## Integraciones clave

- `CODEOWNERS` para aprobacion obligatoria.
- CI de validacion (`npm run check`) como status check de PR.
- Workflow de deploy a Pages en merge a `main`.
