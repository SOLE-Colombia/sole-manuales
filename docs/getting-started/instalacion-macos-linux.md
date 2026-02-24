---
title: Instalación macOS y Linux
sidebar_position: 3
---

# Instalación en macOS y Linux

:::warning Ruta movida
Esta guía quedó en legacy. Usa la versión vigente en [Subir información a Voltaje > Instalación en macOS y Linux](/docs/subir-informacion/instalacion-macos-linux).
:::

Esta guía está pensada para personas que se integran al proyecto de SOLE Colombia. El objetivo es dejar tu entorno listo con pasos claros, incluso si no vienes de un perfil técnico.

## Antes de iniciar (5 minutos)

- Confirma con tu equipo de cacharreo cuál repositorio debes clonar.
- Verifica que tengas acceso a tu cuenta de GitHub.
- Asegúrate de tener conexión estable a internet.

## Actividad 1: instalar herramientas base (20-30 minutos)

**Objetivo:** dejar listas las aplicaciones que usarás durante la inducción.

- Docker Desktop (macOS) o Docker Engine (Linux): [docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop/) esta es la herramienta más importante, ya que el proyecto se ejecuta dentro de un contenedor Docker, y no afectas los proyectos o configuraciones de tu computador.
- Visual Studio Code: [code.visualstudio.com](https://code.visualstudio.com/) esencial para trabajar con el proyecto, ya que el entorno de desarrollo está configurado para usarse dentro de un contenedor Docker.
- Extensión Dev Containers: [marketplace.visualstudio.com](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) necesaria para abrir el proyecto dentro del contenedor Docker.
- Obsidian: [obsidian.md/download](https://obsidian.md/download) esta es opcional, pero es la forma más amigable de editar los manuales sin depender del terminal o de VS Code.
- GitHub Desktop: [desktop.github.com](https://desktop.github.com/)
- GitKraken: [gitkraken.com/download](https://www.gitkraken.com/download) esta es opcional, ya que github desktop también funciona, pero es buena tener opciones.

**Cierre de actividad:** todas las aplicaciones están instaladas y abren sin error.

## Actividad 2: dejar Docker funcionando (10 minutos)

**Objetivo:** confirmar que tu equipo puede ejecutar el entorno del proyecto.

### macOS

1. Abre Docker Desktop.
2. Espera a que aparezca en estado `running`.

### Linux

> Actualiza tus repositorios e instala dependencias:

```bash
sudo apt update
sudo apt install apt-transport-https ca-certificates curl software-properties-common
```
1. Instala Docker Engine según tu distribución con los comandos oficiales: [docs.docker.com/engine/install](https://docs.docker.com/engine/install/)

2. Agrega tu usuario al grupo `docker` si aplica. Esto permite ejecutar Docker sin `sudo`:

```bash
sudo usermod -aG docker $USER
```
3. Cierra y vuelve a abrir sesión.
4. Verifica en terminal:

```bash
docker --version
```
Si te aparece la versión de Docker, está funcionando correctamente.

**Cierre de actividad:** Docker aparece activo o el comando devuelve una versión.

## Actividad 3: abrir el proyecto en VS Code (10 minutos)

**Objetivo:** trabajar dentro del contenedor para mantener un entorno consistente con el equipo.

1. Clona el repositorio con GitHub Desktop o GitKraken.
2. Abre la carpeta del repositorio en VS Code.
3. Ejecuta `Dev Containers: Reopen in Container`.
4. Espera a que finalice la creación del contenedor.

**Cierre de actividad:** VS Code abre el proyecto dentro del contenedor y puedes navegar los archivos.

## Actividad 4: conectar Obsidian para edición de contenidos (5 minutos)

**Objetivo:** editar manuales de forma amigable sin depender del terminal.

1. Abre Obsidian.
2. Selecciona `Open folder as vault`.
3. Elige la misma carpeta del repositorio.

**Cierre de actividad:** puedes abrir y editar archivos del manual en Obsidian.

## Actividad 5: verificación final de inducción (5 minutos)

- Docker está activo.
- VS Code abrió el contenedor sin errores.
- Obsidian abre el mismo repositorio.
- Tu cliente Git (GitHub Desktop o GitKraken) apunta al mismo repositorio.
- Hiciste una prueba simple: editaste un archivo y viste el cambio en Git.

## Si algo falla

- No fuerces `push` con errores.
- Pide acompañamiento a la persona que lidera tu inducción.
- Si falla Docker, reinícialo y vuelve a abrir el contenedor en VS Code.

## Siguiente paso recomendado

Continúa con [Inicio rápido en 5 minutos](/docs/getting-started/quick-start).
