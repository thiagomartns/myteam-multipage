import Image from "next/image";
import React from "react";
import Pattern1 from "@/assets/img/bg-pattern-home-2.svg";

export default function Content() {
  return (
    <div className="relative pb-56 pt-20 lg:container lg:max-w-screen-xl">
      <div className="flex flex-col gap-8 items-center px-5 md:px-32 lg:flex-row lg:px-0 lg:items-end lg:justify-between">
        <h1 className="z-50 text-center text-white text-5xl font-bold w-[9ch] md:text-6xl lg:text-7xl lg:text-left lg:w-[12ch] xl:w-[9ch] ">
          Find the best <span className="text-light-coral">talent</span>
        </h1>
        <p className="text-white text-center text-xl leading-10 font-semibold lg:text-left lg:w-96 lg:leading-normal xl:w-[550px]">
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </p>
      </div>
      <div className="absolute bottom-0 px-2 flex justify-center w-full lg:px-0 lg:w-[520px] lg:right-0 lg:justify-end lg:max-w-screen-xl">
        <Image
          src={Pattern1}
          alt="Static Pattern"
          className="w-full sm:w-[70%] lg:container lg:w-full"
        />
      </div>
    </div>
  );
}
