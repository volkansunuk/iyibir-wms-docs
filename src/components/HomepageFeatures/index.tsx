import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  emoji: string;
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    emoji: '🚀',
    title: 'Hızlı Kurulum',
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
    description: (
      <>
        Yapay zeka asistanını nasıl kullanacağınızı, hangi soruları sorabileceğinizi
        ve MCP protokolünü öğrenin.
      </>
    ),
  },
];

function Feature({emoji, title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center" style={{fontSize: '4rem', lineHeight: 1, marginBottom: '1rem'}}>
        {emoji}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
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
