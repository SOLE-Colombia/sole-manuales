---
title: Instalacion en Windows (WSL2)
sidebar_position: 2
owner_role: Editor
last_reviewed: 2026-02-24
status: published
---

# Instalacion en Windows (WSL2)

## Software necesario

- WSL: [learn.microsoft.com/windows/wsl/install](https://learn.microsoft.com/windows/wsl/install)
- Docker Desktop: [docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop/)
- VS Code: [code.visualstudio.com](https://code.visualstudio.com/)
- Dev Containers extension
- Obsidian: [obsidian.md/download](https://obsidian.md/download)
- GitHub Desktop o GitKraken

## Pasos

1. Instalar WSL2 (`wsl --install`).
2. Activar integracion WSL en Docker Desktop.
3. Clonar repositorio.
4. Abrir en VS Code y usar `Reopen in Container`.
5. Abrir carpeta del repo en Obsidian.

## Verificacion final

- Docker responde `docker --version`.
- VS Code abre contenedor.
- Obsidian y cliente Git apuntan al mismo repo.
