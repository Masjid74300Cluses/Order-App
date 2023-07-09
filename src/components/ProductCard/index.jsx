"use client";

import Button from "../Button";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product, onAdd, link }) => {
  const handleOnClick = () => {
    onAdd();
  };

  // ** ------- Pour les dimensions de l'image  **
  const aspectRatio = 4 / 3.5;
  const containerWidth = 250;
  const imageWidth = containerWidth;
  const imageHeight = containerWidth / aspectRatio;
  // ** ------- ** //

  return (
    <div className={styles["product-card"]}>
      <div className={styles["image-container"]}>
        <Image
          id="product"
          src={`/images/${product.name}.png`}
          alt="Picture of the product"
          width={imageWidth}
          height={imageHeight}
          className={styles.image}
        />
      </div>
      <div className={styles.footer}>
        <div className={styles.description}>
          <h3>{product.name}</h3>
          <p>{product.price / 100} €</p>
        </div>

        <button className={styles.cta} onClick={onAdd}>
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
