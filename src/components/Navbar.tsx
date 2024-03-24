import Link from "next/link";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed z-50 w-screen bg-[#131313] bg-opacity-40 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1440px] place-items-center justify-between px-4 py-1.5 md:px-8 md:py-4">
        <div>
          <h1 className="cursor-pointer text-2xl font-semibold text-cyan-300">
            <Link href={"/"}>CROT</Link>
          </h1>
        </div>
        <div className="hidden gap-8 md:flex">
          <Button variant="link" asChild>
            <Link href={"/about"}>About Us</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href={"/products"}>Products</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href={"/teams"}>Our Teams</Link>
          </Button>
        </div>
        <div>
          <Button className="hidden rounded-full md:block">
            Request a quote
          </Button>
        </div>
        <div className="block md:hidden">
          <Button variant="ghost">
            <Menu />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
