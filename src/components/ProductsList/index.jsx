"use client";
import ProductCard from "../ProductCard";
import { useCart } from "@/providers/CartProvider";
import styles from "./ProductsList.module.scss";

const ProductsList = ({ products = [], sauces = [], tableId }) => {
  const { addItem } = useCart();

  const handleOnAdd = (product) => () => {
    addItem(product);
  };

  return (
    <div>
      <h1>Table {tableId}</h1>

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
    </div>
  );
};

export default ProductsList;
