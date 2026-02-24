# Manuales SOLE (Docusaurus)

Portal de manuales independiente para SOLE Colombia, pensado para publicarse en `manual.solecolombia.org`.

- Portal publico: `https://manual.solecolombia.org`
- Repositorio fuente: `https://github.com/SOLE-Colombia/sole-manuales`
- Editor CMS: `https://manual.solecolombia.org/admin/`

## Alcance v1

Dos rutas operativas:

- `docs/cacharrero/`: informacion tecnica de plataforma y operacion online.
- `docs/subir-informacion/`: ruta no tecnica para crear y publicar contenido.

Se incluye `docs/legacy/` como historico no operativo.

## Requisitos

- Node.js 20+
- npm 10+

## Desarrollo local

```bash
npm ci
npm run start
```

## Build y validacion

```bash
npm run check
```

Salida estática en `build/`.

## Edicion online (Decap CMS)

- URL: `https://manual.solecolombia.org/admin/`
- Configuracion: `static/admin/config.yml`
- Modo de publicacion: `editorial_workflow`
- OAuth proxy: `https://auth.manual.solecolombia.org` (Cloudflare Worker)
- Callback OAuth esperado: `https://auth.manual.solecolombia.org/callback`

Usa CMS cuando el cambio sea solo contenido (`docs/`, `static/uploads/` y `static/data/homepage.json`).

## Politica de imagenes

- Para branding del home usar URLs oficiales de `solecolombia.org` (CDN oficial).
- Mantener local solo favicon y logo fallback.
- Configuracion editable de home: `static/data/homepage.json`.

## Cuando usar git clone

Usa clon local del repo `sole-manuales` cuando necesites:

- Cambiar configuracion (`docusaurus.config.*`, `sidebars.*`)
- Ajustar componentes/UI (`src/`)
- Cambiar workflows, CODEOWNERS o reglas de CI
- Resolver errores de build o enlaces

Comandos base:

```bash
git clone git@github.com:SOLE-Colombia/sole-manuales.git
cd sole-manuales
npm ci
npm run start
```

## Separacion de repos (obligatoria)

- `voltaje-dev` y `sole-manuales` son repos distintos.
- Un commit en `voltaje-dev` no publica ni modifica `manual.solecolombia.org`.
- Un commit en `sole-manuales` no modifica `voltaje-dev`.
- El contenido oficial de manuales se edita y publica solo desde `SOLE-Colombia/sole-manuales`.

## Aprobacion obligatoria

- `CODEOWNERS` en `.github/CODEOWNERS`
- Workflow de validacion en `.github/workflows/ci-docs.yml`
- Branch protection recomendado en `main`:
  - Require PR
  - Require approvals
  - Dismiss stale approvals
  - Require status checks

## Deploy

- Workflow: `.github/workflows/deploy-pages.yml`
- Dominio: `manual.solecolombia.org`
- CNAME esperado: `manual -> SOLE-Colombia.github.io`
- Dominio de auth CMS: `auth.manual.solecolombia.org` (Cloudflare Worker)

## Publicar como repo independiente

Ver `TRANSFER_TO_NEW_REPO.md`.

Tambien puedes automatizar el bootstrap local con:

```bash
./scripts/bootstrap-new-repo.sh /ruta/sole-manuales git@github.com:SOLE-Colombia/sole-manuales.git
```
