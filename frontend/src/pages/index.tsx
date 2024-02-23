import Image from "next/image";
import { Inter } from "next/font/google";
import { HomeFirstPage } from "@/components/HomePage/HomeFirstPage";
import { HomeMainPage } from "@/components/HomePage/HomeMainPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <HomeFirstPage />
      <HomeMainPage />
    </div>

  );
}
