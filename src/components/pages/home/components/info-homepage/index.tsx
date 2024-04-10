"use client";

import React from "react";
import IconPerson from "@/assets/img/icon-person.svg";
import IconCog from "@/assets/img/icon-cog.svg";
import IconChart from "@/assets/img/icon-chart.svg";
import Image from "next/image";
import Pattern3 from "@/assets/img/bg-pattern-home-3.svg";
import { motion as m, useScroll } from "framer-motion";

export const InfoHomepage = () => {
  const items = [
    {
      id: 1,
      title: "Experienced Individuals",
      info: "Our network is made up of highly experienced professionals who are passionate about what they do.",
      img: IconPerson,
    },
    {
      id: 2,
      title: "Easy to Implement",
      info: "Our processes have been refined over years of implementation meaning our teams always deliver.",
      img: IconCog,
    },
    {
      id: 3,
      title: "Enhanced Productivity",
      info: "Our customized platform with in-built analytics helps you manage your distributed teams.",
      img: IconChart,
    },
  ];

  return (
    <section className="py-32 bg-sacramento-state-green relative overflow-x-hidden">
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="container flex flex-col gap-10 lg:max-w-screen-xl lg:flex-row lg:justify-between lg:items-start"
      >
        <div className="flex flex-col gap-10">
          <div className="hidden h-1 w-16 bg-light-coral lg:block"></div>
          <h1 className=" text-white z-10 text-5xl font-bold w-[10ch] md:w-[20ch] lg:text-5xl lg:w-[25ch] xl:w-[15ch]">
            Build & manage distributed teams like no one else.
          </h1>
        </div>
        <ul className="z-10 lg:flex lg:flex-col lg:gap-10">
          {items.map((item) => (
            <li
              className="flex flex-col gap-5 items-center py-8 md:flex-row lg:items-start lg:py-0"
              key={item.id}
            >
              <Image
                width={96}
                height={24}
                alt={`Icon-${item.title}`}
                src={item.img}
              />
              <div className="gap-5 flex flex-col ">
                <h3 className="text-light-coral text-xl font-bold text-center md:text-left">
                  {item.title}
                </h3>
                <p className="text-white text-center font-semibold md:text-left xl:w-[50ch]">
                  {item.info}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </m.div>
      <div className="absolute top-0 -right-40 z-0 lg:top-auto lg:bottom-0">
        <Image src={Pattern3} alt="Static Pattern" className="w-[300px] z-0" />
      </div>
    </section>
  );
};
