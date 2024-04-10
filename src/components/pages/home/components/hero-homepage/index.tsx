"use client";
import React from "react";
import Content from "./content";
import Pattern1 from "@/assets/img/bg-pattern-home-1.svg";
import Image from "next/image";
import { motion as m } from "framer-motion";

export const HeroHomepage = () => {
  return (
    <section className="bg-police-blue relative">
      <Content />
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.2,
        }}
        className="hidden absolute top-0 z-0 -left-36 lg:block"
      >
        <Image src={Pattern1} alt="Static Pattern" className="w-[300px]" />
      </m.div>
    </section>
  );
};
