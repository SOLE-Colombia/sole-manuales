import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: 'category',
      label: '🚀 Primeros pasos',
      collapsed: false,
      link: {type: 'doc', id: 'getting-started/introduction'},
      items: [
        'getting-started/instalacion-windows',
        'getting-started/instalacion-macos-linux',
        'getting-started/quick-start',
      ],
    },
    {
      type: 'category',
      label: '✏️ Manual No Técnico',
      link: {type: 'doc', id: 'no-tecnico/overview'},
      items: [
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
      label: '📊 Usabilidad',
      link: {type: 'doc', id: 'usabilidad/overview'},
      items: [
        'usabilidad/reporte-inicial',
        'usabilidad/plantilla-reporte',
      ],
    },
    {
      type: 'category',
      label: '⚙️ Guía Técnica',
      link: {type: 'doc', id: 'tecnico/overview'},
      items: [
        'tecnico/infraestructura-distribuida',
        'tecnico/deploy-y-entornos',
        'tecnico/github-pages-dns',
        'tecnico/operacion-local',
        'tecnico/auditoria-configuracion',
      ],
    },
    {
      type: 'category',
      label: '📋 Gobernanza',
      link: {type: 'doc', id: 'governance/fuentes-oficiales'},
      items: [
        'governance/checklist-vigencia',
        'governance/modelo-turnos',
        'governance/piloto-validacion',
      ],
    },
  ],
};

export default sidebars;
