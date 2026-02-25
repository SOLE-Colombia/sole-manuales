# CMS Auth Worker (usuario + clave)

Worker para reemplazar el login GitHub OAuth del CMS por acceso simple con `usuario + clave`.

## Flujo

1. Decap CMS abre `https://auth.manual.solecolombia.org/auth/v2` en popup.
2. El usuario ingresa credenciales editoriales.
3. Si son válidas, el Worker envía al popup opener un mensaje de autorización con token GitHub.
4. Decap CMS usa ese token para crear ramas, commits y PRs en `SOLE-Colombia/sole-manuales`.

## Variables y secretos

Valores en `wrangler.toml`:

- `ALLOWED_ORIGINS`: orígenes permitidos para el popup.
- `CMS_LOGIN_USER`: usuario permitido.

Secretos (requeridos):

```bash
wrangler secret put CMS_LOGIN_PASSWORD
wrangler secret put CMS_GITHUB_TOKEN
```

Notas:

- `CMS_GITHUB_TOKEN` debe ser de una cuenta de servicio con permisos sobre el repo.
- Recomendada cuenta bot con permisos mínimos necesarios.

## Despliegue

```bash
cd workers/cms-auth
npx wrangler deploy
```

## Modo prueba (sin tocar producción)

Usa `wrangler.test.toml` para desplegar una versión separada del Worker.

```bash
cd workers/cms-auth
npx wrangler secret put CMS_LOGIN_PASSWORD --config wrangler.test.toml
npx wrangler secret put CMS_GITHUB_TOKEN --config wrangler.test.toml
npx wrangler deploy --config wrangler.test.toml
```

Esto crea un Worker distinto (`sole-manuales-auth-test`) en `*.workers.dev`.
Puedes probar el formulario en:

- `https://<tu-worker-test>.workers.dev/auth/v2`
- `https://<tu-worker-test>.workers.dev/healthz`

## Healthcheck

`GET /healthz` retorna JSON de estado.
