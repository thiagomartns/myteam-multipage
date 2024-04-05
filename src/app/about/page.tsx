import { CallToAction } from "@/components/call-to-action";
import React from "react";

import { DirectorsSection } from "@/components/directors-section";

import { ClientsSection } from "@/components/clients-section";

export default function AboutPage() {
  return (
    <>
      <section className="py-32 bg-midnight-green">
        <div className="lg:container lg:max-w-screen-xl">
          <div className="flex flex-col gap-8 items-center px-5 md:px-32 lg:flex-row lg:px-0 lg:items-start lg:justify-between">
            <h1 className="text-center text-white text-5xl font-bold w-[9ch] md:text-6xl lg:text-7xl lg:text-left lg:w-[12ch]">
              About
            </h1>
            <p className="text-white text-center text-lg font-semibold lg:text-left lg:w-96 xl:w-[550px]">
              We help companies build dynamic teams made up of top global
              talent. Using our network of passionate professionals we drive
              innovation and deliver incredible outcomes. Talented, diverse
              teams shape the best products and experiences. We’ll bring those
              teams to you.
            </p>
          </div>
        </div>
      </section>
      <DirectorsSection />
      <ClientsSection />
      <CallToAction />
    </>
  );
}
