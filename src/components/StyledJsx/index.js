"use client";
import { Montserrat, Roboto } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

const StyledJsx = () => (
  <style jsx global>
    {`
      :root {
        --font-heading: ${montserrat.style.fontFamily};
        --font-display: ${roboto.style.fontFamily};
      }
    `}
  </style>
);

export default StyledJsx;
