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
  person?: string;
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
    eyebrow: 'Fundación SOLE Colombia',
    title: 'Intranet — Fuente de la verdad del equipo',
    subtitle:
      'Cada rol tiene su espacio para documentar, publicar y consultar. Encuentra tu sección y empieza a construir conocimiento.',
    background_image:
      'https://cdn.prod.website-files.com/63be04f0fe7d2f045f57f2d2/67619dc00a48333410dd56e0_IMG_7056-p-500.jpg',
    primary_cta: {
      label: 'Ir al Editor',
      href: 'https://intranet.solecolombia.org/admin/',
      external: true,
    },
    secondary_cta: {
      label: 'Guía técnica',
      href: '/docs/cacharrero/overview',
      external: false,
    },
  },
  brand: {
    logo_url:
      'https://cdn.prod.website-files.com/63be04f0fe7d2f045f57f2d2/66a14fd7f98e3740f1a43ab3_Recurso%20220.svg',
    logo_alt: 'SOLE Colombia',
  },
  roles: [],
  quick_access: [
    {label: 'SOLE Colombia', href: 'https://solecolombia.org', external: true},
    {label: 'Voltaje', href: 'https://voltaje.solecolombia.org', external: true},
    {label: 'Repositorio', href: 'https://github.com/SOLE-Colombia/sole-manuales', external: true},
    {label: 'Editor online', href: 'https://intranet.solecolombia.org/admin/', external: true},
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
      description="Intranet y fuente de la verdad del equipo SOLE Colombia">
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

        {homeConfig.roles.length > 0 ? (
          <section className={clsx('container', styles.rolesSection)}>
            <div className={styles.sectionHeader}>
              <Heading as="h2">Equipo SOLE</Heading>
              <p>
                Cada rol tiene su sección de documentación y acceso directo al editor.
              </p>
            </div>
            <div className={styles.sectionGrid}>
              {homeConfig.roles.map((role) => (
                <article key={role.role_id} className={styles.roleCard}>
                  <Heading as="h3">{role.label}</Heading>
                  {role.person ? (
                    <span className={styles.personBadge}>{role.person}</span>
                  ) : null}
                  <p>{role.description}</p>
                  <Link className={clsx('button button--primary button--sm', styles.openRoute)} to={role.start_path}>
                    Abrir sección
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
        ) : null}

        <section className={clsx('container', styles.foundationLinks)}>
          <div className={styles.sectionHeader}>
            <Heading as="h2">Accesos rápidos de fundación</Heading>
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
