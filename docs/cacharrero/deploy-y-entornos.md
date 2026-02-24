---
title: Deploy y entornos
sidebar_position: 4
owner_role: Cacharrero
last_reviewed: 2026-02-24
status: published
---

# Deploy y entornos

## Entorno oficial

- `main` -> produccion en GitHub Pages.
- URL final: `https://manual.solecolombia.org`.

## Pipeline

1. Push/merge a `main`.
2. Workflow `.github/workflows/deploy-pages.yml`.
3. Build estatico en `build/`.
4. Publicacion en Pages.
5. Login CMS resuelto por proxy OAuth en Cloudflare (ver [CMS con Cloudflare OAuth](./cms-cloudflare-oauth.md)).

## Requisitos de DNS y dominio

- `static/CNAME` con `manual.solecolombia.org`.
- DNS CNAME: `manual -> SOLE-Colombia.github.io`.
- Subdominio de auth para CMS: `auth.manual.solecolombia.org` (Cloudflare Worker).

## Validacion post-deploy

- [ ] Home carga con tarjetas por rol.
- [ ] Rutas `cacharrero` y `subir-informacion` accesibles.
- [ ] `/admin` abre interfaz de edicion.
- [ ] Login de `/admin` redirige a `auth.manual.solecolombia.org` sin error.
- [ ] HTTPS activo en dominio final.
