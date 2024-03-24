import { Button } from "@/components/ui/button";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

export default function Home() {
  return (
    <main className="mx-auto flex flex-col place-content-center">
      <div className="flex h-screen flex-col">
        <div className="mx-auto flex h-screen w-screen flex-col place-content-center place-items-center gap-4 bg-gradient-to-b from-[#131313] from-10% via-transparent via-50% to-[#131313] to-90%">
          <h1 className="z-10 text-center text-4xl font-semibold md:text-7xl">
            Changing the norm.{" "}
            <span className="text-cyan-300">Charging the future.</span>
          </h1>
          <p className="z-10 text-center md:text-lg">
            Creating the next generation of EV charging network experiences —
            from car to kiosk to phone.
          </p>
          <Button className="w-fit rounded-full md:hidden">
            Request a quote
          </Button>
        </div>
        <video
          className="absolute -z-10 h-screen w-full overflow-hidden object-cover opacity-90"
          autoPlay
          muted
          loop
        >
          <source
            src="/homepage-hero-desktop.mp4"
            className="h-screen w-full"
          />
        </video>
      </div>
      <Section1 />
      <Section2 />
    </main>
  );
}
