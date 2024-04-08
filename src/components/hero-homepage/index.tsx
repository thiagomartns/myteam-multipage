import React from "react";
import Content from "./content";
import Pattern3 from "@/assets/img/bg-pattern-home-1.svg";
import Image from "next/image";

export const HeroHomepage = () => {
  return (
    <section className="bg-midnight-green relative">
      <Content />
      <div className="hidden absolute top-0 z-0 -left-36 lg:block">
        <Image src={Pattern3} alt="Static Pattern" className="w-[300px]" />
      </div>
    </section>
  );
};
