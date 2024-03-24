"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const teams = [
  {
    title: "CEO",
    description:
      "Responsible for setting the overall direction and strategy of the company, making key decisions, and representing the company to investors and the public.",
  },
  {
    title: "CTO",
    description:
      "Leads the technology team, oversees the development of products or services, and ensures that the company's technological infrastructure supports its goals and objectives.",
  },
  {
    title: "CFO",
    description:
      "Manages the company's finances, including budgeting, financial planning, and financial reporting, and provides strategic guidance on financial matters.",
  },
  {
    title: "COO",
    description:
      "Handles the day-to-day operations of the company, including business processes, supply chain management, and organizational development, to ensure efficiency and effectiveness.",
  },
  {
    title: "Marketing Director",
    description:
      "Leads the marketing team in developing and executing marketing strategies to promote the company's products or services, build brand awareness, and attract customers.",
  },
  {
    title: "Head of Sales",
    description:
      "Oversees the sales team and is responsible for developing sales strategies, building relationships with clients, and achieving sales targets to drive revenue growth.",
  },
  {
    title: "Head of HR",
    description:
      "Manages the human resources function, including recruitment, employee relations, performance management, and training and development, to support the company's staffing needs and organizational culture.",
  },
  {
    title: "Lead Engineer",
    description:
      "Leads the engineering team in designing, developing, and testing products or solutions, ensuring technical excellence and adherence to project timelines and quality standards.",
  },
  {
    title: "Customer Success Manager",
    description:
      "Works closely with customers to understand their needs, address their concerns, and ensure their satisfaction with the company's products or services, ultimately driving customer retention and loyalty.",
  },
];

const Teams: React.FC = () => {
  const imgUrl =
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const URL = "https://randomuser.me/api/?inc=name,picture&results=9&nat=gb";
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    axios.get(URL).then((response) => {
      console.log(response.data.results);
      setUsers(response.data.results);
    });
  }, []);

  const elements = users.map((user, index) => {
    const teamMember = teams[index % teams.length];
    return (
      <div
        key={index}
        className="flex flex-col gap-2 overflow-hidden rounded-[20px] bg-black"
      >
        <div className="relative mx-auto h-[25vh] w-full overflow-hidden">
          <Image
            src={user.picture.large}
            alt="profile"
            fill
            objectFit="cover"
            className="absolute"
          />
        </div>
        <div className="flex flex-col gap-2 px-4 py-4">
          <h1 className="text-2xl font-semibold">
            {user.name.first} {user.name.last}
          </h1>
          <p className="text-lg">{teamMember.title}</p>
          <p className="text-sm">{teamMember.description}</p>
        </div>
      </div>
    );
  });

  return (
    <main className="mx-auto flex flex-col place-content-center gap-8">
      <div className="relative h-[600px]">
        <div className="z-10 h-full place-content-center bg-black bg-opacity-40 text-center">
          <h1 className="mx-auto max-w-7xl text-center text-4xl font-semibold md:text-7xl">
            Meet the Experts Behind Your Seamless Experience
          </h1>
        </div>
        <div className="absolute top-0 -z-10 h-full w-full">
          <Image src={imgUrl} alt="bg-header" objectFit="cover" fill />
        </div>
      </div>
      <div className="mx-auto -mt-20 grid max-w-5xl grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-0">
        {elements}
      </div>
      <div className="relative mx-auto flex h-[300px] w-full max-w-5xl flex-col place-content-center gap-4 overflow-hidden rounded-[40px] bg-black px-8 md:h-[400px] md:px-16">
        <h2 className="text-4xl font-bold md:w-2/3 md:text-7xl">
          Join our Team
        </h2>
        <p className="w-full text-base font-light">
          Are you passionate about innovation and ready to make an impact? Join
          our dynamic team of talented individuals who are dedicated to pushing
          boundaries and shaping the future. We're committed to fostering a
          collaborative environment where creativity thrives, and every voice is
          heard. Whether you're a seasoned professional or just starting your
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
};

export default Teams;
