import React from "react";
import Image from "next/image";
import TheVergeLogo from "@/assets/img/logo-the-verge.png";
import JakartaLogo from "@/assets/img/logo-jakarta-post.png";
import GuardianLogo from "@/assets/img/logo-the-guardian.png";
import TechRadarLogo from "@/assets/img/logo-tech-radar.png";
import GadgetsLogo from "@/assets/img/logo-gadgets-now.png";
import Pattern4 from "@/assets/img/bg-pattern-about-4.svg";

export const ClientsSection = () => {
  return (
    <section className="bg-sacramento-state-green relative overflow-hidden">
      <div className="container py-32 lg:max-w-screen-xl flex flex-col gap-16">
        <h1 className="z-10 text-center text-white text-4xl font-bold md:text-5xl lg:text-6xl ">
          Some of our clients
        </h1>
        <div className="flex flex-col gap-16 items-center md:flex-row">
          {[
            TheVergeLogo,
            JakartaLogo,
            GuardianLogo,
            TechRadarLogo,
            GadgetsLogo,
          ].map((img, index) => (
            <div key={index} className="w-48 my-0 mx-auto ">
              <Image src={img} alt="Partner's Logo" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute z-0 -top-36 -left-36 w-full sm:-top-36 sm:left-0 lg:top-0">
        <Image
          src={Pattern4}
          alt="Static Pattern"
          className="w-72 lg:w-48 xl:w-64"
        />
      </div>
    </section>
  );
};
