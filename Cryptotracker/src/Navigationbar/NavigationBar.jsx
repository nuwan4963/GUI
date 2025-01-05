import * as React from "react";
import styles from './NavigationBar.module.css';

const navLinks = [
  { text: "Crypto Currencies", id: "crypto" },
  { text: "Exchanges", id: "exchanges" },
  { text: "Community", id: "community" },
  { text: "Products", id: "products" }
];

function NavigationBar() {
  return (
    <nav className={styles.navigationContainer}>
      <div className={styles.navigationWrapper}>
        <div className={styles.navigationContent}>
          <div className={styles.mainSection}>
            <div className={styles.navigationItems}>
              <img
                loading="lazy"
                src="productimage.png"
                className={styles.logo}
                alt="Company Logo"
              />
              {navLinks.map(link => (
                <a key={link.id} href={`#${link.id}`} className={styles.navLink}>
                  {link.text}
                </a>
              ))}
              <form className={styles.searchSection} role="search">
                <div className={styles.searchContent}>
                  <div className={styles.iconWrapper}>
                    <div className={styles.iconContainer}>
                      <div className={styles.iconState}>
                        <img
                          loading="lazy"
                          src="three-line.png"
                          className={styles.icon}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <label htmlFor="searchInput" className={styles["visually-hidden"]}>
                    Search
                  </label>
                  <input
                    id="searchInput"
                    type="search"
                    className={styles.searchInput}
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div className={styles.iconWrapper}>
                    <div className={styles.iconContainer}>
                      <div className={styles.iconState}>
                        <img
                          loading="lazy"
                          src="search.png"
                          className={styles.icon}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className={styles.authSection}>
            <div className={styles.authContent}>
              <div className={styles.authButtons}>
                <button className={styles.signInButton}>Sign in</button>
                <button className={styles.registerButton}>Register</button>
              </div>
              <img
                loading="lazy"
                src="account.jpeg"
                className={styles.settingsIcon}
                alt="Settings"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;