---
title: Instalación macOS y Linux
sidebar_position: 3
---

# Instalación en macOS y Linux

## Software necesario

- Docker Desktop (macOS) o Docker Engine (Linux): [docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop/)
- Visual Studio Code: [code.visualstudio.com](https://code.visualstudio.com/)
- Extensión Dev Containers: [marketplace.visualstudio.com](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
- Obsidian: [obsidian.md/download](https://obsidian.md/download)
- GitHub Desktop: [desktop.github.com](https://desktop.github.com/)
- GitKraken: [gitkraken.com/download](https://www.gitkraken.com/download)

## Paso 1: Docker

### macOS

1. Instala Docker Desktop.
2. Verifica que esté en estado `running`.

### Linux

1. Instala Docker Engine según tu distribución.
2. Agrega tu usuario al grupo `docker` si aplica.
3. Verifica:

```bash
docker --version
```

## Paso 2: abrir el proyecto

1. Clona el repositorio.
2. Abre carpeta en VS Code.
3. Ejecuta `Dev Containers: Reopen in Container`.

## Paso 3: abrir en Obsidian

1. `Open folder as vault`.
2. Selecciona carpeta del contenido del manual.

## Verificación mínima

- Docker activo.
- Contenedor levantado en VS Code.
- Obsidian y cliente Git sincronizados con el mismo repo.
