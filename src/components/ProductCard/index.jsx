"use client";

import Button from "../Button";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product, onAdd, link }) => {

  const handleOnClick = () => {
    onAdd();
  };

  return (
    <div className={styles["product-card"]}>
      <Image id="product"
        src={`/images/${product.name}.png`}
        alt="Picture of the product"
        width={200}
        height={200}
        className={styles.image}
      />
      <div className={styles.description}>

        <div className={styles.title}>
          <h2>{product.name}</h2>
        </div>
        <div className={styles.price}>
          <p>{product.price / 100} €</p>
        </div>
      </div>

      <div>
        {link ? (
          <Link href={link}>
            <Button>Voir le produit</Button>
          </Link>
        ) : (
          <Button onClick={handleOnClick}>Add to Cart</Button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
