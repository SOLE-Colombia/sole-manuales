import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Manuales SOLE',
  tagline: 'Manual interactivo por pasos para equipos tecnicos y no tecnicos',
  favicon: 'img/favicon.ico',
  future: {
    v4: true,
  },
  url: 'https://manual.solecolombia.org',
  baseUrl: '/',
  organizationName: 'SOLE-Colombia',
  projectName: 'sole-manuales',
  onBrokenLinks: 'throw',
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
            'https://github.com/SOLE-Colombia/sole-manuales/blob/main/',
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
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Manuales SOLE',
      logo: {
        alt: 'Manuales SOLE',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs/getting-started/introduction',
          position: 'left',
          label: 'Empezar',
        },
        {to: '/docs/no-tecnico/overview', label: 'No técnico', position: 'left'},
        {to: '/docs/tecnico/overview', label: 'Técnico', position: 'left'},
        {to: '/docs/usabilidad/overview', label: 'Usabilidad', position: 'left'},
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
            {
              label: 'Inicio',
              to: '/docs/getting-started/introduction',
            },
            {label: 'No técnico', to: '/docs/no-tecnico/overview'},
            {label: 'Técnico', to: '/docs/tecnico/overview'},
          ],
        },
        {
          title: 'Operación',
          items: [
            {label: 'Política de turnos', to: '/docs/governance/modelo-turnos'},
            {label: 'Checklist mensual', to: '/docs/governance/checklist-vigencia'},
          ],
        },
        {
          title: 'Organización',
          items: [
            {
              label: 'SOLE Colombia',
              href: 'https://solecolombia.org',
            },
            {label: 'Repositorio', href: 'https://github.com/SOLE-Colombia/sole-manuales'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SOLE Colombia`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.oneDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
