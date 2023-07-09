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
    <div className="flex justify-between items-center border-b-2 px-3">
      <div className="flex items-center gap-1">
        <Image
          src={`/images/${product.name}.png`}
          width={75}
          height={50}
          alt={name}
        />
        <div className="flex flex-col im">
          <span className="text-sm"> {product.name}</span>
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
        <div>
          <span>{formatPrice(price * quantity)}</span>
          <button onClick={handleRemoveClick}>🗑️</button>
        </div>
      ) : null}
    </div>
    // <div
    //   className="flex w-full items-center justify-between h-20"
    //   key={product.id}
    // >
    //   <div className="flex items-center">
    //     <div className="rounded-md h-full bg-white border-slate-300 shadow-md mx-2">
    //       <Image
    //         id="product"
    //         src={`/images/${product.name}.png`}
    //         alt="Picture of the product"
    //         width={50}
    //         height={100}
    //         className={styles.image}
    //       />
    //     </div>
    //     <div className="flex-col">
    //       <h5 className="font-bold text-xs sm:text-xl capitalize">
    //         {product.name}
    //       </h5>
    //       <span className="ring-gray-300 italic text-xs sm:text-sm">
    //         {!product.description
    //           ? ""
    //           : product.description.substring(0, 60) + "..."}
    //       </span>
    //       <div>
    //         <span className="text-white">{`${(product.price / 100).toFixed(
    //           2
    //         )}€`}</span>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="mx-2 md:mx-6">
    //     <div className="flex flex-col w-24">
    //       <div
    //         onClick={() => handleOnAdd(product)}
    //         className="rounded-full bg-white mb-1 shadow-xl cursor-pointer text-center text-xl"
    //       >
    //         <span>+</span>
    //       </div>
    //       <div className="text-center">
    //         <span className="text-white font-bold">{product.quantity}</span>
    //       </div>
    //       <div
    //         // onClick={removeItem}
    //         className="rounded-full bg-white mt-1 shadow-xl cursor-pointer text-center text-xl"
    //       >
    //         <span>-</span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
export default CartSummaryRow;
