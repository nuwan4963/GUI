import React from 'react';
import  {PortfolioCard } from './PortfolioCard';
import styles from './PortfolioSection.module.css';

export function PortfolioSection() {
  const portfolioCards = [
    { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/f2d01ff7f455902d61ee08388c52d5cacc3829c03ee1b6c5687cffa1785b8e48?placeholderIfAbsent=true&apiKey=2d43d23fd33b4e75bb8441a70def3ac2", imageAlt: "Portfolio management interface" },
    { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/2e2dda5695eaf833d169db2ec401ec2ef8044df8680e16332a2916ed363938df?placeholderIfAbsent=true&apiKey=2d43d23fd33b4e75bb8441a70def3ac2", imageAlt: "Wallet connection interface" },
    { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/2581f6c3c776b8bc5e6abaaae979b548ae475edfeb5557d50cca25f7c1c26082?placeholderIfAbsent=true&apiKey=2d43d23fd33b4e75bb8441a70def3ac2", imageAlt: "Asset tracking dashboard" },
    { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/932681a2e131be44f41990c0a5e6acd6782e82f6a4fcd8c015a4279ff65f8a48?placeholderIfAbsent=true&apiKey=2d43d23fd33b4e75bb8441a70def3ac2", imageAlt: "Exchange integration panel" }
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