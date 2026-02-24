import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Manuales SOLE',
  tagline: 'Manual de cacharrero y ruta para subir informacion a Voltaje',
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
          to: '/docs/subir-informacion/overview',
          position: 'left',
          label: 'Subir información',
        },
        {to: '/docs/cacharrero/overview', label: 'Cacharrero', position: 'left'},
        {to: '/docs/legacy/index', label: 'Legacy', position: 'left'},
        {to: '/admin/', label: 'Editor', position: 'right'},
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
              label: 'Subir información',
              to: '/docs/subir-informacion/overview',
            },
            {label: 'Cacharrero', to: '/docs/cacharrero/overview'},
            {label: 'Legacy', to: '/docs/legacy/index'},
          ],
        },
        {
          title: 'Accesos',
          items: [
            {label: 'Editor online', to: '/admin/'},
            {label: 'Implementación online', to: '/docs/cacharrero/implementacion-online'},
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
