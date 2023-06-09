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
    setCart((prev) => [...prev, item]);
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("order-app-cart");
  };

  const getTotalPrice = () => {
    return cart?.reduce((acc, item) => acc + item.price, 0) || 0;
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};
