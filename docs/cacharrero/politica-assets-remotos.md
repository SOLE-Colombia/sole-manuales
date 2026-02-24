---
title: Politica de assets remotos
sidebar_position: 6
owner_role: Cacharrero
last_reviewed: 2026-02-24
status: published
---

# Politica de assets remotos

## Objetivo

Reducir peso del repositorio y evitar duplicacion de imagenes de marca que ya existen en canales oficiales de SOLE.

## Regla general

- Para branding del home y portada, usar URLs oficiales de `solecolombia.org`.
- No subir copias locales de logos o banners que ya viven en CDN oficial.
- Mantener local solo:
  - `favicon.ico`
  - un logo fallback en `static/img/logo.svg`

## Fuentes permitidas

- `https://solecolombia.org`
- `https://cdn.prod.website-files.com/...` (assets publicados por el sitio oficial)

Ejemplos activos en el home:

- Logo: `https://cdn.prod.website-files.com/63be04f0fe7d2f045f57f2d2/66a14fd7f98e3740f1a43ab3_Recurso%20220.svg`
- Fondo hero: `https://cdn.prod.website-files.com/63be04f0fe7d2f045f57f2d2/67619dc00a48333410dd56e0_IMG_7056-p-500.jpg`

## Implementacion en este proyecto

- Config editable del home: `static/data/homepage.json`.
- Edicion no tecnica via CMS: `Admin -> Configuracion del sitio -> Home principal`.
- Campos visuales (logo e imagen de fondo) deben ser URLs remotas.

## Checklist antes de publicar

- [ ] Ningun logo grande fue agregado a `static/img/` sin justificacion.
- [ ] El home usa URLs oficiales en `logo_url` y `background_image`.
- [ ] Las imagenes cargan en desktop y mobile.
- [ ] No hay links de imagen rotos (HTTP 404/403).

## Validacion semanal recomendada

1. Abrir `https://manual.solecolombia.org`.
2. Revisar logo del hero y fondo.
3. Abrir DevTools -> Network -> filtrar por `img`.
4. Confirmar que las URLs de marca responden `200`.

Si una URL oficial deja de funcionar, reemplazarla desde el CMS en la configuracion de home.
