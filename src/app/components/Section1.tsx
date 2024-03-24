import { Handshake } from "lucide-react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import logo1 from "../../../public/images/Ciputra.svg";
import logo2 from "../../../public/images/GoTo_logo.svg";
import logo3 from "../../../public/images/Lippo_Malls.svg";
import logo4 from "../../../public/images/Logo_BMW_Group_2021.svg";
import logo5 from "../../../public/images/Pertamina_Logo.svg";
import logo6 from "../../../public/images/Tiket.com_(2017).svg";
import logo7 from "../../../public/images/TransMedia.svg";
import phoneborder from "../../../public/images/phone.png";
import abs3d1 from "../../../public/images/1.png";

const Section1 = () => {
  return (
    <main className="grid max-w-5xl relative w-full mx-auto lg:px-0 px-4 gap-6">
      <div className="flex flex-col h-[400px] md:h-[600px] relative rounded-[40px] w-full overflow-hidden bg-teal-300 place-content-center px-8 md:px-16 gap-4 text-black">
        <div className="z-20">
          <h2 className="text-4xl md:text-7xl md:w-2/3 font-bold">
            Welcome to the era of{" "}
            <span className="text-teal-700">mass electric mobility</span>
          </h2>
          <p className="md:w-1/2 w-full text-sm font-light">
            2023 was the year electric mobility entered the mainstream.
            Celebrate this milestone with us.
          </p>
        </div>
        <Image
          src={abs3d1}
          alt="lightning"
          className="absolute -right-[50%] h-fit z-10 rotate-12 object-cover opacity-20"
        />
      </div>
      <div className="flex flex-col-reverse md:flex-row h-fit py-20 md:py-0 md:h-[600px] rounded-[40px] w-full overflow-x-hidden bg-white place-content-center px-8 md:px-16 gap-8 md:gap-4 text-black">
        <div className="flex flex-col gap-4 w-full h-fit md:h-full">
          <div className="md:h-[50%] h-0"></div>
          <div className="h-fit p-4 rounded-full bg-black w-fit">
            <Handshake color="white" />
          </div>
          <h2 className="text-xl md:text-4xl w-4/5 font-bold">
            Trusted by 20.000+ customers
          </h2>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center gap-10">
          <Marquee gradient>
            <Image
              src={logo1}
              alt="logo1"
              width={80}
              height={80}
              className="mx-10"
            />
            <Image
              src={logo2}
              alt="logo2"
              width={80}
              height={80}
              className="mx-10"
            />
            <Image
              src={logo3}
              alt="logo3"
              width={80}
              height={80}
              className="mx-10"
            />
            <Image
              src={logo4}
              alt="logo4"
              width={80}
              height={80}
              className="mx-10"
            />
            <Image
              src={logo5}
              alt="logo5"
              width={80}
              height={80}
              className="mx-10"
            />
            <Image
              src={logo6}
              alt="logo6"
              width={80}
              height={80}
              className="mx-10"
            />
            <Image
              src={logo7}
              alt="logo7"
              width={80}
              height={80}
              className="mx-10"
            />
          </Marquee>
          <Marquee gradient direction="right">
            <Image
              src={logo7}
              alt="logo7"
              width={80}
              height={80}
              className="mx-10"
            />
            <Image
              src={logo6}
              alt="logo6"
              width={80}
              height={80}
              className="mx-10"
            />
            <Image
              src={logo5}
              alt="logo5"
              width={80}
              height={80}
              className="mx-10"
            />
            <Image
              src={logo4}
              alt="logo4"
              width={80}
              height={80}
              className="mx-10"
            />
            <Image
              src={logo3}
              alt="logo3"
              width={80}
              height={80}
              className="mx-10"
            />
            <Image
              src={logo2}
              alt="logo2"
              width={80}
              height={80}
              className="mx-10"
            />
            <Image
              src={logo1}
              alt="logo1"
              width={80}
              height={80}
              className="mx-10"
            />
          </Marquee>
        </div>
      </div>
      {/* SUPER CHARGING */}
      <div className="flex flex-col h-fit w-full rounded-[40px] bg-black place-content-center px-16 gap-4 text-white">
        <h2 className="py-10 text-3xl md:text-6xl lg:text-8xl text-center">
          Super Charging
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="w-full h-fit py-12 bg-gray-300 rounded-[40px] relative place-items-center flex justify-center">
          <Image
            src={phoneborder}
            alt="phone-screen"
            className="w-[70%] object-cover absolute z-20"
          />
          <video
            className="w-[64%] object-cover z-10 rounded-[40px]"
            autoPlay
            loop
            muted
          >
            <source src="/video1.mp4" />
          </video>
        </div>
        <div className="w-full h-fit py-12 bg-gray-300 rounded-[40px] relative place-items-center flex justify-center">
          <Image
            src={phoneborder}
            alt="phone-screen"
            className="w-[70%] object-cover absolute z-20"
          />
          <video
            className="w-[64%] object-cover z-10 rounded-[40px]"
            autoPlay
            loop
            muted
          >
            <source src="/video3.mp4" />
          </video>
        </div>
      </div>
      {/* END OF SUPER CHARGING */}
    </main>
  );
};

export default Section1;
