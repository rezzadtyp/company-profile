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
      <div className="relative mx-auto flex h-fit p-8 w-full max-w-5xl flex-col place-content-center gap-4 overflow-hidden rounded-[40px] bg-black px-8 md:h-[400px] md:px-16 mt-8">
        <h2 className="text-4xl font-bold md:w-2/3 md:text-7xl">
          Join our Team
        </h2>
        <p className="w-full text-base font-light">
          Are you passionate about innovation and ready to make an impact? Join
          our dynamic team of talented individuals who are dedicated to pushing
          boundaries and shaping the future. We&apos;re committed to fostering a
          collaborative environment where creativity thrives, and every voice is
          heard. Whether you&apos;re a seasoned professional or just starting your
          career journey, we welcome diversity and value fresh perspectives.
          Explore our current opportunities and embark on a rewarding career
          with us!
        </p>
        <Button className="rounded-full w-fit">
          Join Our Team
        </Button>
      </div>
    </main>
  );
}
