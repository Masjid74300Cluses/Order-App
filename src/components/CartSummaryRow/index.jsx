"use client"
import {useState, useEffect, useContext} from "react"
import styles from "../ProductsList/ProductsList.module.scss";
import { useCart } from "@/providers/CartProvider";
import Image from "next/image";

const CartSummaryRow = ({product, updateCartTotal}) => {
    const { cart, getTotalPrice, clearCart, addItem, removeItem, countQuantity, updateCart } = useCart();

    const [quantity, setQuantity] = useState(product.quantity);
    const handleOnAdd = (product) => {
        setQuantity((quantity + 1))
        addItem(product)
        const caTotal = cart.reduce((acc, item) => acc + ((item.price / 100) * item.quantity), 0);
        updateCartTotal(
            caTotal
        );
    };

    return (
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
                            {quantity}
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
    )
}
export default CartSummaryRow;
