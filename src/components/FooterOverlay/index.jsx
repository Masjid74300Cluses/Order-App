"use client";

import cn from "classnames";
import styles from "./FooterOverlay.module.scss";
import { useCart } from "@/providers/CartProvider";
import { useState } from "react";

const FooterOverlay = ({ expanded }) => {
  const [internExpanded, setInternExpanded] = useState(expanded);

  const classes = {
    footerOverlay: cn(styles["footer-overlay"], {
      [styles["expanded"]]: internExpanded,
    }),
    panier: cn(styles["panier"], {
      [styles["expanded"]]: internExpanded,
    })
  };
  const { cart, getTotalPrice } = useCart();

  return (
    <div className={classes.footerOverlay}>
      <div className={classes.panier}>
        <div>
          <p>Panier</p>
          <ul>
            <li> {cart?.length} articles</li>
            <li>{getTotalPrice()} euros</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterOverlay;
