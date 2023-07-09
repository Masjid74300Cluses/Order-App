import FooterOverlay from "@/components/FooterOverlay";
import StandContent from "@/components/StandContent";
import { getStandsList } from "@/utils/products";
import Drawer from "@/components/Drawer";
import Header from "@/components/Header";

import { DrawerProvider } from "@/providers/DrawerProvider";
import styles from "./TablePage.module.scss";

const getData = async () => {
  const stands = await getStandsList();

  return { stands };
};

const Page = async ({ params }) => {
  const { stands } = await getData();

  return (
    <DrawerProvider tableId={params.tableId}>
      <Header />
      <main>
        <h1 className={styles.title}>Table {params.tableId}</h1>
        <div className={styles["stands-list"]}>
          {stands.map((stand) => (
            <StandContent stand={stand} key={stand.id}></StandContent>
          ))}
        </div>
      </main>
      <Drawer />
    </DrawerProvider>
  );
};

export default Page;
