"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { toast } from "react-toastify";

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
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Try to load the cart from localStorage after the component mounts
    const storedCart =
      typeof window !== "undefined"
        ? JSON.parse(localStorage?.getItem("order-app-cart"))
        : [];

    setCart(storedCart);
  }, []);

  useEffect(() => {
    // Save the cart to localStorage whenever it changes
    if (!cart) return;
    localStorage.setItem("order-app-cart", JSON.stringify(cart));
  }, [cart]);

  const addItem = (item) => {
    try {
      setCart((prev) => {
        const itemHasVariants = item.sauces?.length || item.veggies?.length;
        if (itemHasVariants) {
          return [
            ...prev,
            {
              ...item,
              id: generateUniqueId(),
              productId: item.id,
              quantity: 1,
            },
          ];
        }

        const itemAlreadyInCart = prev?.find((i) => i.id === item.id);

        if (itemAlreadyInCart) {
          return prev.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          );
        }

        return [...prev, { ...item, quantity: 1 }];
      });

      toast.info(`${item.name} ajouté(e) au panier`, {
        position: "top-right",
        closeOnClick: true,
        theme: "light",
        icon: "🔥",
      });
    } catch (error) {
      toast.error("Erreur durant l'ajout au panier", {
        position: "top-right",
        closeOnClick: true,
        theme: "light",
        icon: "❌",
      });
    }
  };

  const removeItem = (itemId) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const itemIndex = updatedCart.findIndex(
        (cartItem) => cartItem.id === itemId
      );
      if (itemIndex !== -1) {
        const item = updatedCart[itemIndex];
        if (item.quantity === 1) {
          updatedCart.splice(itemIndex, 1);
        } else {
          item.quantity--;
        }
      }
      return updatedCart;
    });
  };

  const incrementItemQuantity = (itemId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((cartItem) => {
        if (cartItem.id === itemId) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("order-app-cart");
  };

  const getTotalPrice = () => {
    let totalPrice = 0;

    cart.forEach(({ price, quantity, name }) => {
      totalPrice += price * (quantity || 1);
    });
    return totalPrice;
  };

  const updateCart = (newCart) => {
    setCart((prevCart) => [...newCart]);
  };

  const getStandsWithProducts = () => {
    const standsMap = cart?.reduce((map, item) => {
      const { id, name, stand, price, available, sauces, veggies, quantity } =
        item;
      if (!map.has(stand.id)) {
        map.set(stand.id, {
          id: stand.id,
          name: stand.name,
          products: [],
        });
      }
      const standData = map.get(stand.id);
      standData.products.push({
        id,
        name,
        price,
        available,
        sauces,
        veggies,
        quantity,
      });
      return map;
    }, new Map());

    return Array.from(standsMap.values());
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        getTotalPrice,
        updateCart,
        getStandsWithProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

function generateUniqueId() {
  const timestamp = Date.now().toString(36);
  const randomNum = Math.random().toString(36).substr(2, 5);
  const uniqueId = `${timestamp}-${randomNum}`;
  return uniqueId;
}
