import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header
      className={clsx('hero', styles.heroBanner)}
      style={{ background: 'linear-gradient(160deg, #0d0d16 0%, #13131f 55%, #1a1430 100%)' }}
    >
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>📚 Kapsamlı Kullanıcı Kılavuzu</div>
          <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
            iyibir WMS Dokümantasyon
          </Heading>
          <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
            Kurulum, operasyon ve AI agent kullanım kılavuzları.<br />
            Logo Tiger entegrasyonundan barkod taramaya tüm detaylar burada.
          </p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/giris">
              Başlangıç Kılavuzu →
            </Link>
            <Link
              className="button button--outline button--secondary button--lg"
              to="/docs/operasyonlar"
            >
              Operasyonlar
            </Link>
          </div>
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <div className={styles.statValue}>18+</div>
              <div className={styles.statLabel}>Operasyon Tipi</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>6</div>
              <div className={styles.statLabel}>AI Yeteneği</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>2</div>
              <div className={styles.statLabel}>Platform</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>TR/EN</div>
              <div className={styles.statLabel}>Dil Desteği</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="iyibir WMS Dokümantasyon"
      description="iyibir WMS kurulum, operasyon ve AI agent kullanım kılavuzu.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
