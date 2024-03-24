import Image from "next/image";
import Milestones from "./components/Milestones";
import Teams from "./components/Teams";
import Culture from "./components/Culture";

const About: React.FC = () => {
  const imgUrl =
    "https://images.unsplash.com/photo-1671782298320-5f4fe4ded064?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <main className="mx-auto flex flex-col place-content-center gap-8">
      <div className="relative h-[600px]">
        <div className="z-10 h-full place-content-center bg-black bg-opacity-40 text-center">
          <h1 className="text-4xl font-semibold md:text-7xl">
            Empowering the
            <span className="text-cyan-300"> EV Revolution</span>
          </h1>
        </div>
        <div className="absolute top-0 -z-10 h-full w-full">
          <Image src={imgUrl} alt="bg-header" objectFit="cover" fill />
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <div className="relative flex h-fit w-full flex-col place-content-center gap-4 overflow-hidden rounded-[40px] bg-black px-8 py-12 text-white md:px-16">
          <p>
            CROT was born out of a shared passion for sustainability and a
            vision for a greener future. Founded in 2018, our journey began with
            a simple yet powerful idea: to revolutionize the way people power
            their vehicles. Since then, we&apos;ve embarked on a mission to make
            electric vehicle (EV) charging as accessible and convenient as
            possible, laying the groundwork for a more sustainable
            transportation ecosystem.
          </p>
        </div>
        <div className="relative flex h-fit w-full flex-col items-center gap-4 overflow-hidden rounded-[40px] bg-black px-8 py-8 text-white md:px-16">
          <h1 className="text-7xl">Milestones</h1>
        </div>
        <div className="relative flex h-fit w-full flex-col items-center gap-4 overflow-hidden rounded-[40px] bg-black px-8 py-12 text-white md:px-16">
          <Milestones />
        </div>

        <div className="relative flex h-fit w-full flex-col items-center gap-4 overflow-hidden rounded-[40px] bg-black px-8 py-8 text-white md:px-16">
          <h1 className="text-7xl">Our Teams</h1>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Teams />
        </div>

        <div className="relative flex h-fit w-full flex-col items-center gap-4 overflow-hidden rounded-[40px] bg-black px-8 py-8 text-white md:px-16">
          <h1 className="text-7xl">Culture</h1>
        </div>
        <div className="relative flex h-fit w-full flex-col items-center gap-4 overflow-hidden rounded-[40px] bg-black px-8 py-12 text-white md:px-16">
          <Culture />
          <p>
            Our culture fosters a collaborative, inclusive environment where
            every voice is heard and valued. Together, we&apos;re building a
            company—and a world—we can be proud of.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
