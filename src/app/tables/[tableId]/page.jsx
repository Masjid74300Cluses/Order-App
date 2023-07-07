import FooterOverlay from "@/components/FooterOverlay";
import Input from "@/components/Input/index"
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
      <Input />
      <ProductsList
        products={products}
        tableId={params.tableId}
      />
      <FooterOverlay tableId={params.tableId} />
    </div>
  );
};

export default Page;
