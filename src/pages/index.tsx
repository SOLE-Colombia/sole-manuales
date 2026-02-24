import {useEffect, useState, type CSSProperties, type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

type QuickLink = {
  label: string;
  href: string;
  external?: boolean;
};

type RoleCard = {
  role_id: string;
  label: string;
  description: string;
  start_path: string;
  quick_links: QuickLink[];
};

type HeroConfig = {
  eyebrow: string;
  title: string;
  subtitle: string;
  background_image: string;
  primary_cta: QuickLink;
  secondary_cta: QuickLink;
};

type BrandConfig = {
  logo_url: string;
  logo_alt: string;
};

type HomeConfig = {
  hero: HeroConfig;
  brand: BrandConfig;
  roles: RoleCard[];
  quick_access: QuickLink[];
};

const DEFAULT_HOME_CONFIG: HomeConfig = {
  hero: {
    eyebrow: 'Fundacion SOLE Colombia',
    title: 'Manuales para operar, publicar y sostener el conocimiento',
    subtitle:
      'Ruta clara para equipos tecnicos y no tecnicos. Empieza por tu rol, sigue el flujo y publica con revision editorial.',
    background_image:
      'https://cdn.prod.website-files.com/63be04f0fe7d2f045f57f2d2/67619dc00a48333410dd56e0_IMG_7056-p-500.jpg',
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
    logo_url:
      'https://cdn.prod.website-files.com/63be04f0fe7d2f045f57f2d2/66a14fd7f98e3740f1a43ab3_Recurso%20220.svg',
    logo_alt: 'SOLE Colombia',
  },
  roles: [
    {
      role_id: 'editor',
      label: 'Editor',
      description: 'Crea y actualiza contenido en Markdown con flujo guiado de publicacion.',
      start_path: '/docs/subir-informacion/overview',
      quick_links: [
        {label: 'Markdown basico', href: '/docs/subir-informacion/markdown-basico', external: false},
        {
          label: 'Checklist de publicacion',
          href: '/docs/subir-informacion/checklist-publicacion',
          external: false,
        },
        {label: 'Voltaje', href: 'https://voltaje.solecolombia.org', external: true},
      ],
    },
    {
      role_id: 'cacharrero',
      label: 'Cacharrero',
      description: 'Mantiene arquitectura, despliegue y operacion tecnica del portal de manuales.',
      start_path: '/docs/cacharrero/overview',
      quick_links: [
        {label: 'Operacion local', href: '/docs/cacharrero/operacion-local', external: false},
        {label: 'Deploy y entornos', href: '/docs/cacharrero/deploy-y-entornos', external: false},
        {
          label: 'CMS Cloudflare OAuth',
          href: '/docs/cacharrero/cms-cloudflare-oauth',
          external: false,
        },
        {label: 'Repositorio', href: 'https://github.com/SOLE-Colombia/sole-manuales', external: true},
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
        {label: 'Sitio SOLE', href: 'https://solecolombia.org', external: true},
      ],
    },
    {
      role_id: 'administrativo',
      label: 'Administrativo',
      description: 'Consulta rutas operativas, publicaciones vigentes y accesos institucionales.',
      start_path: '/docs/subir-informacion/checklist-publicacion',
      quick_links: [
        {label: 'Flujo editorial', href: '/docs/subir-informacion/flujo-editorial', external: false},
        {
          label: 'Politica de colaboracion',
          href: '/docs/subir-informacion/politica-colaboracion',
          external: false,
        },
        {label: 'Fundacion SOLE', href: 'https://solecolombia.org', external: true},
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
        {label: 'Editor online', href: 'https://manual.solecolombia.org/admin/', external: true},
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
        {label: 'Comunidad SOLE', href: 'https://www.solecolombia.org', external: true},
      ],
    },
  ],
  quick_access: [
    {label: 'SOLE Colombia', href: 'https://solecolombia.org', external: true},
    {label: 'Voltaje', href: 'https://voltaje.solecolombia.org', external: true},
    {
      label: 'Repositorio de manuales',
      href: 'https://github.com/SOLE-Colombia/sole-manuales',
      external: true,
    },
    {label: 'Editor online', href: 'https://manual.solecolombia.org/admin/', external: true},
  ],
};

function isQuickLink(value: unknown): value is QuickLink {
  if (!value || typeof value !== 'object') {
    return false;
  }
  const candidate = value as Partial<QuickLink>;
  return typeof candidate.label === 'string' && typeof candidate.href === 'string';
}

function isRoleCard(value: unknown): value is RoleCard {
  if (!value || typeof value !== 'object') {
    return false;
  }
  const candidate = value as Partial<RoleCard>;
  return (
    typeof candidate.role_id === 'string' &&
    typeof candidate.label === 'string' &&
    typeof candidate.description === 'string' &&
    typeof candidate.start_path === 'string' &&
    Array.isArray(candidate.quick_links) &&
    candidate.quick_links.every(isQuickLink)
  );
}

function isHeroConfig(value: unknown): value is HeroConfig {
  if (!value || typeof value !== 'object') {
    return false;
  }
  const candidate = value as Partial<HeroConfig>;
  return (
    typeof candidate.eyebrow === 'string' &&
    typeof candidate.title === 'string' &&
    typeof candidate.subtitle === 'string' &&
    typeof candidate.background_image === 'string' &&
    isQuickLink(candidate.primary_cta) &&
    isQuickLink(candidate.secondary_cta)
  );
}

function isBrandConfig(value: unknown): value is BrandConfig {
  if (!value || typeof value !== 'object') {
    return false;
  }
  const candidate = value as Partial<BrandConfig>;
  return typeof candidate.logo_url === 'string' && typeof candidate.logo_alt === 'string';
}

function isHomeConfig(value: unknown): value is HomeConfig {
  if (!value || typeof value !== 'object') {
    return false;
  }
  const candidate = value as Partial<HomeConfig>;
  return (
    isHeroConfig(candidate.hero) &&
    isBrandConfig(candidate.brand) &&
    Array.isArray(candidate.roles) &&
    candidate.roles.every(isRoleCard) &&
    Array.isArray(candidate.quick_access) &&
    candidate.quick_access.every(isQuickLink)
  );
}

function SmartLink({
  link,
  className,
}: {
  link: QuickLink;
  className?: string;
}): ReactNode {
  if (link.external) {
    return (
      <Link className={className} href={link.href}>
        {link.label}
      </Link>
    );
  }
  return (
    <Link className={className} to={link.href}>
      {link.label}
    </Link>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const [homeConfig, setHomeConfig] = useState<HomeConfig>(DEFAULT_HOME_CONFIG);
  const configUrl = useBaseUrl('/data/homepage.json');

  useEffect(() => {
    let isMounted = true;

    async function loadHomeConfig() {
      try {
        const response = await fetch(configUrl);
        if (!response.ok) {
          return;
        }
        const payload = await response.json();
        if (isMounted && isHomeConfig(payload)) {
          setHomeConfig(payload);
        }
      } catch {
        // Mantener fallback local si falla carga de JSON.
      }
    }

    loadHomeConfig();

    return () => {
      isMounted = false;
    };
  }, [configUrl]);

  const heroStyle: CSSProperties = homeConfig.hero.background_image
    ? {
        backgroundImage: `linear-gradient(110deg, rgba(16, 24, 40, 0.9), rgba(16, 24, 40, 0.48)), url(${homeConfig.hero.background_image})`,
      }
    : {};

  return (
    <Layout
      title={siteConfig.title}
      description="Portal de manuales por rol para equipos de SOLE Colombia">
      <main className={styles.pageRoot}>
        <section className={clsx('container', styles.heroBanner)} style={heroStyle}>
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>{homeConfig.hero.eyebrow}</span>
            {homeConfig.brand.logo_url ? (
              <img
                alt={homeConfig.brand.logo_alt}
                className={styles.heroLogo}
                src={homeConfig.brand.logo_url}
              />
            ) : null}
            <Heading as="h1" className={styles.heroTitle}>
              {homeConfig.hero.title}
            </Heading>
            <p className={styles.heroSubtitle}>{homeConfig.hero.subtitle}</p>
            <div className={styles.heroCtas}>
              <SmartLink
                className={clsx('button button--primary button--lg', styles.heroPrimaryCta)}
                link={homeConfig.hero.primary_cta}
              />
              <SmartLink
                className={clsx('button button--outline button--lg', styles.heroSecondaryCta)}
                link={homeConfig.hero.secondary_cta}
              />
            </div>
          </div>
        </section>

        <section className={clsx('container', styles.rolesSection)}>
          <div className={styles.sectionHeader}>
            <Heading as="h2">Elige tu ruta por rol</Heading>
            <p>
              Cada rol tiene una ruta recomendada y accesos directos para ejecutar tareas sin
              friccion.
            </p>
          </div>
          <div className={styles.sectionGrid}>
            {homeConfig.roles.map((role) => (
              <article key={role.role_id} className={styles.roleCard}>
                <Heading as="h3">{role.label}</Heading>
                <p>{role.description}</p>
                <Link className={clsx('button button--primary button--sm', styles.openRoute)} to={role.start_path}>
                  Abrir ruta
                </Link>
                <ul className={styles.quickLinks}>
                  {role.quick_links.map((quickLink) => (
                    <li key={`${role.role_id}-${quickLink.label}`}>
                      <SmartLink link={quickLink} />
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className={clsx('container', styles.foundationLinks)}>
          <div className={styles.sectionHeader}>
            <Heading as="h2">Accesos rapidos de fundacion</Heading>
          </div>
          <div className={styles.linkRow}>
            {homeConfig.quick_access.map((item) => (
              <SmartLink
                key={`${item.label}-${item.href}`}
                className={styles.quickAccessLink}
                link={item}
              />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
