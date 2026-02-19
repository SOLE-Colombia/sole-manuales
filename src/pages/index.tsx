import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

type CardProps = {
  icon: string;
  title: string;
  description: string;
  to: string;
  label: string;
  accent: string;
};

const cards: CardProps[] = [
  {
    icon: '🚀',
    title: 'Primeros pasos',
    description:
      'Instala las herramientas, configura tu entorno y empieza a contribuir en minutos.',
    to: '/docs/getting-started/introduction',
    label: 'Comenzar',
    accent: '#4f46e5',
  },
  {
    icon: '✏️',
    title: 'Ruta no técnica',
    description:
      'Edita contenido con Obsidian y publica con GitHub Desktop o GitKraken, paso a paso.',
    to: '/docs/no-tecnico/overview',
    label: 'Ver guía',
    accent: '#0891b2',
  },
  {
    icon: '📊',
    title: 'Usabilidad',
    description:
      'Reporte inicial, criterios de evaluación y plantilla para ciclos de mejora continua.',
    to: '/docs/usabilidad/overview',
    label: 'Ver reportes',
    accent: '#059669',
  },
  {
    icon: '⚙️',
    title: 'Infraestructura',
    description:
      'Arquitectura distribuida, despliegue en GitHub Pages y operación local con Docker.',
    to: '/docs/tecnico/overview',
    label: 'Ver técnico',
    accent: '#7c3aed',
  },
  {
    icon: '📋',
    title: 'Gobernanza',
    description:
      'Políticas de turnos, checklists mensuales y modelo de validación del proyecto.',
    to: '/docs/governance/fuentes-oficiales',
    label: 'Ver políticas',
    accent: '#dc2626',
  },
];

function FeatureCard({icon, title, description, to, label, accent}: CardProps) {
  return (
    <article className="manual-card">
      <span className="manual-card__icon">{icon}</span>
      <Heading as="h2">{title}</Heading>
      <p>{description}</p>
      <Link
        className="button button--primary button--sm"
        to={to}
        style={{background: accent}}>
        {label} →
      </Link>
    </article>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroBadge}>Wiki oficial</div>
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>
          Documentación interactiva para equipos técnicos y no técnicos de{' '}
          <strong>SOLE Colombia</strong>
        </p>
        <div className={styles.heroActions}>
          <Link
            className="button button--primary button--lg"
            to="/docs/getting-started/introduction">
            Empezar ahora
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/docs/no-tecnico/overview">
            Soy no técnico
          </Link>
        </div>
      </div>
    </header>
  );
}

function QuickLinks() {
  return (
    <section className={styles.quickLinks}>
      <div className="container">
        <div className={styles.quickLinksGrid}>
          <Link to="/docs/getting-started/instalacion-windows" className={styles.quickLink}>
            <span>🪟</span> Instalar en Windows
          </Link>
          <Link to="/docs/getting-started/instalacion-macos-linux" className={styles.quickLink}>
            <span>🍎</span> Instalar en macOS / Linux
          </Link>
          <Link to="/docs/no-tecnico/software-necesario" className={styles.quickLink}>
            <span>📦</span> Software necesario
          </Link>
          <Link to="/docs/no-tecnico/politica-colaboracion" className={styles.quickLink}>
            <span>🤝</span> Política de colaboración
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout description="Wiki de manuales interactivos de SOLE Colombia">
      <HomepageHeader />
      <QuickLinks />
      <main className="container">
        <section className={styles.sectionGrid}>
          {cards.map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </section>
      </main>
    </Layout>
  );
}
