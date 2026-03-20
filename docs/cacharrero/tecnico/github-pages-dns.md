---
title: Paso a paso GitHub Pages y DNS
sidebar_position: 4
---

# Paso a paso para publicar en manual.solecolombia.org

Esta guía te deja el manual en línea con dominio propio.

## 1) Crear el repositorio final

1. Crea el repositorio `SOLE-Colombia/sole-manuales`.
2. Sube el contenido de la carpeta `manuales/` como raíz del repo.
3. Verifica que exista el workflow:
   - `.github/workflows/deploy-pages.yml`

## 2) Activar GitHub Pages

1. Entra a `Settings` del repo `sole-manuales`.
2. Ve a `Pages`.
3. En `Build and deployment`, selecciona `Source: GitHub Actions`.
4. Guarda cambios.

## 3) Verificar permisos de Actions

1. En `Settings > Actions > General`.
2. En `Workflow permissions`, selecciona `Read and write permissions`.
3. Guarda cambios.

## 4) Configurar dominio en el repositorio

Ya viene configurado en este proyecto:

- Archivo: `static/CNAME`
- Contenido: `manual.solecolombia.org`

No lo cambies si ese será el dominio final.

## 5) Configurar DNS en tu proveedor

Crea este registro:

- Tipo: `CNAME`
- Host/Name: `manual`
- Target/Value: `SOLE-Colombia.github.io`
- TTL: automático o `3600`

## 6) Ajustar dominio en GitHub Pages

1. Regresa a `Settings > Pages`.
2. En `Custom domain`, escribe:
   - `manual.solecolombia.org`
3. Guarda.
4. Activa `Enforce HTTPS` cuando aparezca disponible.

## 7) Ejecutar primer despliegue

1. Haz push a `main`.
2. Ve a `Actions`.
3. Espera que termine `Deploy Manuales SOLE` en verde.

## 8) Validar salida

- Abre `https://manual.solecolombia.org`.
- Navega secciones: Inicio, No técnico, Usabilidad, Técnico, Gobernanza.
- Si no abre de inmediato, espera propagación DNS (normalmente minutos, hasta 24h).

## Problemas comunes

### El dominio no responde

- Revisa que el CNAME DNS apunte exactamente a `SOLE-Colombia.github.io`.
- Verifica que `static/CNAME` tenga `manual.solecolombia.org`.

### GitHub Pages no publica

- Revisa permisos de Actions.
- Revisa logs del workflow en `Actions`.
