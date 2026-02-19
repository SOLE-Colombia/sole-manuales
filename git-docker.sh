#!/bin/bash
# Script helper para ejecutar Git desde el contenedor Docker
# Uso: ./git-docker.sh <comando git>
# Ejemplo: ./git-docker.sh status
# Ejemplo: ./git-docker.sh commit -m "mensaje"

# Verificar si el contenedor está corriendo
if ! docker ps | grep -q voltaje-scripts; then
    echo "🚀 Iniciando contenedor voltaje-scripts..."
    docker start voltaje-scripts > /dev/null 2>&1
    sleep 1
fi

# Ejecutar el comando git en el contenedor
docker exec -w /workspace voltaje-scripts git "$@"

