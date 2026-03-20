---
title: Flujo con Obsidian y GitKraken
sidebar_position: 5
---

# Flujo con GitKraken

## Precondiciones

- Repositorio visible en GitKraken.
- Obsidian abierto sobre el contenido.
- Rama de trabajo correcta.

## Flujo diario

1. Pull al iniciar.
2. Edita en Obsidian.
3. Revisa `Unstaged files`.
4. Pasa a `Stage` solo cambios intencionales.
5. Commit descriptivo.
6. Push.

## Buenas prácticas

- Pull también antes del push si trabajaste mucho tiempo.
- No editar el mismo archivo que otra persona en paralelo.
- Mantener commits pequeños.

## Errores comunes

- `Push rejected`: Pull + resolver + Push.
- Cambios inesperados masivos: cancelar stage, revisar carpeta y volver a seleccionar.
