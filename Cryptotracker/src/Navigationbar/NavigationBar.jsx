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
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3463582b07577d9ccb9e08abc00370585b4a903893e6b8691718c07affc9549?placeholderIfAbsent=true&apiKey=2d43d23fd33b4e75bb8441a70def3ac2"
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
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/728315a4dee7886052f73849805a080167688f2df94a767b1b67861977e91d84?placeholderIfAbsent=true&apiKey=2d43d23fd33b4e75bb8441a70def3ac2"
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
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8078b41ec0fe3376c595ddb828f65d73a14699d5cbf96954433302b524a7c6fc?placeholderIfAbsent=true&apiKey=2d43d23fd33b4e75bb8441a70def3ac2"
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
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3edcc1dea602806a9ebfd86c7eae0bb6d20704d9aca63e85972a5e2c99eb5d19?placeholderIfAbsent=true&apiKey=2d43d23fd33b4e75bb8441a70def3ac2"
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