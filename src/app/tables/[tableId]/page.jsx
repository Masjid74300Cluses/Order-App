import { getProducts } from "@/utils/products";
import ProductsList from "@/components/ProductsList";

const getData = async () => {
  const products = await getProducts();

  return { products };
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
