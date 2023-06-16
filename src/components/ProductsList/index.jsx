"use client";

import ProductCard from "../ProductCard";
import styles from "./ProductsList.module.scss";
import { useCart } from "@/providers/CartProvider";

const ProductsList = ({ products = [], tableId }) => {
  const { addItem } = useCart();

  const handleOnAdd = (product) => () => {
    addItem(product);
  };

  return (
    <main>
      <h1 className={styles.table}>Table {tableId}</h1>

      <ul className={styles["products-list"]}>
        {products?.map((product) => (
          <li key={product.id}>
            <ProductCard
              product={product}
              link={`/tables/${tableId}/produits/${product.id}`}
              onAdd={handleOnAdd(product)}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ProductsList;
