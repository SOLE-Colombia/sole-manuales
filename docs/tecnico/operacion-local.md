---
title: Operación local con Docker
sidebar_position: 4
---

# Operación local con Docker y DevContainer

## Enfoque oficial

Usar DevContainer para asegurar entorno homogéneo.

## Requisitos

- Docker Desktop / Docker Engine.
- VS Code + Dev Containers.

## Arranque

```bash
npm install
npm run start
```

Para build de validación:

```bash
npm run build
```

## Troubleshooting básico

- Puerto ocupado: cambiar puerto local del server.
- Fallo de dependencias: borrar `node_modules` e instalar de nuevo.
- Problemas de permisos: reconstruir contenedor.
