---
title: Instalacion en Windows (WSL2)
sidebar_position: 2
owner_role: Editor
last_reviewed: 2026-02-25
status: published
---

# Instalacion en Windows (WSL2)

## Software necesario

- WSL: [learn.microsoft.com/windows/wsl/install](https://learn.microsoft.com/windows/wsl/install)
- Node.js 20+ (en WSL)
- npm 10+ (en WSL)
- VS Code: [code.visualstudio.com](https://code.visualstudio.com/)
- Obsidian: [obsidian.md/download](https://obsidian.md/download)
- GitHub Desktop o GitKraken
- Git CLI

## Pasos

1. Instalar WSL2 (`wsl --install`).
2. Clonar repositorio en WSL:

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

5. Abrir carpeta del repo en Obsidian.

## Verificacion final

- `npm run start` responde en `http://localhost:3000`.
- `npm run check` termina sin error.
- Obsidian y cliente Git apuntan al mismo repo.
