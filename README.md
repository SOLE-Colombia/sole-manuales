# Manuales SOLE (Docusaurus)

Monorepo de manuales interactivos por pasos para SOLE Colombia.

## Objetivo

- Publicar manuales en `manual.solecolombia.org`.
- Soportar contenido no técnico, técnico, usabilidad y gobernanza en un mismo portal.
- Facilitar que equipos no técnicos puedan avanzar con rutas guiadas.

## Requisitos

- Node.js 20+
- npm 10+

## Desarrollo local

```bash
npm install
npm run start
```

## Build de validación

```bash
npm run build
```

Salida estática en `build/`.

## Estructura principal

- `docs/getting-started/`
- `docs/no-tecnico/`
- `docs/usabilidad/`
- `docs/tecnico/`
- `docs/governance/`

## Deploy

El deploy se gestiona con GitHub Pages y GitHub Actions (`.github/workflows/deploy-pages.yml`).

## Publicar como repo independiente

Ver `TRANSFER_TO_NEW_REPO.md`.
