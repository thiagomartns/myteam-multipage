import React from "react";
import IconChart from "@/assets/img/icon-chart.svg";
import IconPerson from "@/assets/img/icon-person.svg";
import IconCog from "@/assets/img/icon-cog.svg";
import Image from "next/image";

export default function HeroContact() {
  const items = [
    {
      id: 1,
      title: "The quality of our talent network",
      img: IconPerson,
    },
    {
      id: 2,
      title: "Usage & implementation of our software",
      img: IconCog,
    },
    {
      id: 3,
      title: "How we help drive innovation",
      img: IconChart,
    },
  ];

  return (
    <div className="flex flex-col gap-8 items-center px-5 md:px-32 lg:px-0 lg:items-start lg:justify-between">
      <div className="flex flex-col gap-5 items-center lg:items-start">
        <h1 className="text-center text-white text-5xl font-bold w-[9ch] md:text-6xl lg:text-7xl lg:text-left lg:w-[12ch]">
          Contact
        </h1>
        <h1 className="text-center text-light-coral text-4xl font-bold  md:text-5xl lg:text-6xl ">
          Ask us about
        </h1>
      </div>
      <div className="flex py-5 flex-col gap-5 items-start w-full justify-start">
        {items.map((i) => (
          <div key={i.id} className="flex gap-5 items-center">
            <Image width={64} height={64} alt={`${i.title}`} src={i.img} />
            <p className="text-white font-semibold text-xl">{i.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
