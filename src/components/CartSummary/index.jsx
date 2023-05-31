"use client";
import Link from "next/link";
import { useCart } from "@/providers/CartProvider";
import Button from "@/components/Button";

const CartSummary = ({ tableId }) => {
  const { cart, getTotalPrice, clearCart } = useCart();

  const handleOnClear = () => {
    clearCart();
  };

  return (
    <div>
      {cart.length ? (
        <div>
          <h1>Article(s) pour la table {tableId}</h1>
          <div> {cart?.length} articles</div>
          <div>{getTotalPrice()} euros</div>
          <Button onClick={handleOnClear}>Vider mon panier</Button>
          <Button>Payer ma commande</Button>
        </div>
      ) : (
        <div>
          <h1>Panier vide</h1>
          <Link href={`/tables/${tableId}`}>
            <Button>Retour à la carte</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartSummary;
