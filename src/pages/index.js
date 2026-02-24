"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
var react_1 = require("react");
var clsx_1 = require("clsx");
var Link_1 = require("@docusaurus/Link");
var useBaseUrl_1 = require("@docusaurus/useBaseUrl");
var useDocusaurusContext_1 = require("@docusaurus/useDocusaurusContext");
var Layout_1 = require("@theme/Layout");
var Heading_1 = require("@theme/Heading");
var index_module_css_1 = require("./index.module.css");
var DEFAULT_HOME_CONFIG = {
    hero: {
        eyebrow: 'Fundacion SOLE Colombia',
        title: 'Manuales para operar, publicar y sostener el conocimiento',
        subtitle: 'Ruta clara para equipos tecnicos y no tecnicos. Empieza por tu rol, sigue el flujo y publica con revision editorial.',
        background_image: 'https://cdn.prod.website-files.com/63be04f0fe7d2f045f57f2d2/67619dc00a48333410dd56e0_IMG_7056-p-500.jpg',
        primary_cta: {
            label: 'Empezar a subir informacion',
            href: '/docs/subir-informacion/overview',
            external: false,
        },
        secondary_cta: {
            label: 'Ir a Cacharrero',
            href: '/docs/cacharrero/overview',
            external: false,
        },
    },
    brand: {
        logo_url: 'https://cdn.prod.website-files.com/63be04f0fe7d2f045f57f2d2/66a14fd7f98e3740f1a43ab3_Recurso%20220.svg',
        logo_alt: 'SOLE Colombia',
    },
    roles: [
        {
            role_id: 'editor',
            label: 'Editor',
            description: 'Crea y actualiza contenido en Markdown con flujo guiado de publicacion.',
            start_path: '/docs/subir-informacion/overview',
            quick_links: [
                { label: 'Markdown basico', href: '/docs/subir-informacion/markdown-basico', external: false },
                {
                    label: 'Checklist de publicacion',
                    href: '/docs/subir-informacion/checklist-publicacion',
                    external: false,
                },
                { label: 'Voltaje', href: 'https://voltaje.solecolombia.org', external: true },
            ],
        },
        {
            role_id: 'cacharrero',
            label: 'Cacharrero',
            description: 'Mantiene arquitectura, despliegue y operacion tecnica del portal de manuales.',
            start_path: '/docs/cacharrero/overview',
            quick_links: [
                { label: 'Operacion local', href: '/docs/cacharrero/operacion-local', external: false },
                { label: 'Deploy y entornos', href: '/docs/cacharrero/deploy-y-entornos', external: false },
                { label: 'Repositorio', href: 'https://github.com/SOLE-Colombia/sole-manuales', external: true },
            ],
        },
        {
            role_id: 'direccion-voltaje',
            label: 'Direccion de Voltaje',
            description: 'Aprueba cambios estrategicos y valida lineamientos de publicacion.',
            start_path: '/docs/cacharrero/auditoria-y-vigencia',
            quick_links: [
                {
                    label: 'Auditoria y vigencia',
                    href: '/docs/cacharrero/auditoria-y-vigencia',
                    external: false,
                },
                {
                    label: 'Implementacion online',
                    href: '/docs/cacharrero/implementacion-online',
                    external: false,
                },
                { label: 'Sitio SOLE', href: 'https://solecolombia.org', external: true },
            ],
        },
        {
            role_id: 'administrativo',
            label: 'Administrativo',
            description: 'Consulta rutas operativas, publicaciones vigentes y accesos institucionales.',
            start_path: '/docs/subir-informacion/checklist-publicacion',
            quick_links: [
                { label: 'Flujo editorial', href: '/docs/subir-informacion/flujo-editorial', external: false },
                {
                    label: 'Politica de colaboracion',
                    href: '/docs/subir-informacion/politica-colaboracion',
                    external: false,
                },
                { label: 'Fundacion SOLE', href: 'https://solecolombia.org', external: true },
            ],
        },
        {
            role_id: 'gestion-conocimiento',
            label: 'Gestion del conocimiento',
            description: 'Define vigencia documental y coordina calidad editorial en cada ciclo.',
            start_path: '/docs/subir-informacion/politica-colaboracion',
            quick_links: [
                {
                    label: 'Politica de colaboracion',
                    href: '/docs/subir-informacion/politica-colaboracion',
                    external: false,
                },
                {
                    label: 'Laboratorio Markdown',
                    href: '/docs/subir-informacion/laboratorio-markdown',
                    external: false,
                },
                { label: 'Editor online', href: 'https://manual.solecolombia.org/admin/', external: true },
            ],
        },
        {
            role_id: 'jardinera-conexiones',
            label: 'Jardinera de conexiones',
            description: 'Conecta contenidos, rutas y equipos para facilitar publicacion sin friccion.',
            start_path: '/docs/subir-informacion/flujo-editorial',
            quick_links: [
                {
                    label: 'Subir con GitHub Desktop',
                    href: '/docs/subir-informacion/subir-con-github-desktop',
                    external: false,
                },
                {
                    label: 'Subir con GitKraken',
                    href: '/docs/subir-informacion/subir-con-gitkraken',
                    external: false,
                },
                { label: 'Comunidad SOLE', href: 'https://www.solecolombia.org', external: true },
            ],
        },
    ],
    quick_access: [
        { label: 'SOLE Colombia', href: 'https://solecolombia.org', external: true },
        { label: 'Voltaje', href: 'https://voltaje.solecolombia.org', external: true },
        {
            label: 'Repositorio de manuales',
            href: 'https://github.com/SOLE-Colombia/sole-manuales',
            external: true,
        },
        { label: 'Editor online', href: 'https://manual.solecolombia.org/admin/', external: true },
    ],
};
function isQuickLink(value) {
    if (!value || typeof value !== 'object') {
        return false;
    }
    var candidate = value;
    return typeof candidate.label === 'string' && typeof candidate.href === 'string';
}
function isRoleCard(value) {
    if (!value || typeof value !== 'object') {
        return false;
    }
    var candidate = value;
    return (typeof candidate.role_id === 'string' &&
        typeof candidate.label === 'string' &&
        typeof candidate.description === 'string' &&
        typeof candidate.start_path === 'string' &&
        Array.isArray(candidate.quick_links) &&
        candidate.quick_links.every(isQuickLink));
}
function isHeroConfig(value) {
    if (!value || typeof value !== 'object') {
        return false;
    }
    var candidate = value;
    return (typeof candidate.eyebrow === 'string' &&
        typeof candidate.title === 'string' &&
        typeof candidate.subtitle === 'string' &&
        typeof candidate.background_image === 'string' &&
        isQuickLink(candidate.primary_cta) &&
        isQuickLink(candidate.secondary_cta));
}
function isBrandConfig(value) {
    if (!value || typeof value !== 'object') {
        return false;
    }
    var candidate = value;
    return typeof candidate.logo_url === 'string' && typeof candidate.logo_alt === 'string';
}
function isHomeConfig(value) {
    if (!value || typeof value !== 'object') {
        return false;
    }
    var candidate = value;
    return (isHeroConfig(candidate.hero) &&
        isBrandConfig(candidate.brand) &&
        Array.isArray(candidate.roles) &&
        candidate.roles.every(isRoleCard) &&
        Array.isArray(candidate.quick_access) &&
        candidate.quick_access.every(isQuickLink));
}
function SmartLink(_a) {
    var link = _a.link, className = _a.className;
    if (link.external) {
        return (<Link_1.default className={className} href={link.href}>
        {link.label}
      </Link_1.default>);
    }
    return (<Link_1.default className={className} to={link.href}>
      {link.label}
    </Link_1.default>);
}
function Home() {
    var siteConfig = (0, useDocusaurusContext_1.default)().siteConfig;
    var _a = (0, react_1.useState)(DEFAULT_HOME_CONFIG), homeConfig = _a[0], setHomeConfig = _a[1];
    var configUrl = (0, useBaseUrl_1.default)('/data/homepage.json');
    (0, react_1.useEffect)(function () {
        var isMounted = true;
        function loadHomeConfig() {
            return __awaiter(this, void 0, void 0, function () {
                var response, payload, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 3, , 4]);
                            return [4 /*yield*/, fetch(configUrl)];
                        case 1:
                            response = _b.sent();
                            if (!response.ok) {
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, response.json()];
                        case 2:
                            payload = _b.sent();
                            if (isMounted && isHomeConfig(payload)) {
                                setHomeConfig(payload);
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            _a = _b.sent();
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
        loadHomeConfig();
        return function () {
            isMounted = false;
        };
    }, [configUrl]);
    var heroStyle = homeConfig.hero.background_image
        ? {
            backgroundImage: "linear-gradient(110deg, rgba(16, 24, 40, 0.9), rgba(16, 24, 40, 0.48)), url(".concat(homeConfig.hero.background_image, ")"),
        }
        : {};
    return (<Layout_1.default title={siteConfig.title} description="Portal de manuales por rol para equipos de SOLE Colombia">
      <main className={index_module_css_1.default.pageRoot}>
        <section className={(0, clsx_1.default)('container', index_module_css_1.default.heroBanner)} style={heroStyle}>
          <div className={index_module_css_1.default.heroContent}>
            <span className={index_module_css_1.default.heroEyebrow}>{homeConfig.hero.eyebrow}</span>
            {homeConfig.brand.logo_url ? (<img alt={homeConfig.brand.logo_alt} className={index_module_css_1.default.heroLogo} src={homeConfig.brand.logo_url}/>) : null}
            <Heading_1.default as="h1" className={index_module_css_1.default.heroTitle}>
              {homeConfig.hero.title}
            </Heading_1.default>
            <p className={index_module_css_1.default.heroSubtitle}>{homeConfig.hero.subtitle}</p>
            <div className={index_module_css_1.default.heroCtas}>
              <SmartLink className={(0, clsx_1.default)('button button--primary button--lg', index_module_css_1.default.heroPrimaryCta)} link={homeConfig.hero.primary_cta}/>
              <SmartLink className={(0, clsx_1.default)('button button--outline button--lg', index_module_css_1.default.heroSecondaryCta)} link={homeConfig.hero.secondary_cta}/>
            </div>
          </div>
        </section>

        <section className={(0, clsx_1.default)('container', index_module_css_1.default.rolesSection)}>
          <div className={index_module_css_1.default.sectionHeader}>
            <Heading_1.default as="h2">Elige tu ruta por rol</Heading_1.default>
            <p>
              Cada rol tiene una ruta recomendada y accesos directos para ejecutar tareas sin
              friccion.
            </p>
          </div>
          <div className={index_module_css_1.default.sectionGrid}>
            {homeConfig.roles.map(function (role) { return (<article key={role.role_id} className={index_module_css_1.default.roleCard}>
                <Heading_1.default as="h3">{role.label}</Heading_1.default>
                <p>{role.description}</p>
                <Link_1.default className={(0, clsx_1.default)('button button--primary button--sm', index_module_css_1.default.openRoute)} to={role.start_path}>
                  Abrir ruta
                </Link_1.default>
                <ul className={index_module_css_1.default.quickLinks}>
                  {role.quick_links.map(function (quickLink) { return (<li key={"".concat(role.role_id, "-").concat(quickLink.label)}>
                      <SmartLink link={quickLink}/>
                    </li>); })}
                </ul>
              </article>); })}
          </div>
        </section>

        <section className={(0, clsx_1.default)('container', index_module_css_1.default.foundationLinks)}>
          <div className={index_module_css_1.default.sectionHeader}>
            <Heading_1.default as="h2">Accesos rapidos de fundacion</Heading_1.default>
          </div>
          <div className={index_module_css_1.default.linkRow}>
            {homeConfig.quick_access.map(function (item) { return (<SmartLink key={"".concat(item.label, "-").concat(item.href)} className={index_module_css_1.default.quickAccessLink} link={item}/>); })}
          </div>
        </section>
      </main>
    </Layout_1.default>);
}
