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
const CartSummary = () => {
  const { cart, getTotalPrice, clearCart, getStandsWithProducts } = useCart();

  const { closeDrawer, tableId } = useDrawer();

  const handleOnClear = () => {
    clearCart();
    closeDrawer();
  };

  return (
    <div className="flex flex-col px-3 pt-6 pb-8">
      {cart?.length ? (
        <>
          <h4 className="text-lg font-bold">Votre Panier</h4>
          <ul>
            {getStandsWithProducts().map((stand) => {
              const { id, name, products } = stand;
              return (
                <li key={id} className="mt-5 border-b-2">
                  <h5 className="bg-green-200 pl-2 rounded">Stand {name}</h5>
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
          <div className="text-right">
            Total: {formatPrice(getTotalPrice())}
          </div>
          <Link href={`/tables/${tableId}/checkout`}>
            <Button className="w-full mt-4">Régler ma commande</Button>
          </Link>
        </>
      ) : (
        <div>
          <h4 className="text-center">Panier Vide</h4>
        </div>
      )}
    </div>
  );
};

export default CartSummary;
