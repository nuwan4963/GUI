
import React from 'react';
import styles from './FirstSection.module.css';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    iconSrc: "folder.png",
    title: "300+ Wallets/Exchanges",
    description: "Track everything wherever you keep it: Binance, Trust Wallet, and others."
  },
  {
    iconSrc: "bitcoin.png",
    title: "1,000+ DeFi Protocols",
    description: "Track and manage all your DeFi on 1000+ protocols and 10+ chains."
  },
  {
    iconSrc: "cryptocurrency.png",
    title: "20,000+ Cryptocurrencies",
    description: "Research, track, and manage any coin, set custom crypto alerts and more."
  }
];

export const FirstSection = () => {
  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.mainHeading}>
            <span className={styles.headingLarge}>
              All-In-One Crypto & Bitcoin Tracker to Manage Your 
              <br />
              <br /> 
              Portfolio More Efficiently
              <br />
              <br />
              <br />
            </span>
            <span className={styles.headingSmall}>
              We're the only platform on the market that supports all major
              crypto platforms and DeFi protocols.
            </span>
          </h1>
          
          <div className={styles.featuresContainer}>
            <div className={styles.twoColumnLayout}>
              <div className={styles.featureColumn}>
                <div className={styles.featureList}>
                  {features.map((feature, index) => (
                    <FeatureCard
                      key={index}
                      iconSrc={feature.iconSrc}
                      title={feature.title}
                      description={feature.description}
                    />
                  ))}
                </div>
              </div>
              
              <div className={styles.imageColumn}>
                <img
                  loading="lazy"
                  src="bigbinance.jpeg"
                  className={styles.heroImage}
                  alt="Crypto tracking platform interface visualization"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};