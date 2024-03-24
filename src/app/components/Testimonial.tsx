"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const testimonial = [
  {
    id: 1,
    testimonial:
      "CROT's charging stations have been a lifesaver for me! As an EV enthusiast, having reliable and accessible charging infrastructure is crucial, and CROT delivers on all fronts.",
  },
  {
    id: 2,
    testimonial:
      "I can't imagine owning an electric vehicle without CROT's charging network. It's made my daily commute and long trips hassle-free. Thank you, CROT, for making sustainable transportation a reality!",
  },
  {
    id: 3,
    testimonial:
      "CROT's dedication to sustainability is truly commendable. As a sustainability advocate, I'm thrilled to see companies like CROT leading the charge towards a greener future. Keep up the amazing work!",
  },
  {
    id: 4,
    testimonial:
      "The CROT app has made managing my EV charging sessions incredibly convenient. With just a few taps, I can find nearby charging stations and monitor my charging progress in real-time. It's a game-changer for electric vehicle owners!",
  },
  {
    id: 5,
    testimonial:
      "I've had nothing but positive experiences with CROT's charging stations. They're always well-maintained and easy to use, making my EV ownership journey smooth and stress-free.",
  },
  {
    id: 6,
    testimonial:
      "CROT's commitment to innovation is evident in every aspect of their service. From their cutting-edge charging technology to their user-friendly app, CROT is setting the standard for excellence in the EV charging industry.",
  },
];

const Testimonial = () => {
  const URL = "https://randomuser.me/api/?inc=name,picture&results=6&nat=gb";
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    axios.get(URL).then((response) => {
      console.log(response.data.results);
      setUsers(response.data.results);
    });
  }, []);

  const elements = users.map((user, index) => {
    const testiList = testimonial[index % testimonial.length];
    return (
      <div
        key={index}
        className="grid w-[700px] grid-cols-4 items-center gap-2 rounded-[20px] bg-black px-8 py-8 mx-4"
      >
        <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full">
          <Image
            src={user.picture.large}
            alt=""
            fill
            objectFit="cover"
            className=""
          />
        </div>
        <div className="col-span-3">
          <h1 className="text-xl">
            {user.name.first} {user.name.last}
          </h1>
          <p className="text-sm">{testiList.testimonial}</p>
        </div>
      </div>
    );
  });

  return (
    <>
      <Marquee pauseOnHover={true} gradient={true} gradientColor="#131313">{elements}</Marquee>
    </>
  );
};

export default Testimonial;
