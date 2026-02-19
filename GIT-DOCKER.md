# 🐳 Guía de Git con Docker

Este proyecto está configurado para usar Git desde el contenedor Docker, evitando problemas de permisos.

## 📝 Uso del Script Helper

Usa el script `git-docker.sh` para todos los comandos de Git:

```bash
./git-docker.sh <comando-git>
```

## 🔥 Comandos Más Comunes

### Ver estado
```bash
./git-docker.sh status
```

### Ver ramas
```bash
./git-docker.sh branch
./git-docker.sh branch -a  # incluye ramas remotas
```

### Cambiar de rama
```bash
./git-docker.sh checkout nombre-rama
./git-docker.sh checkout -b nueva-rama  # crear y cambiar
```

### Agregar archivos
```bash
./git-docker.sh add .
./git-docker.sh add archivo.md
```

### Hacer commit
```bash
./git-docker.sh commit -m "mensaje del commit"
```

### Ver historial
```bash
./git-docker.sh log
./git-docker.sh log --oneline --graph --all
```

### Pull y Push
```bash
./git-docker.sh pull
./git-docker.sh push
./git-docker.sh push origin nombre-rama
```

### Ver diferencias
```bash
./git-docker.sh diff
./git-docker.sh diff archivo.md
```

### Deshacer cambios
```bash
./git-docker.sh restore archivo.md           # deshacer cambios no staged
./git-docker.sh restore --staged archivo.md  # quitar de staging
./git-docker.sh reset HEAD~1                 # deshacer último commit
```

## 💡 Alias Opcional (Para Tu Comodidad)

Si quieres escribir menos, agrega esto a tu `~/.bashrc`:

```bash
alias g='./git-docker.sh'
```

Luego podrás usar:
```bash
g status
g checkout desarrollo
g commit -m "mensaje"
```

## ⚙️ Cómo Funciona

El script:
1. Verifica si el contenedor `voltaje-scripts` está corriendo
2. Lo inicia automáticamente si no lo está
3. Ejecuta el comando git dentro del contenedor con los permisos correctos
4. Todos los archivos mantienen los permisos correctos

## ⚠️ Importante

- **Siempre usa** `./git-docker.sh` para comandos Git
- **NO uses** `git` directamente en la terminal (causará problemas de permisos)
- El contenedor se inicia automáticamente cuando lo necesites
- Los cambios se reflejan inmediatamente en tu IDE

## 🐛 Solución de Problemas

### Si el contenedor no existe:
```bash
docker start voltaje-scripts
# Si da error, revisa docker-compose.yml y levanta los servicios
```

### Si hay problemas de permisos:
```bash
docker exec voltaje-scripts chown -R 1000:1000 /workspace/.git
docker exec voltaje-scripts chown -R 1000:1000 /workspace/quartz/content
```

## 📚 Recursos

- [Documentación oficial de Git](https://git-scm.com/doc)
- [Cheatsheet de Git](https://education.github.com/git-cheat-sheet-education.pdf)

