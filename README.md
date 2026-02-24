# Manuales SOLE (Docusaurus)

Portal de manuales independiente para SOLE Colombia, pensado para publicarse en `manual.solecolombia.org`.

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

- URL: `/admin`
- Configuracion: `static/admin/config.yml`
- Modo de publicacion: `editorial_workflow`

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

## Publicar como repo independiente

Ver `TRANSFER_TO_NEW_REPO.md`.

Tambien puedes automatizar el bootstrap local con:

```bash
./scripts/bootstrap-new-repo.sh /ruta/sole-manuales git@github.com:SOLE-Colombia/sole-manuales.git
```
