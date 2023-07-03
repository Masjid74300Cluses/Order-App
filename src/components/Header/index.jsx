"use client";

import styles from "./Header.module.scss";

function Header() {
  const classes = {
    header: styles.header,
    headerContent: styles["header__content"],
    title: styles["header__title"],
  };



  return (
    <main className={classes.header}>
      <div className={classes.headerContent}>
        <h1 className={classes.title}>
          <p>Kermesse de la fête du Aid</p>
        </h1>
      </div>
    </main>
  );
};

export default Header;
