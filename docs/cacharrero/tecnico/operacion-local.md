---
title: Operación local
sidebar_position: 4
---

# Operación local

## Enfoque oficial

Usar Node.js y npm en entorno local.

## Requisitos

- Node.js 20+
- npm 10+

## Arranque

```bash
npm ci
npm run start
```

Para build de validación:

```bash
npm run build
```

## Troubleshooting básico

- Puerto ocupado: cambiar puerto local del server.
- Fallo de dependencias: borrar `node_modules` e instalar de nuevo.
- Problemas de permisos: revisar usuario local y permisos del repositorio.
