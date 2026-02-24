import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Subir Información a Voltaje',
      items: [
        'subir-informacion/overview',
        'subir-informacion/instalacion-windows-wsl',
        'subir-informacion/instalacion-macos-linux',
        'subir-informacion/flujo-editorial',
        'subir-informacion/subir-con-github-desktop',
        'subir-informacion/subir-con-gitkraken',
        'subir-informacion/markdown-basico',
        'subir-informacion/laboratorio-markdown',
        'subir-informacion/checklist-publicacion',
        'subir-informacion/politica-colaboracion',
      ],
    },
    {
      type: 'category',
      label: 'Cacharrero',
      items: [
        'cacharrero/overview',
        'cacharrero/arquitectura-plataforma',
        'cacharrero/operacion-local',
        'cacharrero/deploy-y-entornos',
        'cacharrero/auditoria-y-vigencia',
        'cacharrero/politica-assets-remotos',
        'cacharrero/cms-cloudflare-oauth',
        'cacharrero/implementacion-online',
      ],
    },
    {
      type: 'category',
      label: 'Legacy',
      items: [
        'legacy/index',
      ],
    },
  ],
};

export default sidebars;
