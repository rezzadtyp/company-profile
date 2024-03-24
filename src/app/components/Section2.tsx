import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Testimonial from "./Testimonial";

const Section2 = () => {
  return (
    <main className="grid max-w-5xl relative w-full mx-auto lg:px-0 px-4 gap-6 mt-6">
      <div className="flex flex-col h-[400px] md:h-[600px] relative rounded-[40px] w-full overflow-x-hidden bg-[#c8dcd4] place-content-center px-8 md:px-16 gap-4 text-black">
        <Badge className="w-fit bg-[#eeeeee]">For business</Badge>
        <h2 className="text-4xl md:text-7xl md:w-2/3 font-bold">
          Scalable solutions that grow with you
        </h2>
        <p className="md:w-1/2 w-full text-sm font-light">
          Our flexible and modular charging solutions are designed to help you
          start and grow your charging offering.
        </p>
      </div>
      <div className="flex flex-col h-[600px] relative rounded-[40px] w-full overflow-x-hidden">
        <div className="w-full h-full flex flex-col gap-4 place-content-center px-8 md:px-16 text-white bg-gradient-to-r from-black from-5% to-transparent z-10 bg-black bg-opacity-20">
          <h2 className="text-4xl md:text-7xl md:w-2/3 font-bold">
            Fit for every location
          </h2>
          <div className="flex flex-col gap-2">
            <p className="md:w-1/2 w-full font-light">
              AC charging: 7.4 kW to 22 kW
            </p>
            <p className="md:w-1/2 w-full font-light">
              DC charging: 90 kW to 400 kW
            </p>
          </div>
          <Button className="w-fit rounded-full px-8 py-6">
            Learn more
          </Button>
        </div>
        <div className="absolute w-full h-full z-0">
          <Image
            src="https://images.unsplash.com/photo-1619913387719-a43ee8859d9c?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fill
            objectFit="cover"
          />
        </div>
      </div>

      <div className="flex flex-col h-[400px] md:h-[600px] relative rounded-[40px] w-full overflow-x-hidden bg-[#68fcac] place-content-center px-8 md:px-16 gap-4 text-black">
        <Badge className="w-fit bg-[#beffdc]">For homes</Badge>
        <h2 className="text-4xl md:text-7xl md:w-2/3 font-bold">
          Bring intelligence to your charging game
        </h2>
        <p className="md:w-1/2 w-full text-sm font-light">
          Optimize your energy usage and save on costs thanks to smart charging
          features that give you full control and transparency.
        </p>
      </div>
      <div className="flex flex-col h-[600px] relative rounded-[40px] w-full overflow-x-hidden">
        <div className="w-full h-full flex flex-col gap-4 place-content-center px-8 md:px-16 text-white bg-gradient-to-r from-black from-5% to-transparent z-10 bg-black bg-opacity-20">
          <h2 className="text-4xl md:text-7xl md:w-2/3 font-bold">
            Plug. Charge. <span className="text-[#68fcac]">Drive.</span>
          </h2>
          <div className="flex flex-col gap-2">
            <p className="md:w-1/2 w-full font-light">
              Versatile charging solutions for private and company cars.
            </p>
            <p className="md:w-1/2 w-full font-light">
              AC charging from 3.7 kW to 22 kW.
            </p>
          </div>
          <Button className="w-fit rounded-full px-8 py-6">
            Learn more
          </Button>
        </div>
        <div className="absolute w-full h-full z-0">
          <Image
            src="https://images.unsplash.com/photo-1600490819528-42405785433a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fill
            objectFit="cover"
          />
        </div>
      </div>
      <div className="flex flex-col h-fit w-full rounded-[40px] bg-black place-content-center px-16 gap-4 text-white">
        <h2 className="py-10 text-3xl md:text-6xl lg:text-8xl text-center">
          Testimonial
        </h2>
      </div>
      <Testimonial />
    </main>
  );
};

export default Section2;
