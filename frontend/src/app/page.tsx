import Image from "next/image";
import { PineconeLogo } from "./components/Icons/PineConeLogo";
import { SearchIcon } from "./components/Icons/SearchIcon";
import { BasketIcon } from "./components/Icons/BasketIcon";
import { LogInIcon } from "./components/Icons/LogInIcon";
import { HeaderPart } from "./components/Pages/HeaderPart";
import { FooterPart } from "./components/Pages/FooterPart";

export default function Home() {
  return (
    <div>
      <HeaderPart />
      <FooterPart />
    </div>
  );
}
