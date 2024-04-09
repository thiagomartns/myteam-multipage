import { CallToAction } from "@/components/call-to-action";
import React from "react";
import Pattern1 from "@/assets/img/bg-pattern-about-1-mobile-nav-1.svg";
import Image from "next/image";
import { DirectorsSection } from "@/components/directors-section";

import { ClientsSection } from "@/components/clients-section";

export default function AboutPage() {
  return (
    <>
      <section className="bg-police-blue relative overflow-hidden">
        <div className="pb-56 pt-20 lg:container lg:max-w-screen-xl">
          <div className="flex flex-col gap-8 items-center px-5 md:px-32 lg:flex-row lg:px-0 lg:items-start lg:justify-between">
            <h1 className="z-10 text-center text-white text-5xl font-bold w-[9ch] md:text-6xl lg:text-7xl lg:text-left lg:w-[12ch]">
              About
            </h1>
            <div className="flex flex-col gap-10">
              <div className="hidden h-1 w-16 bg-light-coral lg:block"></div>
              <p className="z-10 text-white text-center text-xl font-semibold lg:text-left lg:w-96 xl:w-[550px]">
                We help companies build dynamic teams made up of top global
                talent. Using our network of passionate professionals we drive
                innovation and deliver incredible outcomes. Talented, diverse
                teams shape the best products and experiences. We’ll bring those
                teams to you.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute z-0 -bottom-32 -right-40 sm:bottom-0 sm:-right-28">
          <Image
            src={Pattern1}
            alt="Static Pattern"
            className="w-[300px] sm:w-full"
          />
        </div>
      </section>
      <DirectorsSection />
      <ClientsSection />
      <CallToAction />
    </>
  );
}
