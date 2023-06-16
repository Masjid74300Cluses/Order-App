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
        <h1 className={classes.title}>Kermesse de la fête de l Aid</h1>
        <div>
          Panier
          <ul>
            <li> {cart?.length} articles</li>
            <li>{getTotalPrice()} euros</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Header;
