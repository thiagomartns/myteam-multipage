import React from "react";
import AvatarNikita from "@/assets/img/avatar-nikita.jpg";
import AvatarChristian from "@/assets/img/avatar-christian.jpg";
import AvatarDrake from "@/assets/img/avatar-drake.jpg";
import AvatarGriffin from "@/assets/img/avatar-griffin.jpg";
import AvatarAden from "@/assets/img/avatar-aden.jpg";
import AvatarCruz from "@/assets/img/avatar-cruz.jpg";

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
    <section className="py-24 bg-sacramento-state-green">
      <div className="container lg:max-w-screen-xl">
        <h1 className="text-center text-white text-4xl font-bold md:text-5xl lg:text-6xl ">
          Meet the directors
        </h1>
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {directors.map((director) => (
            <DirectorCard director={director} />
          ))}
        </ul>
      </div>
    </section>
  );
};
