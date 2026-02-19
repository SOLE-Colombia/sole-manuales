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

## 6) Verificación final

- `https://manual.solecolombia.org` responde.
- Navegación de docs correcta.
- Build CI en verde.
