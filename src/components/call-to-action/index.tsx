import React from "react";
import { StyledButton } from "../styled-button";
import Link from "next/link";
import Image from "next/image";
import Pattern7 from "@/assets/img/bg-pattern-home-6-about-5.svg";

export const CallToAction = () => {
  return (
    <section className="py-20 bg-light-coral relative overflow-hidden">
      <div className="container lg:max-w-screen-xl">
        <div className="flex flex-col gap-10 items-center md:flex-row md:justify-around">
          <h1 className="z-10 text-dark-green text-4xl text-center font-bold w-[12ch] md:w-[20ch]">
            Ready to get Started?
          </h1>
          <Link href="/contact">
            <StyledButton color="dark">contact us</StyledButton>
          </Link>
        </div>
      </div>
      <div className="absolute -bottom-6 left-0 z-0 lg:top-auto ">
        <Image src={Pattern7} alt="Static Pattern" className="z-0" />
      </div>
    </section>
  );
};
