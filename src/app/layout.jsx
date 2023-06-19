import "./globals.scss";

import { CartProvider } from "@/providers/CartProvider";
import FooterOverlay from "@/components/FooterOverlay";
import Header from "@/components/Header";
import StyledJsx from "@/components/StyledJsx";

export const metadata = {
  title: "Kermesse de la fête de l'Aid",
  description: "Web App pour faciliter les évenements avec prise de commande à table et QR Code",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <StyledJsx />
      <body>
        <CartProvider>
          <Header />
          <div className="container">{children}</div>
          <FooterOverlay />
        </CartProvider>
      </body>
    </html>
  );
}
