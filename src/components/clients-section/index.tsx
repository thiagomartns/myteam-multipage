import React from "react";
import Image from "next/image";
import TheVergeLogo from "@/assets/img/logo-the-verge.png";
import JakartaLogo from "@/assets/img/logo-jakarta-post.png";
import GuardianLogo from "@/assets/img/logo-the-guardian.png";
import TechRadarLogo from "@/assets/img/logo-tech-radar.png";
import GadgetsLogo from "@/assets/img/logo-gadgets-now.png";

export const ClientsSection = () => {
  return (
    <section className="py-16 bg-dark-green md:py-32">
      <div className="container lg:max-w-screen-xl flex flex-col gap-16">
        <h1 className="text-center text-white text-4xl font-bold md:text-5xl lg:text-6xl ">
          Some of our clients
        </h1>
        <ul className="flex flex-col gap-16 items-center md:flex-row">
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
        </ul>
      </div>
    </section>
  );
};
