---
title: CMS con usuario y clave
sidebar_position: 7
owner_role: Cacharrero
last_reviewed: 2026-02-25
status: published
---

# CMS con usuario y clave

Esta guia activa el ingreso simple por `usuario + clave` para el CMS sin depender del OAuth de GitHub.

## Estado implementado

- Worker de auth en `workers/cms-auth/`.
- Dominio de auth: `https://auth.manual.solecolombia.org/auth/v2`.
- Backend Decap en `static/admin/config.yml`:

```yml
backend:
  name: github
  repo: SOLE-Colombia/sole-manuales
  branch: main
  base_url: https://auth.manual.solecolombia.org
  auth_endpoint: /auth/v2
publish_mode: editorial_workflow
```

## Como funciona

1. Usuario abre `https://manual.solecolombia.org/admin/`.
2. Decap abre popup a `/auth/v2`.
3. Worker valida `usuario + clave`.
4. Worker responde a Decap con token GitHub de servicio.
5. Decap crea ramas, commits y PR en `SOLE-Colombia/sole-manuales`.

## Variables y secretos del Worker

Archivo: `workers/cms-auth/wrangler.toml`

- `ALLOWED_ORIGINS`: orígenes permitidos (`manual.solecolombia.org`, `localhost`).
- `CMS_LOGIN_USER`: usuario permitido.

Secretos obligatorios (no versionados):

```bash
cd workers/cms-auth
npx wrangler secret put CMS_LOGIN_PASSWORD
npx wrangler secret put CMS_GITHUB_TOKEN
```

## Deploy del Worker

```bash
cd workers/cms-auth
npx wrangler deploy
```

Configurar custom domain del Worker en Cloudflare:

- `auth.manual.solecolombia.org`

## Checklist de validacion

- [ ] `https://auth.manual.solecolombia.org/healthz` responde `{ \"ok\": true }`.
- [ ] `/admin` muestra popup de usuario/clave.
- [ ] Login correcto abre CMS sin redirigir a GitHub.
- [ ] Crear draft abre PR en GitHub.
- [ ] PR requiere aprobacion antes de merge.

## Seguridad minima recomendada

- Usar cuenta bot para `CMS_GITHUB_TOKEN` con permisos mínimos.
- Rotar `CMS_LOGIN_PASSWORD` y `CMS_GITHUB_TOKEN` cada trimestre.
- Restringir `ALLOWED_ORIGINS` a dominios oficiales.
