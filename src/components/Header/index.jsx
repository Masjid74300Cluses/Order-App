"use client";

import styles from "./Header.module.scss";
import { useCart } from "@/providers/CartProvider";

function Header() {
  const classes = {
    header: styles.header,
    headerContent: styles["header__content"],
    title: styles["header__title"],
  };

  const { cart, getTotalPrice } = useCart();

  return (
    <main className={classes.header}>
      <div className={classes.headerContent}>
        <h1 className={classes.title}>
          <p>Kermesse de la fête de l'Aid</p>
        </h1>
      </div>
    </main>
  );
};

export default Header;
