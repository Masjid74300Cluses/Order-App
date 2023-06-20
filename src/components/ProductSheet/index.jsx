"use client";

import { useEffect, useState } from "react";

import Button from "../Button";
import Image from "next/image";
import { PRODUCT_SHEET } from "./constants";
import styles from "./productSheet.module.scss"
import { useCart } from "@/providers/CartProvider";

const ProductSheet = ({ product, sauces }) => {
  const { addItem } = useCart();
  const [selectedSauces, setSelectedSauces] = useState([]);
  const [withoutSauce, setWithoutSauce] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (withoutSauce) {
      setDisabled(false);
    } else {
      if (selectedSauces.length > 0) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }
  }, [selectedSauces, withoutSauce]);

  const handleOnChange = (event) => {
    const sauceId = parseInt(event.target.value);
    if (event.target.checked) {
      setSelectedSauces([...selectedSauces, sauceId]);
      setWithoutSauce(false);
    } else {
      setSelectedSauces(selectedSauces.filter((item) => item !== sauceId));
    }
  };

  const handleWithoutSauceChange = (event) => {
    setWithoutSauce(event.target.checked);
    setSelectedSauces([]);
  };

  const handleOnClick = () => {
    const selectedProduct = {
      ...product,
      sauces: selectedSauces,
    };

    try {
      addItem(selectedProduct);
    } catch (error) {
      console.error(error);
    }

    setSelectedSauces([]);
    setWithoutSauce(false);
  };

  return (

    <div className={styles["product-sheet"]}>
      <Image src={`/images/${product.name}.png`} alt="Picture of the product" width={200}
        height={200} />
      <article className={styles.details}>

        <h1 className={styles["product-title"]}>{product?.name}</h1>
        <p>{product?.price / 100} €</p>
      </article>

      {sauces?.map((sauce) => (
        <div key={sauce.id}>
          <input
            type="checkbox"
            id={sauce.id}
            name={sauce.name}
            value={sauce.id}
            checked={selectedSauces.includes(sauce.id)}
            disabled={
              selectedSauces.length >= PRODUCT_SHEET.MAX_SAUCES &&
              !selectedSauces.includes(sauce.id)
            }
            onChange={handleOnChange}
          />
          <label htmlFor={sauce.id}>{sauce.name}</label>
        </div>
      ))}
      <div>
        <input
          type="checkbox"
          id="withoutSauce"
          name="withoutSauce"
          value="withoutSauce"
          checked={withoutSauce}
          onChange={handleWithoutSauceChange}
        />
        <label htmlFor="withoutSauce">Sans sauce</label>
      </div>
      <p className={styles.description}>{product?.description}</p>

      <Button onClick={handleOnClick} disabled={disabled}>
        Ajouter au panier
      </Button>
    </div>
  );
};

export default ProductSheet;
