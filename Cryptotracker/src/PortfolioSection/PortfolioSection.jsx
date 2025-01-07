import React from 'react';
import  {PortfolioCard } from './PortfolioCard';
import styles from './PortfolioSection.module.css';

export function PortfolioSection() {
  const portfolioCards = [
    { imageUrl: "binance.png" },
    { imageUrl: "metamask.png" },
    { imageUrl: "coinbase.png" },
    { imageUrl: "connect.svg" }
  ];

  return (
    <div className={styles.container}>
      
      <div className={styles.mainSection}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Manage All Your Wallets & Exchanges
            <br />
            <br />
            <br /> From One Place
          </h1>
          <h2 className={styles.subtitle}>
            Connect your entire portfolio to track, buy, swap, and stake your assets.
          </h2>
          <div className={styles.cardGrid}>
            <div className={styles.cardRow}>
              {portfolioCards.map((card, index) => (
                <div key={index} className={styles.cardColumn}>
                  <PortfolioCard
                    imageUrl={card.imageUrl}
                    imageAlt={card.imageAlt}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}