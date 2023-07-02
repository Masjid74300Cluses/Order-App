"use client";
import React, {useState, useEffect} from "react";
import Link from "next/link";
import { useCart } from "@/providers/CartProvider";
import Button from "@/components/Button";
import styles from "../ProductsList/ProductsList.module.scss";
import Image from "next/image";
const CartSummary = ({ tableId }) => {
  const { cart, getTotalPrice, clearCart, addItem, removeItem, countQuantity } = useCart();
  console.warn('cart', cart);
  const handleOnClear = () => {
    clearCart();
  };
  const [prod, setProd] = React.useState({id: 1599999, name: 'Don pour l\'association', price: 100, quantity: 0});
  const handleOnAdd = (product) => {
    console.warn('product', product);
    addItem(product);
    getTotalPrice()
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
                  <div className="flex w-full items-center justify-between h-20" key={product.id}>
                    <div className="flex items-center">
                      <div
                          className="rounded-md h-full bg-white border-slate-300 shadow-md mx-2">
                        <Image id="product"
                               src={`/images/${product.name}.png`}
                               alt="Picture of the product"
                               width={100}
                               height={100}
                               className={styles.image}
                        />
                      </div>
                      <div className="flex-col">
                        <h5 className="font-bold text-xs sm:text-xl capitalize">{product.name}</h5>
                        <span className="ring-gray-300 italic text-xs sm:text-sm">
                          {!product.description ? '' : product.description.substring(0, 60) + '...' }
                        </span>
                        <div>
                          <span className="text-white">{`${(product.price / 100).toFixed(2)}€`}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mx-2 md:mx-6">
                      <div className="flex flex-col w-24">
                        <div
                            onClick={() => handleOnAdd(product)}
                            className="rounded-full bg-white mb-1 shadow-xl cursor-pointer text-center text-xl">
                          <span>+</span>
                        </div>
                        <div className="text-center">
                          <span className="text-white font-bold">
                            {product.quantity}
                          </span>
                        </div>
                        <div
                            onClick={removeItem}
                            className="rounded-full bg-white mt-1 shadow-xl cursor-pointer text-center text-xl">
                          <span>-</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
            ))}
          </ul>
          <div
              className="py-5 divide-y-8 divide-grey-800">
            <div className="flex w-full items-center justify-between h-20" key={product.id}>
              <div className="flex items-center">
                <div
                    className="rounded-md h-full bg-white border-slate-300 shadow-md mx-2">
                  <Image id="product"
                         src={`/images/${prod.name}.png`}
                         alt="Picture of the product"
                         width={50}
                         height={50}
                         className={styles.image}
                  />
                </div>
                <div className="flex-col">
                  <h5 className="font-bold text-xs sm:text-xl capitalize">{prod.name}</h5>
                  <span className="ring-gray-300 italic text-xs sm:text-sm">
                          {!prod.description ? '' : prod.description.substring(0, 60) + '...' }
                        </span>
                  <div>
                    <span className="text-white">{`${(prod.price / 100).toFixed(2)}€`}</span>
                  </div>
                </div>
              </div>
              <div className="mx-2 md:mx-6">
                <div className="flex flex-col w-24">
                  <div
                      onClick={() => handleOnAdd(prod)}
                      className="rounded-full bg-white mb-1 shadow-xl cursor-pointer text-center text-xl">
                    <span>+</span>
                  </div>
                  <div className="text-center">
                      <span className="text-white font-bold">
                        {prod.quantity}
                      </span>
                  </div>
                  <div
                      onClick={removeItem}
                      className="rounded-full bg-white mt-1 shadow-xl cursor-pointer text-center text-xl">
                    <span>-</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<div> {cart?.length} articles</div>*/
          <div className="w-full flex items-center text-center justify-between">
            <div className="font-semibold">
              <h2>Total</h2>
            </div>
           <div>
             {`${(getTotalPrice()).toFixed(2)}€`}
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
