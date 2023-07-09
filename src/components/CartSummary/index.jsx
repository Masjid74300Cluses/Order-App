"use client";
import React, { useState, useEffect } from "react";
import styles from "../ProductsList/ProductsList.module.scss";
import Image from "next/image";
import "./panier.scss";
import formatPrice from "@/utils/formatPrice";

import Button from "@/components/Button";
import CartSummaryRow from "@/components/CartSummaryRow";
import Link from "next/link";
import { useCart } from "@/providers/CartProvider";
import { useDrawer } from "@/providers/DrawerProvider";
const CartSummary = ({ tableId }) => {
  const { cart, getTotalPrice, clearCart, getStandsWithProducts } = useCart();

  const { closeDrawer } = useDrawer();

  const handleOnClear = () => {
    clearCart();
    closeDrawer();
  };

  return (
    <div className="flex flex-col">
      {cart?.length ? (
        <>
          <h4>Panier</h4>
          <ul>
            {getStandsWithProducts().map((stand) => {
              const { id, name, products } = stand;
              return (
                <li key={id}>
                  <h5>Stand {name}</h5>
                  <ul>
                    {products.map((product) => {
                      return (
                        <li key={product.id}>
                          <CartSummaryRow product={product} />
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
          <div>Total: {formatPrice(getTotalPrice())}</div>
          <Button>Régler ma commande</Button>
        </>
      ) : (
        "panierVide"
      )}
    </div>
  );
};

export default CartSummary;
