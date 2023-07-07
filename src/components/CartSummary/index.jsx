"use client";
import React, {useState, useEffect} from "react";
import styles from "../ProductsList/ProductsList.module.scss";
import Image from "next/image";
import "./panier.scss"

import Button from "@/components/Button";
import CartSummaryRow from "@/components/CartSummaryRow";
import Link from "next/link";
import { useCart } from "@/providers/CartProvider";
const CartSummary = ({ tableId }) => {
  const { cart, getTotalPrice, clearCart, addItem, removeItem, countQuantity, updateCart } = useCart();
  const handleOnClear = () => {
    clearCart();
  };
  const donation = {id: 1510, name: 'Don pour l\'association', price: 100, quantity: 1};
  addItem(donation);
  const [cartTotal, setCartTotal] = useState(getTotalPrice());

  // Fonction pour mettre à jour le total du panier
  const updateCartTotal = (newTotal) => {
    updateCart(cart);
    setCartTotal(getTotalPrice());
  };

  return (
    <div>
      {cart?.length ? (
        <div>
          <div className="flex w-full items-center justify-between">
            <div>
              <h1 className="text-sm mb-4 ">Article(s) pour la table {tableId}</h1>
            </div>
            <div>
              <Button onClick={handleOnClear}>Vider mon panier</Button>
            </div>
          </div>
          <ul className="mt-2 mb-4">
            {cart?.map((product) => (
              <li key={product.id}
                  className="py-5 divide-y-8 divide-grey-800">
                <CartSummaryRow
                    updateCartTotal={updateCartTotal}
                    key={product.id}
                    product={product}></CartSummaryRow>
              </li>
            ))}
          </ul>
          {/*<div> {cart?.length} articles</div>*/
          <div className="w-full flex items-center text-center justify-between">
            <div className="font-semibold">
              <h2>Total</h2>
            </div>
           <div>
             {`${(cartTotal).toFixed(2)}€`}
           </div>
          </div>
          }
          <div className="mt-3 mb-20 flex w-full justify-center">
            <Link href={`/tables/${tableId}/checkout`}>
              <Button>
                Terminer la commande
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <h1>Panier vide</h1>
          <p>Veuillez choisir à manger ou boire</p>
          <Link href={`/tables/${tableId}`}>
            <Button>Retour à la carte</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartSummary;
