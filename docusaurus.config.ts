import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Manuales SOLE',
  tagline: 'Documentación interactiva para equipos técnicos y no técnicos',
  favicon: 'img/favicon.ico',
  future: {
    v4: true,
  },
  url: 'https://sole-colombia.github.io',
  baseUrl: '/sole-manuales/',
  organizationName: 'SOLE-Colombia',
  projectName: 'sole-manuales',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/SOLE-Colombia/sole-manuales/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'Manuales SOLE',
      logo: {
        alt: 'SOLE Colombia',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Documentación',
        },
        {to: '/docs/no-tecnico/overview', label: 'No técnico', position: 'left'},
        {to: '/docs/tecnico/overview', label: 'Técnico', position: 'left'},
        {
          href: 'https://github.com/SOLE-Colombia/sole-manuales',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Manuales',
          items: [
            {label: 'Primeros pasos', to: '/docs/getting-started/introduction'},
            {label: 'No técnico', to: '/docs/no-tecnico/overview'},
            {label: 'Técnico', to: '/docs/tecnico/overview'},
            {label: 'Usabilidad', to: '/docs/usabilidad/overview'},
          ],
        },
        {
          title: 'Operación',
          items: [
            {label: 'Política de turnos', to: '/docs/governance/modelo-turnos'},
            {label: 'Checklist mensual', to: '/docs/governance/checklist-vigencia'},
            {label: 'Fuentes oficiales', to: '/docs/governance/fuentes-oficiales'},
          ],
        },
        {
          title: 'Comunidad',
          items: [
            {label: 'SOLE Colombia', href: 'https://solecolombia.org'},
            {label: 'GitHub', href: 'https://github.com/SOLE-Colombia/sole-manuales'},
            {label: 'Voltaje', href: 'https://voltaje.solecolombia.org'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} SOLE Colombia · Hecho con Docusaurus`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ['bash', 'json', 'yaml', 'docker'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
