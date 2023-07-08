import FooterOverlay from "@/components/FooterOverlay";
import ProductsList from "@/components/ProductsList";
import { getStandsList } from "@/utils/products";

const getData = async () => {
  const stands = await getStandsList();

  return { stands };
};

const Page = async ({ params }) => {
  const { stands } = await getData();

  return (
    <div>
      <div className="bg-white w-full ">
        <h1 className="text-green-500 hover:text-black transition-all duration-200 flex justify-center text-3xl font-bold py-2">Table {params.tableId}</h1>
      </div>

      {stands.map((stand) => (
        <div key={stand.id}>
          <div className="bg-white w-full">
            <h2 className="text-2xl bold">{stand.name}</h2>
          </div>
          <ProductsList
            products={stand.productsList}
            tableId={params.tableId}
          />
        </div>
      ))}
    </div>
  );
};

export default Page;
