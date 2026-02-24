"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prism_react_renderer_1 = require("prism-react-renderer");
var config = {
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
                    editUrl: 'https://github.com/SOLE-Colombia/sole-manuales/blob/main/',
                },
                blog: false,
                theme: {
                    customCss: './src/css/custom.css',
                },
            },
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
                { to: '/docs/cacharrero/overview', label: 'Cacharrero', position: 'left' },
                { to: '/docs/legacy', label: 'Legacy', position: 'left' },
                { href: 'https://manual.solecolombia.org/admin/', label: 'Editor', position: 'right' },
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
                        { label: 'Cacharrero', to: '/docs/cacharrero/overview' },
                        { label: 'Legacy', to: '/docs/legacy' },
                    ],
                },
                {
                    title: 'Accesos',
                    items: [
                        { label: 'Editor online', href: 'https://manual.solecolombia.org/admin/' },
                        { label: 'Implementación online', to: '/docs/cacharrero/implementacion-online' },
                    ],
                },
                {
                    title: 'Organización',
                    items: [
                        {
                            label: 'SOLE Colombia',
                            href: 'https://solecolombia.org',
                        },
                        { label: 'Repositorio', href: 'https://github.com/SOLE-Colombia/sole-manuales' },
                    ],
                },
            ],
            copyright: "Copyright \u00A9 ".concat(new Date().getFullYear(), " SOLE Colombia"),
        },
        prism: {
            theme: prism_react_renderer_1.themes.github,
            darkTheme: prism_react_renderer_1.themes.oneDark,
        },
    },
};
exports.default = config;
