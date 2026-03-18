---
title: CMS con multi-usuario
sidebar_position: 7
last_reviewed: 2026-03-17
status: published
---

# CMS con multi-usuario

El CMS usa un Cloudflare Worker para autenticación con **correo + clave**. No depende de GitHub OAuth.

## Cómo funciona

1. Abre `https://intranet.solecolombia.org/admin/`.
2. Decap CMS abre popup al Worker de autenticación.
3. Ingresa tu correo y clave editorial.
4. El Worker valida las credenciales contra la lista de usuarios.
5. Si son válidas, Decap recibe un token de servicio y puede editar contenido.

## Usuarios configurados

Los usuarios se guardan como un **secreto cifrado** en Cloudflare llamado `CMS_USERS`. No están en el repositorio.

Formato del secreto (JSON array):

```json
[
  {"user": "natalia@solecolombia.org", "password": "...", "name": "Natalia Torres", "role": "Cuentera/Storyteller"},
  {"user": "julian@solecolombia.org", "password": "...", "name": "Julian Ruíz", "role": "Maestre de la construcción"}
]
```

## Agregar un usuario

1. Prepara el JSON completo con el nuevo usuario agregado.
2. Ejecuta desde la carpeta `workers/cms-auth`:

```bash
npx wrangler secret put CMS_USERS
```

3. Pega el JSON completo cuando lo solicite.
4. Re-deploya el Worker: `npx wrangler deploy`.

## Cambiar una clave

1. Modifica el campo `password` del usuario en el JSON.
2. Ejecuta `npx wrangler secret put CMS_USERS` y pega el JSON actualizado.
3. No necesitas re-deployar el Worker después de cambiar un secreto.

## Eliminar un usuario

1. Quita el objeto del usuario del array JSON.
2. Ejecuta `npx wrangler secret put CMS_USERS` y pega el JSON actualizado.

## Verificar estado del token GitHub

Visita:

```
https://auth.intranet.solecolombia.org/token-status
```

Esto muestra:
- Si el token es válido
- Los permisos (scopes) del token
- Cuántas solicitudes quedan (rate limit)
- A qué cuenta de GitHub está asociado

## Ver usuarios (sin claves)

```
https://auth.intranet.solecolombia.org/users
```

## Dónde están las claves

Las claves **no están en el repositorio** ni en `wrangler.toml`. Están guardadas como **secretos cifrados** en el panel de Cloudflare Workers.

Para configurarlos:

```bash
cd workers/cms-auth
npx wrangler secret put CMS_USERS
npx wrangler secret put CMS_GITHUB_TOKEN
```

> **Importante**: `wrangler secret put` te pedirá que pegues el valor. Estos valores nunca aparecen en archivos de texto ni en el historial de git.

## Sobre el token de GitHub

El `CMS_GITHUB_TOKEN` es un **Personal Access Token** de GitHub que permite al CMS crear ramas, commits y Pull Requests en el repositorio.

### Tipos de token

| Tipo | Duración | Recomendación |
|------|----------|---------------|
| Classic PAT | Sin expiración (o configurable) | Menos seguro, pero más simple |
| Fine-grained PAT | Máximo 1 año | Más seguro, permisos específicos por repo |

### Permisos mínimos recomendados

Para un Fine-grained PAT:
- **Repository access**: Solo `SOLE-Colombia/sole-manuales`
- **Permissions**: Contents (Read and write), Pull requests (Read and write)

Para un Classic PAT:
- **Scope**: `repo` (acceso completo a repositorios privados)

### Verificar expiración

1. Visita `https://auth.intranet.solecolombia.org/token-status`
2. Si dice `token_valid: false`, el token expiró y necesitas crear uno nuevo
3. Para crear uno nuevo:
   - Ve a [github.com/settings/tokens](https://github.com/settings/tokens)
   - Crea un nuevo token con los permisos mínimos
   - Ejecuta `npx wrangler secret put CMS_GITHUB_TOKEN` y pega el nuevo token

### Rotación recomendada

- Rotar `CMS_GITHUB_TOKEN` cada **6 meses** como mínimo
- Rotar `CMS_USERS` (cambiar claves) cada **trimestre**
- Usar una **cuenta bot** de GitHub dedicada para el token (no tu cuenta personal)
