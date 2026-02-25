---
title: Instalacion en macOS y Linux
sidebar_position: 3
owner_role: Editor
last_reviewed: 2026-02-25
status: published
---

# Instalacion en macOS y Linux

## Software necesario

- Node.js 20+
- npm 10+
- VS Code (opcional)
- Obsidian
- GitHub Desktop o GitKraken
- Git CLI

## Pasos

1. Instalar herramientas base.
2. Clonar repositorio:

```bash
git clone git@github.com:SOLE-Colombia/sole-manuales.git
cd sole-manuales
```

3. Instalar dependencias:

```bash
npm ci
```

4. Levantar el portal:

```bash
npm run start
```

5. Abrir el repo en Obsidian para editar contenido.

## Verificacion final

- `npm run start` responde en `http://localhost:3000`.
- `npm run check` termina sin error.
- Edicion de notas habilitada.
