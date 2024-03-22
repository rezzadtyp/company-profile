import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="h-screen flex flex-col mx-auto place-content-center">
      <div className="bg-gradient-to-b from-[#131313] from-10% via-transparent via-50% to-[#131313] to-90% h-screen flex flex-col mx-auto place-content-center place-items-center w-screen gap-4">
        <h1 className="text-4xl md:text-7xl font-semibold z-10 text-center">
          Changing the norm.{" "}
          <span className="text-cyan-300">Charging the future.</span>
        </h1>
        <p className="z-10 md:text-lg text-center">
          Creating the next generation of EV charging network experiences — from
          car to kiosk to phone.
        </p>
        <Button className="md:hidden rounded-full w-fit">Request a quote</Button>
      </div>
      <video className="h-screen object-cover w-full absolute -z-10 overflow-hidden opacity-80" autoPlay muted loop>
        <source src="/homepage-hero-desktop.mp4" className="w-full h-screen" />
      </video>
    </main>
  );
}
