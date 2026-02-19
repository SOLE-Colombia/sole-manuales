import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

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
            to="/docs/getting-started/introduction">
            Empezar ahora
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
      description="Manuales por pasos de SOLE Colombia">
      <HomepageHeader />
      <main>
        <section className={styles.sectionGrid}>
          <article className="manual-card">
            <Heading as="h2">Ruta no técnica</Heading>
            <p>Flujo guiado para edición en Obsidian y publicación con clientes Git visuales.</p>
            <Link className="button button--primary button--sm" to="/docs/no-tecnico/overview">
              Ver guía
            </Link>
          </article>
          <article className="manual-card">
            <Heading as="h2">Usabilidad</Heading>
            <p>Reporte inicial, criterios de evaluación y plantilla para ciclos de mejora continua.</p>
            <Link className="button button--primary button--sm" to="/docs/usabilidad/overview">
              Ver módulo
            </Link>
          </article>
          <article className="manual-card">
            <Heading as="h2">Infraestructura</Heading>
            <p>Arquitectura distribuida, despliegue en Pages y operación local con Docker.</p>
            <Link className="button button--primary button--sm" to="/docs/tecnico/overview">
              Ver técnico
            </Link>
          </article>
        </section>
      </main>
    </Layout>
  );
}
