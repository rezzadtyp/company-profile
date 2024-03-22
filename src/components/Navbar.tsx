import Link from "next/link";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed w-screen z-50 backdrop-blur-md bg-[#131313] bg-opacity-40">
      <div className="flex max-w-[1440px] w-full place-items-center justify-between px-4 md:px-8 py-4 mx-auto">
        <div>
          <h1 className="text-2xl font-semibold text-cyan-300 cursor-pointer">CROT</h1>
        </div>
        <div className="gap-8 hidden md:flex">
          <Button variant="link">
            <Link href={"/"}>About Us</Link>
          </Button>
          <Button variant="link">
            <Link href={"/"}>Products</Link>
          </Button>
          <Button variant="link">
            <Link href={"/"}>Our Teams</Link>
          </Button>
        </div>
        <div>
          <Button className="rounded-full hidden md:block">
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
