"use client";

import Link from "next/link";
import cn from "classnames";
import styles from "./FooterOverlay.module.scss";
import { useCart } from "@/providers/CartProvider";
import { useState } from "react";

const FooterOverlay = ({ expanded, tableId }) => {
  const [internExpanded, setInternExpanded] = useState(expanded);

  console.log("I'm here", tableId);

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

        <Link href="/tables/[tableId]/panier" as={`/tables/${tableId}/panier`}>
          <div>
            <p>Panier table {tableId}</p>
            <ul>
              <li> {cart?.length} articles</li>
              <li>{getTotalPrice()} euros</li>
            </ul>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default FooterOverlay;
