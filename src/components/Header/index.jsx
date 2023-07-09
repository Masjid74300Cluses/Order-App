"use client";

import styles from "./Header.module.scss";
import { useCart } from "@/providers/CartProvider";
import CartButton from "@/components/CartButton";
import { useDrawer } from "@/providers/DrawerProvider";
import CartSummary from "@/components/CartSummary";
import Link from "next/link";

function Header() {
  const classes = {
    header: styles.header,
    headerContent: styles["header__content"],
    title: styles["header__title"],
  };

  return (
    <header className={classes.header}>
      <h1 className={classes.title}>Kermesse de l&apos;Aïd</h1>
      <CartButton />
    </header>
  );
}

export default Header;
