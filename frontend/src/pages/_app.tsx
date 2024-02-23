import { FooterPart } from "@/components/FooterPart";
import { HeaderPart } from "@/components/HeaderPart";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <title>Pinecone Food Delivery</title>
      <HeaderPart />
      <Component {...pageProps} />
      <FooterPart />
    </div>
  )
}
