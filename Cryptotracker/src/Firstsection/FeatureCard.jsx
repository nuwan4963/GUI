import React from 'react';
import styles from './FirstSection.module.css';

export const FeatureCard = ({ iconSrc, title, description }) => {
  return (
    <div>
      <div className={styles.featureItem}>
        <img 
          loading="lazy" 
          src={iconSrc} 
          className={styles.featureIcon}
        />
        <div className={styles.featureTitle}>{title}</div>

        
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};