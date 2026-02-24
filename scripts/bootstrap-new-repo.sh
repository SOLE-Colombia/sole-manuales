#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 2 ]]; then
  echo "Uso: $0 <destino-local> <git-remote-url>"
  echo "Ejemplo: $0 /tmp/sole-manuales git@github.com:SOLE-Colombia/sole-manuales.git"
  exit 1
fi

DEST_DIR="$1"
REMOTE_URL="$2"
SRC_DIR="$(cd "$(dirname "$0")/.." && pwd)"

if [[ -e "$DEST_DIR" ]]; then
  echo "Error: el destino ya existe: $DEST_DIR"
  exit 1
fi

cp -R "$SRC_DIR" "$DEST_DIR"
cd "$DEST_DIR"

rm -rf .git node_modules build .docusaurus .cache-loader

git init
git add .
git commit -m "chore: bootstrap manuales v1"
git branch -M main
git remote add origin "$REMOTE_URL"

echo "Repositorio inicializado en $DEST_DIR"
echo "Siguiente paso: git push -u origin main"
