import CartSummary from "@/components/CartSummary";

const CartPage = ({ params: { tableId } }) => {
  return <CartSummary tableId={tableId} />;
};

export default CartPage;
