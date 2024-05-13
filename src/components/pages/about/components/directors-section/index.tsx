import React from "react";
import AvatarNikita from "@/assets/img/avatar-nikita.jpg";
import AvatarChristian from "@/assets/img/avatar-christian.jpg";
import AvatarDrake from "@/assets/img/avatar-drake.jpg";
import AvatarGriffin from "@/assets/img/avatar-griffin.jpg";
import AvatarAden from "@/assets/img/avatar-aden.jpg";
import AvatarCruz from "@/assets/img/avatar-cruz.jpg";
import Pattern2 from "@/assets/img/bg-pattern-about-2-contact-1.svg";
import Pattern3 from "@/assets/img/bg-pattern-home-4-about-3.svg";
import Image from "next/image";
import { DirectorCard } from "./card";

export const DirectorsSection = () => {
  const directors = [
    {
      id: 1,
      text: " “  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta libero nostrum quos explicabo ut accusantium?”",
      name: "Nikita Marks",
      role: "Founder & CEO",
      img: AvatarNikita,
    },
    {
      id: 2,
      text: " “  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta libero nostrum quos explicabo ut accusantium?”",
      name: "Christian Duncan",
      role: "Co-founder & COO",
      img: AvatarChristian,
    },
    {
      id: 3,
      text: " “  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta libero nostrum quos explicabo ut accusantium?”",
      name: "Cruz Hamer",
      role: "Co-founder & CTO",
      img: AvatarCruz,
    },
    {
      id: 4,
      text: " “  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta libero nostrum quos explicabo ut accusantium?”",
      name: "Drake Heaton",
      role: "Busines Development Lead",
      img: AvatarDrake,
    },
    {
      id: 5,
      text: " “  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta libero nostrum quos explicabo ut accusantium?”",
      name: "Griffin Wise",
      role: "Lead Marketing",
      img: AvatarGriffin,
    },
    {
      id: 6,
      text: " “  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta libero nostrum quos explicabo ut accusantium?”",
      name: "Adden Allan",
      role: "Architect",
      img: AvatarAden,
    },
  ];

  return (
    <section className="bg-deep-jungle-green relative overflow-hidden">
      <div className="container py-32 z-10 lg:max-w-screen-xl ">
        <h1 className="z-10 text-center text-white text-4xl font-bold md:text-5xl lg:text-6xl ">
          Meet the directors
        </h1>
        <ul className=" grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {directors.map((director) => (
            <DirectorCard key={director.id} director={director} />
          ))}
        </ul>
      </div>
      <div className="absolute z-0 -left-28 -top-36 w-72">
        <Image src={Pattern2} alt="Static Pattern" className="w-full" />
      </div>
      <div className="absolute z-0 bottom-0 right-0 w-40">
        <Image src={Pattern3} alt="Static Pattern" className="w-full" />
      </div>
    </section>
  );
};
