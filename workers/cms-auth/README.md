# CMS Auth Worker (multi-usuario)

Worker para autenticar editores de la Intranet SOLE con `correo + clave`.

## Flujo

1. Decap CMS abre `https://auth.intranet.solecolombia.org/auth/v2` en popup.
2. El usuario ingresa su correo y clave.
3. Si son válidas, el Worker envía al popup opener un mensaje de autorización con token GitHub.
4. Decap CMS usa ese token para crear ramas, commits y PRs en `SOLE-Colombia/sole-manuales`.

## Usuarios

Los usuarios se definen en un secreto de Cloudflare llamado `CMS_USERS` con formato JSON:

```json
[
  {"user": "natalia@solecolombia.org", "password": "sole2026", "name": "Natalia Torres", "role": "Cuentera/Storyteller"},
  {"user": "julian@solecolombia.org", "password": "sole2026", "name": "Julian Ruíz", "role": "Maestre de la construcción"},
  {"user": "anacaro@solecolombia.org", "password": "sole2026", "name": "Ana Caro Alonso", "role": "Jardinera de proyectos"},
  {"user": "isabel@solecolombia.org", "password": "sole2026", "name": "Isabel Tafur", "role": "Arquitecta de futuros"},
  {"user": "daniel@solecolombia.org", "password": "sole2026", "name": "Daniel Martínez", "role": "Investigador"},
  {"user": "mateo@solecolombia.org", "password": "sole2026", "name": "Mateo Moreno", "role": "Artista de datos"},
  {"user": "sanjay@solecolombia.org", "password": "sole2026", "name": "Sanjay Fernandes", "role": "Fundador Tenaz"},
  {"user": "lizeth@solecolombia.org", "password": "sole2026", "name": "Lizeth Naranjo", "role": "Polo a Tierra"},
  {"user": "catalina@solecolombia.org", "password": "sole2026", "name": "Catalina Ramírez", "role": "Estratega sole voltaje"},
  {"user": "david@solecolombia.org", "password": "sole2026", "name": "David Vega", "role": "Anarqueologo de los medios"}
]
```

### Agregar un usuario

1. Descarga el JSON actual: `wrangler secret list` (no muestra valores, solo nombres).
2. Agrega el nuevo objeto al array JSON.
3. Ejecuta `wrangler secret put CMS_USERS` y pega el JSON actualizado.

### Cambiar una clave

1. Edita el JSON cambiando el campo `password` del usuario.
2. Ejecuta `wrangler secret put CMS_USERS` y pega el JSON completo.

### Eliminar un usuario

1. Quita el objeto del array JSON.
2. Ejecuta `wrangler secret put CMS_USERS` y pega el JSON actualizado.

## Variables y secretos

Valores en `wrangler.toml`:

- `ALLOWED_ORIGINS`: orígenes permitidos para el popup.

Secretos (requeridos):

```bash
wrangler secret put CMS_USERS
wrangler secret put CMS_GITHUB_TOKEN
```

> **Nota**: los secretos se guardan cifrados en Cloudflare. No aparecen en `wrangler.toml` ni en el repositorio. Solo puedes setearlos con `wrangler secret put`.

### Compatibilidad hacia atrás

Si `CMS_USERS` no existe, el Worker busca `CMS_LOGIN_USER` + `CMS_LOGIN_PASSWORD` para modo un-solo-usuario.

## Endpoints

| Método | Ruta            | Descripción                                     |
|--------|-----------------|-------------------------------------------------|
| GET    | `/healthz`      | Health check del Worker                         |
| GET    | `/token-status` | Estado del token GitHub (válido, scopes, etc.)  |
| GET    | `/users`        | Lista de usuarios configurados (sin claves)     |
| GET    | `/auth/v2`      | Formulario de login                             |
| POST   | `/auth/v2`      | Validar credenciales y retornar token           |

## Despliegue

```bash
cd workers/cms-auth
npx wrangler deploy
```

## Modo prueba

```bash
cd workers/cms-auth
npx wrangler secret put CMS_USERS --config wrangler.test.toml
npx wrangler secret put CMS_GITHUB_TOKEN --config wrangler.test.toml
npx wrangler deploy --config wrangler.test.toml
```
