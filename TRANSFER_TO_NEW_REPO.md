# Cómo publicar este monorepo como repositorio independiente

Esta carpeta `manuales/` está preparada para convertirse en el repo `SOLE-Colombia/sole-manuales`.

## 1) Crear repo remoto vacío

- Nombre sugerido: `sole-manuales`
- Organización: `SOLE-Colombia`
- Visibilidad: pública

## 2) Copiar esta carpeta como raíz del nuevo repo

```bash
cd /ruta/donde/quieras
cp -R /workspaces/voltaje-dev/manuales ./sole-manuales
cd sole-manuales
```

Alternativa automatizada:

```bash
./scripts/bootstrap-new-repo.sh /ruta/sole-manuales git@github.com:SOLE-Colombia/sole-manuales.git
```

## 3) Inicializar git y publicar

```bash
git init
git add .
git commit -m "chore: bootstrap manual interactivo con Docusaurus"
git branch -M main
git remote add origin git@github.com:SOLE-Colombia/sole-manuales.git
git push -u origin main
```

## 4) Activar GitHub Pages

1. Repo settings -> Pages.
2. Source: GitHub Actions.
3. Confirmar que corra `.github/workflows/deploy-pages.yml`.

## 5) Configurar dominio

1. DNS: crear CNAME `manual` -> `SOLE-Colombia.github.io`.
2. Esperar propagación.
3. Verificar que `static/CNAME` contiene `manual.solecolombia.org`.

## 6) Activar validación y aprobaciones

1. Confirmar workflow `.github/workflows/ci-docs.yml`.
2. Confirmar archivo `.github/CODEOWNERS`.
3. En branch protection de `main`, activar:
   - Require pull request before merging.
   - Require approvals.
   - Dismiss stale approvals.
   - Require status checks to pass.

## 7) Activar editor online

1. Verificar `static/admin/index.html`.
2. Verificar `static/admin/config.yml`.
3. Abrir `https://manual.solecolombia.org/admin/` tras el primer deploy.

## 8) Activar OAuth en Cloudflare para CMS

1. Crear GitHub OAuth App:
   - Homepage URL: `https://auth.manual.solecolombia.org`
   - Callback URL: `https://auth.manual.solecolombia.org/callback`
2. Desplegar proxy OAuth en Cloudflare Worker.
3. Confirmar `base_url` y `auth_endpoint` en `static/admin/config.yml`.
4. Verificar login en `https://manual.solecolombia.org/admin/`.

## 9) Verificación final

- `https://manual.solecolombia.org` responde.
- Navegación v1 (`cacharrero` y `subir-informacion`) correcta.
- CI en verde y PR con aprobación obligatoria.
- Login CMS funcional con Cloudflare OAuth.

## 10) Desacople definitivo con `voltaje-dev`

Después del cutover:

- Editar manuales solo en `SOLE-Colombia/sole-manuales`.
- No usar commits en `voltaje-dev` para cambios de manuales operativos.
- Mantener en `voltaje-dev` únicamente enlaces de referencia al portal de manuales.
