"use client";
import { createContext, useContext, useState, useCallback } from "react";

const DrawerContext = createContext();

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (context === undefined) {
    throw new Error("useDrawer must be used within a DrawerProvider");
  }
  return context;
};

export const DrawerProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);

  const openDrawer = (content) => {
    setContent(content);
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setIsOpen(false);
    setTimeout(() => setContent(null), 300);
  };

  return (
    <DrawerContext.Provider
      value={{ isOpen, openDrawer, closeDrawer, drawerContent: content }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
