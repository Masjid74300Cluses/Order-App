"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product, onAdd, link }) => {
  const handleOnClick = () => {
    onAdd();
  };

  return (
    <div className={styles["product-card"]}>
      <Image
        src="/images/merguez.png"
        alt="Picture of the product"
        width={200}
        height={200}
        className={styles.image}
      />
      <div className={styles.title}>
        <h2>{product.name}</h2>
      </div>
      <div className={styles.price}>
        <p>{product.price} €</p>
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
