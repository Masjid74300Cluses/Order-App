import FooterOverlay from "@/components/FooterOverlay";
import ProductsList from "@/components/ProductsList";
import { getProducts } from "@/utils/products";

const getData = async () => {
  const products = await getProducts();

  return { products };
};

const Page = async ({ params }) => {
  const { products } = await getData();

  return (
    <div>
      <ProductsList
        products={products}
        tableId={params.tableId}
      />
      <FooterOverlay tableId={params.tableId} />
    </div>
  );
};

export default Page;
