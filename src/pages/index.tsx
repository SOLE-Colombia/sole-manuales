import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
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

const roleCards: RoleCard[] = [
  {
    role_id: 'editor',
    label: 'Editor',
    description: 'Crea y actualiza contenido en Markdown con flujo guiado de publicación.',
    start_path: '/docs/subir-informacion/overview',
    quick_links: [
      {label: 'Markdown básico', href: '/docs/subir-informacion/markdown-basico'},
      {label: 'Checklist de publicación', href: '/docs/subir-informacion/checklist-publicacion'},
      {label: 'Voltaje', href: 'https://voltaje.solecolombia.org', external: true},
    ],
  },
  {
    role_id: 'cacharrero',
    label: 'Cacharrero',
    description: 'Mantiene arquitectura, despliegue y operación técnica del portal de manuales.',
    start_path: '/docs/cacharrero/overview',
    quick_links: [
      {label: 'Operación local', href: '/docs/cacharrero/operacion-local'},
      {label: 'Deploy y entornos', href: '/docs/cacharrero/deploy-y-entornos'},
      {label: 'Repositorio', href: 'https://github.com/SOLE-Colombia/sole-manuales', external: true},
    ],
  },
  {
    role_id: 'direccion-voltaje',
    label: 'Dirección de Voltaje',
    description: 'Aprueba cambios estratégicos y valida lineamientos de publicación.',
    start_path: '/docs/cacharrero/auditoria-y-vigencia',
    quick_links: [
      {label: 'Auditoría y vigencia', href: '/docs/cacharrero/auditoria-y-vigencia'},
      {label: 'Implementación online', href: '/docs/cacharrero/implementacion-online'},
      {label: 'Sitio SOLE', href: 'https://solecolombia.org', external: true},
    ],
  },
  {
    role_id: 'administrativo',
    label: 'Administrativo',
    description: 'Consulta rutas operativas, publicaciones vigentes y accesos institucionales.',
    start_path: '/docs/subir-informacion/checklist-publicacion',
    quick_links: [
      {label: 'Flujo editorial', href: '/docs/subir-informacion/flujo-editorial'},
      {label: 'Política de colaboración', href: '/docs/subir-informacion/politica-colaboracion'},
      {label: 'Fundación SOLE', href: 'https://solecolombia.org', external: true},
    ],
  },
  {
    role_id: 'gestion-conocimiento',
    label: 'Gestión del conocimiento',
    description: 'Define vigencia documental y coordina calidad editorial en cada ciclo.',
    start_path: '/docs/subir-informacion/politica-colaboracion',
    quick_links: [
      {label: 'Política de colaboración', href: '/docs/subir-informacion/politica-colaboracion'},
      {label: 'Laboratorio Markdown', href: '/docs/subir-informacion/laboratorio-markdown'},
      {label: 'Editor online', href: '/admin/'},
    ],
  },
  {
    role_id: 'jardinera-conexiones',
    label: 'Jardinera de conexiones',
    description: 'Conecta contenidos, rutas y equipos para facilitar publicación sin fricción.',
    start_path: '/docs/subir-informacion/flujo-editorial',
    quick_links: [
      {label: 'Subir con GitHub Desktop', href: '/docs/subir-informacion/subir-con-github-desktop'},
      {label: 'Subir con GitKraken', href: '/docs/subir-informacion/subir-con-gitkraken'},
      {label: 'Comunidad SOLE', href: 'https://www.solecolombia.org', external: true},
    ],
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/subir-informacion/overview">
            Empezar ruta v1
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Portal de manuales por rol para equipos de SOLE Colombia">
      <HomepageHeader />
      <main>
        <section className={clsx('container', styles.sectionGrid)}>
          {roleCards.map((role) => (
            <article key={role.role_id} className={clsx('manual-card', styles.roleCard)}>
              <Heading as="h2">{role.label}</Heading>
              <p>{role.description}</p>
              <Link className="button button--primary button--sm" to={role.start_path}>
                Abrir ruta
              </Link>
              <ul className={styles.quickLinks}>
                {role.quick_links.map((quickLink) => (
                  <li key={`${role.role_id}-${quickLink.label}`}>
                    {quickLink.external ? (
                      <Link href={quickLink.href}>{quickLink.label}</Link>
                    ) : (
                      <Link to={quickLink.href}>{quickLink.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>
        <section className={clsx('container', styles.foundationLinks)}>
          <Heading as="h2">Accesos rápidos de la fundación</Heading>
          <div className={styles.linkRow}>
            <Link href="https://solecolombia.org">SOLE Colombia</Link>
            <Link href="https://voltaje.solecolombia.org">Voltaje</Link>
            <Link href="https://github.com/SOLE-Colombia/sole-manuales">Repositorio de manuales</Link>
            <Link to="/admin/">Editor online</Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
