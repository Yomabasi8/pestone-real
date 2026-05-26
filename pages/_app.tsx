import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Alatsi, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const alatsi = Alatsi({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alatsi",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${alatsi.variable} ${playfair.variable} font-sans min-h-screen bg-brand-bg bg-[#E7E5E4]`}>
      <style jsx global>{`
        html,
        body,
        #__next {
          font-family: ${inter.style.fontFamily}, sans-serif !important;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        .font-alatsi {
          font-family: ${alatsi.style.fontFamily}, sans-serif !important;
        }
        .font-playfair {
          font-family: ${playfair.style.fontFamily}, serif !important;
        }
      `}</style>
      <Component {...pageProps} />
    </div>
  );
}

