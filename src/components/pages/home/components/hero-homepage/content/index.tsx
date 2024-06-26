"use client";

import Image from "next/image";
import React from "react";
import Pattern1 from "@/assets/img/bg-pattern-home-2.svg";
import { motion as m } from "framer-motion";

export default function Content() {
  return (
    <div className="relative pb-56 pt-20 lg:container lg:max-w-screen-xl">
      <m.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.6,
          duration: 1,
        }}
        className="flex flex-col gap-8 items-center px-5 md:px-32 lg:flex-row lg:px-0 lg:items-end lg:justify-between"
      >
        <h1 className="z-50 text-center text-white text-5xl font-bold w-[9ch] md:text-6xl lg:text-7xl lg:text-left lg:w-[12ch] xl:text-8xl xl:w-[9ch] ">
          Find the best <span className="text-light-coral">talent</span>
        </h1>
        <div className="flex flex-col gap-24">
          <div className="hidden h-1 w-16 bg-rapture-blue lg:block"></div>
          <p className="text-white text-center text-xl leading-10 font-semibold lg:text-left lg:w-96 lg:leading-normal xl:w-[550px]">
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
        </div>
      </m.div>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.4,
        }}
        className="absolute bottom-0 px-2 flex justify-center w-full lg:px-0 lg:w-[520px] lg:right-0 lg:justify-end lg:max-w-screen-xl"
      >
        <Image
          src={Pattern1}
          alt="Static Pattern"
          className="w-full sm:w-[70%] lg:container lg:w-full"
        />
      </m.div>
    </div>
  );
}
