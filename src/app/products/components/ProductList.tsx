import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const productsB = [
  {
    id: 1,
    name: "CROTDi Kantoor",
    image: "/images/evbusinessAC.jpg",
    description: "The next generation of hassle-free business charging",
    spec1: "74 kW / 11 kW / 22 kW",
    spec2: "Workplaces / Retail & hospitality / Commercial parking / Fleets",
  },
  {
    id: 2,
    name: "CROTDi Parkeeran",
    image: "/images/evbusinessAC1.webp",
    description: "Our best-selling charging station for business locations",
    spec1: "74 kW / 11 kW / 22 kW",
    spec2: "Workplaces / Retail & hospitality / Commercial parking / Fleets",
  },
  {
    id: 3,
    name: "CROTDi Lapangaan",
    image: "/images/evbusinessDC.jpg",
    description: "A revenue powerhouse for short-stop locations",
    spec1: "Up to 400 kW",
    spec2: "Fuel retail / CPOs",
  },
];

const productsH = [
  {
    id: 1,
    name: "CROTDi Rooma",
    image: "/images/evhomesAC.webp",
    description: "Home charging that&apos;s fit for the future",
    spec1: "74 kW / 11 kW / 22 kW",
    spec2: "Private residential",
  },
  {
    id: 2,
    name: "CROTDi Qamr",
    image: "/images/evhomesAC1.webp",
    description: "Versatile home charging for private and lease EVs",
    spec1: "74 kW / 11 kW / 22 kW",
    spec2: "Private residential / Company cars",
  },
];

const ProductList = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative flex h-fit w-full flex-col items-center gap-4 overflow-hidden rounded-[40px] bg-black px-8 py-8 text-white md:px-16">
        <h1 className="text-3xl md:text-7xl">For Business</h1>
      </div>
      {productsB.map((e) => {
        return (
          <div key={e.id} className="relative flex flex-col md:flex-row h-full w-full gap-8 rounded-[28px] bg-black p-6">
            <div className="relative h-40 w-40 overflow-hidden rounded-lg">
              <Image
                src={e.image}
                alt="product image"
                fill
                objectFit="cover"
                className="absolute"
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <h2 className="text-2xl font-semibold">{e.name}</h2>
              <h3>{e.description}</h3>
              <hr />
              <p>{e.spec1}</p>
              <p>{e.spec2}</p>
            </div>
            <div className="absolute md:bottom-8 right-8">
              <Button variant="ghost">
                <span>Buy Now</span>
                <span>
                  <ArrowRight className="ml-4 h-4 w-4" />
                </span>
              </Button>
            </div>
          </div>
        );
      })}

      <div className="relative flex h-fit w-full flex-col items-center gap-4 overflow-hidden rounded-[40px] bg-black px-8 py-8 text-white md:px-16">
        <h1 className="text-3xl md:text-7xl">For Homes</h1>
      </div>
      {productsH.map((e) => {
        return (
          <div key={e.id} className="relative flex flex-col md:flex-row h-full w-full gap-8 rounded-[28px] bg-black p-6">
            <div className="relative h-40 w-40 overflow-hidden rounded-lg">
              <Image
                src={e.image}
                alt="product image"
                fill
                objectFit="cover"
                className="absolute"
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <h2 className="text-2xl font-semibold">{e.name}</h2>
              <h3>{e.description}</h3>
              <hr />
              <p>{e.spec1}</p>
              <p>{e.spec2}</p>
            </div>
            <div className="absolute md:bottom-8 right-8">
              <Button variant="ghost">
                <span>Buy Now</span>
                <span>
                  <ArrowRight className="ml-4 h-4 w-4" />
                </span>
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
