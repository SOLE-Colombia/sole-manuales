import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Inicio',
      items: [
        'getting-started/introduction',
        'getting-started/instalacion-windows',
        'getting-started/instalacion-macos-linux',
        'getting-started/quick-start',
      ],
    },
    {
      type: 'category',
      label: 'Manual No Técnico',
      items: [
        'no-tecnico/overview',
        'no-tecnico/software-necesario',
        'no-tecnico/flujo-editorial',
        'no-tecnico/obsidian-github-desktop',
        'no-tecnico/gitkraken',
        'no-tecnico/checklist-publicacion',
        'no-tecnico/politica-colaboracion',
      ],
    },
    {
      type: 'category',
      label: 'Usabilidad',
      items: [
        'usabilidad/overview',
        'usabilidad/reporte-inicial',
        'usabilidad/plantilla-reporte',
      ],
    },
    {
      type: 'category',
      label: 'Guía Técnica',
      items: [
        'tecnico/overview',
        'tecnico/infraestructura-distribuida',
        'tecnico/deploy-y-entornos',
        'tecnico/github-pages-dns',
        'tecnico/operacion-local',
        'tecnico/auditoria-configuracion',
      ],
    },
    {
      type: 'category',
      label: 'Gobernanza',
      items: [
        'governance/fuentes-oficiales',
        'governance/checklist-vigencia',
        'governance/modelo-turnos',
        'governance/piloto-validacion',
      ],
    },
  ],
};

export default sidebars;
