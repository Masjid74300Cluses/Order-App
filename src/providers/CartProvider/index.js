"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error(
      "usage of CartContext in a component without a CartProvider in the tree"
    );
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const storedCart =
    typeof window !== "undefined"
      ? JSON.parse(localStorage?.getItem("order-app-cart"))
      : [];

  const [cart, setCart] = useState(storedCart);

  useEffect(() => {
    // Save the cart to localStorage whenever it changes
    if (!cart) return;
    localStorage.setItem("order-app-cart", JSON.stringify(cart));
  }, [cart]);

  const addItem = (item) => {
    if (cart && cart.length > 0) {
      const indexProduct = cart.findIndex((p) => p.id === item.id);
      if (indexProduct === -1){
        item.quantity = 1
        setCart((prev) => !prev ? [item] : [...prev, item]);
      } else
      {
        const product = cart[indexProduct];
        product.quantity = !product.quantity ? 1 : (product.quantity + 1)
        setCart((prev) => {
          prev[indexProduct] =  {...product};
          return prev
        });
      }
    } else {
      item.quantity = 1
      setCart( [item]);
    }

  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("order-app-cart");
  };

  const getTotalPrice = () => {
    return cart?.reduce((acc, item) => acc + (item.price / 100), 0) || 0;
  };

  const countQuantity = (item) => {
    return cart?.reduce( (acc, item) => (acc[item.id] = (acc[item.id] || 0)+1, acc), {} )
  }
  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, getTotalPrice, countQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
