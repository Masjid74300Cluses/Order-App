import { useCart } from "@/providers/CartProvider";
import { useDrawer } from "@/providers/DrawerProvider";
import CartSummary from "@/components/CartSummary";
import styles from "./CartButton.module.scss";

const CartButton = () => {
  const { cart } = useCart();
  const { openDrawer } = useDrawer();

  const handleonClick = () => {
    openDrawer(<CartSummary />);
  };

  return (
    <button onClick={handleonClick} className={styles["cart-button"]}>
      <span>{cart?.length ?? 0}</span>
      <span>🛒</span>
    </button>
  );
};

export default CartButton;
