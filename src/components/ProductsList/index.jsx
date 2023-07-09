"use client";

import { useCart } from "@/providers/CartProvider";
import { useDrawer } from "@/providers/DrawerProvider";
import ProductCard from "../ProductCard";
import VariantForm from "@/components/VariantForm";

import styles from "./ProductsList.module.scss";

const ProductsList = ({ products = [], className }) => {
  const { addItem } = useCart();
  const { openDrawer } = useDrawer();

  const handleOnAdd = (product) => () => {
    const productHasVariants =
      product.sauces?.length > 0 || product.veggies?.length > 0;

    if (!productHasVariants) {
      addItem(product);
      return;
    }

    openDrawer(<VariantForm product={product} />);
  };

  return (
    <ul className={`${styles["products-list"]} ${className}`}>
      {products?.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} onAdd={handleOnAdd(product)} />
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
