---
title: Flujo con Obsidian y GitHub Desktop
sidebar_position: 4
---

# Flujo con GitHub Desktop

## Precondiciones

- Repositorio clonado.
- Obsidian abierto sobre el contenido.
- Rama de trabajo confirmada.

## Flujo diario

<StepCard number={1} title="Sincroniza">
Haz `Fetch origin` y luego `Pull origin`.
</StepCard>

<StepCard number={2} title="Edita">
Trabaja en Obsidian sobre los archivos asignados en tu turno.
</StepCard>

<StepCard number={3} title="Revisa">
En GitHub Desktop marca solo archivos intencionales.
</StepCard>

<StepCard number={4} title="Publica">
Commit con mensaje claro y luego push.
</StepCard>

## Checklist de commit seguro

- Solo archivos esperados (`.md`, imágenes o assets intencionales).
- Sin cambios locales accidentales de Obsidian.
- Sin marcadores de conflicto (`<<<<<<<`, `=======`, `>>>>>>>`).
- Un objetivo claro por commit.

## Errores comunes

- No aparecen cambios: revisa repositorio seleccionado.
- Push rechazado: primero `Pull`, luego resolver y volver a publicar.

<TroubleshootBox title="Atajo de resolución">
Si el conflicto es en una nota, conserva la versión correcta por bloques y confirma con una segunda revisión visual antes de commit.
</TroubleshootBox>
