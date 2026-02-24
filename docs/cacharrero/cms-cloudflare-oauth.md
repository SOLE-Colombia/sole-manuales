---
title: CMS con Cloudflare OAuth
sidebar_position: 7
owner_role: Cacharrero
last_reviewed: 2026-02-24
status: published
---

# CMS con Cloudflare OAuth

Esta guia activa el login de Decap CMS en GitHub Pages usando un OAuth proxy en Cloudflare Worker.

## Supuestos

- Sitio publicado en `https://manual.solecolombia.org`.
- Repo fuente: `SOLE-Colombia/sole-manuales`.
- Subdominio de auth: `auth.manual.solecolombia.org`.

## 1) Crear OAuth App en GitHub

URL: `https://github.com/settings/developers`

Configurar:

- Homepage URL: `https://auth.manual.solecolombia.org`
- Authorization callback URL: `https://auth.manual.solecolombia.org/callback`

Guardar:

- Client ID
- Client Secret

## 2) Desplegar proxy en Cloudflare Worker

```bash
git clone https://github.com/sterlingwes/decap-proxy
cd decap-proxy
cp wrangler.toml.sample wrangler.toml
```

Editar `wrangler.toml`:

```toml
name = "sole-manuales-auth"
route = { pattern = "auth.manual.solecolombia.org", zone_name = "solecolombia.org", custom_domain = true }
workers_dev = false

[vars]
GITHUB_REPO_PRIVATE = "0"
```

Si el repo de manuales es privado, usar `GITHUB_REPO_PRIVATE = "1"`.

## 3) Cargar secretos y desplegar

```bash
npx wrangler login
npx wrangler secret put GITHUB_OAUTH_ID
npx wrangler secret put GITHUB_OAUTH_SECRET
npx wrangler deploy
```

## 4) Configurar Decap CMS en manuales

Archivo: `static/admin/config.yml`

```yml
backend:
  name: github
  repo: SOLE-Colombia/sole-manuales
  branch: main
  base_url: https://auth.manual.solecolombia.org
  auth_endpoint: /auth
publish_mode: editorial_workflow
```

## 5) Validaciones obligatorias

1. `https://auth.manual.solecolombia.org` responde.
2. `https://manual.solecolombia.org/admin/` abre CMS.
3. Login con GitHub vuelve al CMS sin error.
4. Crear draft abre PR (no commit directo a `main`).
5. PR sin aprobacion requerida no se puede mergear.
6. PR aprobado publica cambios en Pages.

## Control de acceso recomendado

- Solo miembros del equipo SOLE con permisos sobre `SOLE-Colombia/sole-manuales`.
- Mantener branch protection en `main` con aprobaciones obligatorias.
- No habilitar acceso abierto del CMS a usuarios sin rol editorial.

## Troubleshooting rapido

### `redirect_uri_mismatch`

Verificar callback exacto en GitHub OAuth App:
`https://auth.manual.solecolombia.org/callback`

### `404 /admin`

Confirmar existencia de:

- `static/admin/index.html`
- `static/admin/config.yml`

### Login exitoso, pero sin permisos en repo

Revisar:

- `repo: SOLE-Colombia/sole-manuales` en `config.yml`
- permisos del usuario en la organizacion/repo

### Cloudflare no permite custom domain

- eliminar CNAME previo para `auth.manual.solecolombia.org`
- volver a crear la ruta custom domain desde Worker
