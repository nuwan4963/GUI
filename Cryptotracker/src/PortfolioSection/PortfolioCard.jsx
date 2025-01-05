import React from 'react';
import styles from './PortfolioCard.module.css';

export function PortfolioCard({ imageUrl, imageAlt }) {
  return (
    <div className={styles.card}>
      <img
        loading="lazy"
        src={imageUrl}
        alt={imageAlt}
        className={styles.cardImage}
      />
      <div className={styles.conn}>
          <p className={styles.connect}>connect</p>
          <img className={styles.arrow} src="right-arrow.png"></img>
      </div>      
        
     
    </div>
  );
}