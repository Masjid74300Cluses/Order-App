"use client";

import styles from "./Header.module.scss";
import { useCart } from "@/providers/CartProvider";

const Header = () => {
  const classes = {
    header: styles.header,
    headerContent: styles["header__content"],
    title: styles["header__title"],
  };

  const { cart, getTotalPrice } = useCart();

  return (
    <div className={classes.header}>
      <div className={classes.headerContent}>
        <h1 className={classes.title}>Kermesse de la fête de l'Aid</h1>
        <div>
          Panier
          <div>
            <div> {cart?.length} articles</div>
            <div>{getTotalPrice()} euros</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
