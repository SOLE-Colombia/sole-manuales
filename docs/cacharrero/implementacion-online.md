---
title: Implementacion online del repositorio
sidebar_position: 8
owner_role: Cacharrero
last_reviewed: 2026-02-25
status: published
---

# Implementacion online del repositorio

Guia operativa para lanzar el repositorio independiente `SOLE-Colombia/sole-manuales`.

## 1) Crear el repositorio

- Organizacion: `SOLE-Colombia`
- Nombre: `sole-manuales`
- Visibilidad: publica
- Rama por defecto: `main`

## 2) Publicar base tecnica

```bash
cp -R /workspaces/voltaje-dev/manuales ./sole-manuales
cd sole-manuales
npm ci
npm run build
git init
git add .
git commit -m "chore: bootstrap manuales v1"
git branch -M main
git remote add origin git@github.com:SOLE-Colombia/sole-manuales.git
git push -u origin main
```

## 3) Activar Pages y dominio

1. En GitHub: `Settings -> Pages -> Source: GitHub Actions`.
2. Confirmar workflow de deploy en verde.
3. Validar `static/CNAME`.
4. En DNS: CNAME `manual -> SOLE-Colombia.github.io`.

## 4) Configurar aprobacion obligatoria

- Archivo `CODEOWNERS` activo.
- Branch protection en `main` con:
  - `Require a pull request before merging`
  - `Require approvals`
  - `Dismiss stale pull request approvals`
  - `Require status checks to pass`

## 5) Activar CMS online

- Endpoint: `/admin`
- Configuracion: `static/admin/config.yml`
- Flujo: `editorial_workflow`
- Login usuario/clave via Worker: ver [CMS con usuario y clave](./cms-usuario-clave.md).

## 6) Fases de autenticacion

### Fase 1

- Login con usuario/clave para equipo editorial.

### Fase 2

- Endurecimiento de seguridad:
  - rotacion de claves,
  - auditoria de accesos,
  - rate limit y bloqueo por intentos fallidos.

## 7) Politica de imagenes de marca

- Usar URLs oficiales de `solecolombia.org` para logo y fondos del home.
- Mantener local solo favicon y logo fallback.
- Ver detalle operativo en [Politica de assets remotos](./politica-assets-remotos.md).

## 8) Cutover gradual

1. Publicar primero `cacharrero`.
2. Publicar luego `subir-informacion`.
3. Mantener `legacy` como historico.
4. Congelar edicion en rutas antiguas no vigentes.
