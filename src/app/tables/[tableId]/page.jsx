import ProductsList from "@/components/ProductsList";
import { getProducts } from "@/utils/products";

const getData = async () => {
  const products = await getProducts();

  return { products };
};

const Page = async ({ params }) => {
  const { products } = await getData();

  return (
    <ProductsList
      products={products}
      tableId={params.tableId}
    />
  );
};

export default Page;
