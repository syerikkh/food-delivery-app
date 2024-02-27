import Image from "next/image";
import { Inter } from "next/font/google";
import { HomeFirstPage } from "@/components/HomePage/HomeFirstPage";
import { HomeMainPage } from "@/components/HomePage/HomeMainPage";
import { MenuPage } from "@/components/MenuPage/MenuPage";
import { LogInPage } from "@/components/Login/LogInPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      {/* <HomeFirstPage />
      <HomeMainPage /> */}
      {/* <MenuPage /> */}
      <LogInPage />
    </div>

  );
}
