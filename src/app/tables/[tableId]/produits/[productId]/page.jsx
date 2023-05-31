import ProductSheet from "@/components/ProductSheet";
import { getProductById } from "@/utils/products";
import { getSauces } from "@/utils/sauces";
import Button from "@/components/Button";
import Link from "next/link";

const getData = async (productId) => {
  const productPromise = getProductById(productId);
  const saucesPromise = getSauces();

  const [product, sauces] = await Promise.all([productPromise, saucesPromise]);

  return { product, sauces };
};

const ProductPage = async ({ params: { tableId, productId } }) => {
  const { product, sauces } = await getData(productId);

  return (
    <div>
      <Link href="/tables/[tableId]" as={`/tables/${tableId}`}>
        <Button>⬅️ Table {tableId} - Retour produits</Button>
      </Link>
      <ProductSheet product={product} sauces={sauces} />
    </div>
  );
};

export default ProductPage;
