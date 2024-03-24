"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const teams = [
  {
    title: "Founder",
    description:
      "As the visionary founder of CROT, our founder brings extensive experience in EV Charging to the table. With a keen eye for innovation and a commitment to sustainability, the founder spearheads strategic initiatives and guides the team towards shared goals.",
  },
  {
    title: "Co-Founder",
    description:
      "Serving as the co-founder of CROT, our co-founder complements the founder's vision with expertise in EV Charging. Together, they form a dynamic leadership team dedicated to driving innovation and shaping the future of sustainable transportation.",
  },
  {
    title: "Software Engineer",
    description:
      "Our software engineering team is dedicated to developing and maintaining the digital infrastructure that powers our platform. With a focus on creating a seamless and user-friendly experience for EV drivers, our software engineers play a crucial role in advancing our mission to make EV charging accessible to all.",
  },
];

const Teams = () => {
  const URL = "https://randomuser.me/api/?inc=name,picture&results=3&nat=gb";
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
        className="flex flex-col rounded-[20px] bg-black px-6 py-4 gap-2"
      >
        <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full mb-6">
          <Image
            src={user.picture.large}
            alt=""
            fill
            objectFit="cover"
            className="absolute"
          />
        </div>
        <h1 className="text-xl">
          {user.name.first} {user.name.last}
        </h1>
        <p>{teamMember.title}</p>
        <p className="text-sm">{teamMember.description}</p>
      </div>
    );
  });

  return <>{elements}</>;
};

export default Teams;
