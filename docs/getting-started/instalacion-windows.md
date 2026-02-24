---
title: Instalación Windows y WSL
sidebar_position: 2
---

# Instalación en Windows (WSL2)

:::warning Ruta movida
Esta guía quedó en legacy. Usa la versión vigente en [Subir información a Voltaje > Instalación en Windows (WSL2)](/docs/subir-informacion/instalacion-windows-wsl).
:::

Guía para dejar un entorno estable para edición y publicación de manuales.

## Software necesario

- WSL: [learn.microsoft.com/windows/wsl/install](https://learn.microsoft.com/windows/wsl/install)
- Docker Desktop: [docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop/)
- Visual Studio Code: [code.visualstudio.com](https://code.visualstudio.com/)
- Extensión Dev Containers: [marketplace.visualstudio.com](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
- Obsidian: [obsidian.md/download](https://obsidian.md/download)
- GitHub Desktop: [desktop.github.com](https://desktop.github.com/)
- GitKraken: [gitkraken.com/download](https://www.gitkraken.com/download)

## Paso 1: instalar WSL2

En PowerShell (Administrador):

```powershell
wsl --install
wsl --status
```

## Paso 2: instalar Docker Desktop

1. Instala Docker Desktop.
2. En `Settings > Resources > WSL Integration`, activa tu distro.
3. Verifica en terminal:

```bash
docker --version
```

## Paso 3: abrir repositorio

1. Clona el repo de manuales con GitHub Desktop o GitKraken.
2. Abre la carpeta en VS Code.
3. Usa `Dev Containers: Reopen in Container`.

## Paso 4: usar Obsidian

1. Abre Obsidian.
2. Selecciona `Open folder as vault`.
3. Abre la carpeta de contenido del manual.

## Verificación final

- Docker está activo.
- VS Code abrió el contenedor.
- Obsidian y cliente Git apuntan al mismo repositorio.
