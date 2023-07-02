// import { getSauces } from "@/utils/sauces";
import Button from "@/components/Button";
import Link from "next/link";
import ProductSheet from "@/components/ProductSheet";
import { getProductById } from "@/utils/products";

const getData = async (productId) => {
  const productPromise = getProductById(productId);
  // const saucesPromise = getSauces();

  // const [product, sauces] = await Promise.all([productPromise, saucesPromise]);
  const product = await productPromise;

  return { product };
};

const ProductPage = async ({ params: { tableId, productId } }) => {
  const { product } = await getData(productId);
  return (
    <div>
      <Link href="/tables/[tableId]" as={`/tables/${tableId}`}>
        <Button>⬅️ Table {tableId} - Retour produits</Button>
      </Link>
      <ProductSheet product={product} />
    </div>
  );
};

export default ProductPage;
