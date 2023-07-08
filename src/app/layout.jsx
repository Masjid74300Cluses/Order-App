import "./globals.scss";
import "react-toastify/dist/ReactToastify.css";

// import { Drawer } from "@mui/material";
import { Flip, ToastContainer } from "react-toastify";

import { CartProvider } from "@/providers/CartProvider";
import Drawer from "@/components/Drawer";
import { DrawerProvider } from "@/providers/DrawerProvider";
import FooterOverlay from "@/components/FooterOverlay";
import Header from "@/components/Header";
import StyledJsx from "@/components/StyledJsx";

export const metadata = {
  title: "Kermesse de l'Aid",
  description:
    "Web App pour faciliter les évenements avec prise de commande à table et QR Code",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <StyledJsx />
      <body>
        <CartProvider>
          <DrawerProvider>
            <Header />
            <div className="container">
              <main>{children}</main>
              <ToastContainer
                autoClose={1200}
                hideProgressBar={true}
                transition={Flip}
              />
              <Drawer />
            </div>
          </DrawerProvider>
        </CartProvider>
      </body>
    </html>
  );
}
