"use client";
import { useState, useEffect, useContext } from "react";
import styles from "../ProductsList/ProductsList.module.scss";
import { useCart } from "@/providers/CartProvider";
import { useDrawer } from "@/providers/DrawerProvider";
import formatPrice from "@/utils/formatPrice";
import Image from "next/image";

const CartSummaryRow = ({ product, updateCartTotal }) => {
  const { id, name, sauces, veggies, quantity, price } = product;

  const { cart, removeItem } = useCart();
  const { closeDrawer } = useDrawer();

  const handleRemoveClick = () => {
    removeItem(id);
  };

  return (
    <div className="flex justify-between items-center p-3">
      <div className="flex items-center gap-1">
        <Image
          src={`/images/food-items/${product.name}.png`}
          width={75}
          height={50}
          alt={name}
        />
        <div className="flex flex-col im">
          <span className="text-sm">
            {" "}
            {product.name} {quantity > 1 ? `x ${quantity}` : null}
          </span>
          {sauces?.length ? (
            <span className="text-xs">
              Sauce(s)
              {sauces.map((sauce, i) => {
                const { name } = sauce;
                if (i === sauces.length - 1) {
                  return <span key={name}> {name}</span>;
                }
                return <span key={name}> {name},</span>;
              })}
            </span>
          ) : null}
          {veggies?.length ? (
            <span className="text-xs">
              {veggies.map((veggie, i) => {
                const { name } = veggie;
                if (i === veggies.length - 1) {
                  return <span key={name}> {name}</span>;
                }
                return <span key={name}> {name},</span>;
              })}
            </span>
          ) : null}
        </div>
      </div>

      {quantity ? (
        <div className="text-lg flex gap-2">
          <span>{formatPrice(price * quantity)}</span>
          <button onClick={handleRemoveClick}>🗑️</button>
        </div>
      ) : null}
    </div>
  );
};
export default CartSummaryRow;
