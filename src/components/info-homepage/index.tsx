import React from "react";
import IconPerson from "@/assets/img/icon-person.svg";
import IconCog from "@/assets/img/icon-cog.svg";
import IconChart from "@/assets/img/icon-chart.svg";
import Image from "next/image";

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
    <section className="py-16 bg-dark-green lg:py-32">
      <div className="container flex flex-col gap-10 lg:max-w-screen-xl lg:flex-row lg:justify-between lg:items-start">
        <h1 className=" text-white text-5xl font-bold md:w-full lg:text-5xl lg:w-[25ch] xl:w-[15ch]">
          Build & manage distributed teams like no one else.
        </h1>
        <ul className="lg:flex lg:flex-col lg:gap-10">
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
      </div>
    </section>
  );
};
