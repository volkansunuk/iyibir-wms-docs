import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  emoji: string;
  title: string;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    emoji: '🚀',
    title: 'Hızlı Kurulum',
    link: '/docs/kurulum',
    description: (
      <>
        Windows Server veya Linux üzerinde Docker ile dakikalar içinde devreye alın.
        Logo Tiger entegrasyonu adım adım anlatılmıştır.
      </>
    ),
  },
  {
    emoji: '📦',
    title: 'Operasyon Kılavuzları',
    link: '/docs/operasyonlar',
    description: (
      <>
        Mal kabul, sevkiyat, sayım, üretim, fason ve talep operasyonlarının
        tüm adımları ekran görüntüleriyle belgelenmiştir.
      </>
    ),
  },
  {
    emoji: '🤖',
    title: 'AI Agent Kullanımı',
    link: '/docs/ai-agentler',
    description: (
      <>
        Yapay zeka asistanını nasıl kullanacağınızı, hangi soruları sorabileceğinizi
        ve MCP protokolünü öğrenin.
      </>
    ),
  },
];

function Feature({emoji, title, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <a href={link} className={styles.featureCard} style={{display: 'block', textDecoration: 'none', color: 'inherit'}}>
        <div className={styles.featureEmoji}>{emoji}</div>
        <Heading as="h3">{title}</Heading>
        <p style={{color: 'var(--ifm-font-color-secondary)', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: 0}}>
          {description}
        </p>
      </a>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
