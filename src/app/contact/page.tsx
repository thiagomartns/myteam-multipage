import React from "react";
import HeroContact from "@/components/contact/components/hero";
import FormSection from "@/components/contact/components/form-section";
import Pattern1 from "@/assets/img/bg-pattern-about-2-contact-1.svg";
import Pattern2 from "@/assets/img/bg-pattern-contact-2.svg";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="bg-police-blue overflow-hidden relative">
      <div className="container py-16 lg:max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center ">
          <HeroContact />
          <FormSection />
        </div>
      </div>
      <div className="hidden absolute z-0 top-0 -left-32 sm:block">
        <Image src={Pattern1} alt="Static Pattern" className="w-[250px] " />
      </div>
      <div className="hidden absolute z-0 -bottom-0 -right-24 sm:block">
        <Image src={Pattern2} alt="Static Pattern" className="w-[200px] " />
      </div>
    </section>
  );
}
