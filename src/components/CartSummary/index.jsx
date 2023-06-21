"use client";

import "./panier.scss"

import Button from "@/components/Button";
import Link from "next/link";
import { useCart } from "@/providers/CartProvider";

const CartSummary = ({ tableId }) => {
  const { cart, getTotalPrice, clearCart } = useCart();

  const handleOnClear = () => {
    clearCart();
  };


  return (
    <div className="container-cart">
      {cart.length ? (
        <div className="table-description">
          <h1>Article(s) pour la table {tableId}</h1>
          <div> {cart?.length} articles</div>
          <div>{getTotalPrice()} euros</div>
          <div className="btns">
            <button id="flush-btns" onClick={handleOnClear}>Vider mon panier</button>
            <Button>Payer ma commande</Button>
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
