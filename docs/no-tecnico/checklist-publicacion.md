---
title: Checklist de publicación
sidebar_position: 6
---

# Checklist de publicación

Usa esta lista antes de cada commit y push.

<StepCard number={1} title="Revisión de contenido">
  <ChecklistItem>Archivo en carpeta correcta</ChecklistItem>
  <ChecklistItem>Frontmatter completo</ChecklistItem>
  <ChecklistItem>Enlaces internos funcionales</ChecklistItem>
  <ChecklistItem>Imágenes con texto alternativo</ChecklistItem>
</StepCard>

<StepCard number={2} title="Revisión de cambios Git">
  <ChecklistItem>Solo archivos intencionales</ChecklistItem>
  <ChecklistItem>Sin cambios locales accidentales</ChecklistItem>
  <ChecklistItem>Sin conflictos sin resolver</ChecklistItem>
  <ChecklistItem>Mensaje de commit claro</ChecklistItem>
</StepCard>

<StepCard number={3} title="Publicación">
  <ChecklistItem>Pull antes del commit</ChecklistItem>
  <ChecklistItem>Push después del commit</ChecklistItem>
  <ChecklistItem>Aviso de cierre de turno</ChecklistItem>
</StepCard>

<TroubleshootBox>
Si detectas conflicto, no continúes con push. Coordina con la persona del turno anterior y resuelve primero.
</TroubleshootBox>

## Ejemplo de cierre

`Turno cerrado: actualicé bloque inspire y publiqué commit docs: ajuste de guía comunitaria`
