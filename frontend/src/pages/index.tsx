import { HomeFirstPage } from "@/components/HomePage/HomeFirstPage";
import { HomeMainPage } from "@/components/HomePage/HomeMainPage";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <HomeFirstPage />
      <HomeMainPage />
    </div>

  );
}
