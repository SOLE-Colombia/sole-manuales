---
title: Deploy y entornos
sidebar_position: 3
---

# Deploy y entornos

## Mapa de entornos recomendado

- `main`: producción.
- `desarrollo` o rama de validación: staging.

## Flujo de deploy

1. Build en GitHub Actions.
2. Validación de salida (`build/` o `public/`).
3. Publicación en GitHub Pages.
4. Verificación de dominio.

## Requisitos mínimos

- Workflow activo en `.github/workflows/`.
- Permisos de Actions habilitados para Pages.
- Dominio configurado por DNS (`manual.solecolombia.org`).
- Archivo `CNAME` en artefacto final.

## Configuración de dominio

1. En DNS, crear registro:
   - Tipo: `CNAME`
   - Host: `manual`
   - Valor: `SOLE-Colombia.github.io`
2. En GitHub Pages del repo, definir dominio personalizado `manual.solecolombia.org`.
3. Verificar que `static/CNAME` exista con el mismo valor.

## Diagnóstico rápido

- Build falla: revisar dependencias y links.
- Sitio no actualiza: revisar workflow y settings de Pages.
- Dominio no responde: revisar CNAME DNS y propagación.

## Guía recomendada

Para implementación completa de publicación y dominio:

- [Paso a paso GitHub Pages y DNS](./github-pages-dns.md)
