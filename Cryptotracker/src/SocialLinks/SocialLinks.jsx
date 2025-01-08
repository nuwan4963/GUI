
import * as React from "react";
import styles from './SocialLinks.module.css';

export default function SocialLinks() {
  return (
    <div className={styles.container}>
      <section className={styles.socialSection}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.heading}>Stay in Touch</h2>
          <div className={styles.linksContainer}>
            <div className={styles.socialGrid}>
              <div className={styles.logoColumn}>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ef52f5979afd52078424f677ae937d6e4b8dd7be2766614692ca35e1fc61b37?placeholderIfAbsent=true&apiKey=2d43d23fd33b4e75bb8441a70def3ac2"
                  className={styles.socialLogo}
                  alt="Social media platform logo"
                />
              </div>
              <div className={styles.mainColumn}>
                <div className={styles.contentArea}>
                  <div className={styles.innerGrid}>
                    <div className={styles.productColumn}>
                      <div className={styles.productContent}>
                        <h3>Explore Our Product</h3>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a5b17ca4f2a8ec32fcbb4f5c638eece77c789b30fc9e63b60e0073c2aa37069?placeholderIfAbsent=true&apiKey=2d43d23fd33b4e75bb8441a70def3ac2"
                          className={styles.productLogo}
                          alt="Product showcase"
                        />
                      </div>
                    </div>
                    <div className={styles.socialColumn}>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/40f4f4d975c82a6533d8713ef8507311ad1dad0d398bd6d213b98259f7d87197?placeholderIfAbsent=true&apiKey=2d43d23fd33b4e75bb8441a70def3ac2"
                        className={styles.socialIcon}
                        alt="Social media icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}