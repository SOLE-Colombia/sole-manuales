import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Intranet SOLE',
  tagline: 'Fuente de la verdad del equipo SOLE Colombia',
  favicon: 'img/favicon.ico',
  future: {
    v4: true,
  },
  url: 'https://intranet.solecolombia.org',
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
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Intranet',
      logo: {
        alt: 'SOLE Logo',
        src: 'https://cdn.prod.website-files.com/6050c5e23e5cf1cbe505d4b5/60956ffd9887014318c00ca9_SOLE-Logo_Color-Blanco-Abr19.png',
      },
      items: [
        {
          to: '/docs/cacharrero/overview',
          position: 'left',
          label: 'Cacharrero',
        },
        {href: 'https://intranet.solecolombia.org/admin/', label: 'Editor', position: 'right'},
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
          title: 'Equipo',
          items: [
            {label: 'Cuentera / Storyteller', to: '/docs/cuentera-storyteller/overview'},
            {label: 'Maestre de la construcción', to: '/docs/maestre-construccion/overview'},
            {label: 'Jardinera de proyectos', to: '/docs/jardinera-proyectos/overview'},
            {label: 'Arquitecta de futuros', to: '/docs/arquitecta-futuros/overview'},
            {label: 'Investigador', to: '/docs/investigador/overview'},
          ],
        },
        {
          title: 'Equipo (cont.)',
          items: [
            {label: 'Artista de datos', to: '/docs/artista-datos/overview'},
            {label: 'Fundador Tenaz', to: '/docs/fundador-tenaz/overview'},
            {label: 'Polo a Tierra', to: '/docs/polo-a-tierra/overview'},
            {label: 'Estratega sole voltaje', to: '/docs/estratega-sole-voltaje/overview'},
            {label: 'Cacharrero', to: '/docs/cacharrero/overview'},
          ],
        },
        {
          title: 'Accesos',
          items: [
            {label: 'Editor online', href: 'https://intranet.solecolombia.org/admin/'},
            {label: 'SOLE Colombia', href: 'https://solecolombia.org'},
            {label: 'Voltaje', href: 'https://voltaje.solecolombia.org'},
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
