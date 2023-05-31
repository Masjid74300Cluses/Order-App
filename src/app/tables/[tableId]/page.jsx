import { db } from "@vercel/postgres";
import { getProducts } from "@/utils/products";
import { getSauces } from "@/utils/sauces";
import ProductsList from "@/components/ProductsList";

const getData = async () => {
  const productsPromise = getProducts();
  const saucesPromise = getSauces();

  const [products, sauces] = await Promise.all([
    productsPromise,
    saucesPromise,
  ]);

  return { products, sauces };
};

const Page = async ({ params }) => {
  const { products, sauces } = await getData();

  return (
    <ProductsList
      products={products}
      sauces={sauces}
      tableId={params.tableId}
    />
  );
};

export default Page;
