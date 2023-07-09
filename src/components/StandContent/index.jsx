import ProductsList from "@/components/ProductsList";
import styles from "./StandContent.module.scss";

const StandContent = ({ stand }) => (
  <div>
    <div className={styles["title-container"]}>
      <h2 className={styles.title}>{stand.name}</h2>
    </div>
    <ProductsList
      products={stand.productsList}
      className={styles["products-list"]}
    />
  </div>
);

export default StandContent;
