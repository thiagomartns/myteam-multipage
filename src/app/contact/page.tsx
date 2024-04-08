import React from "react";
import HeroContact from "@/components/contact/components/hero";
import FormSection from "@/components/contact/components/form-section";

export default function Contact() {
  return (
    <section className="bg-police-blue">
      <div className="container py-16 lg:max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center ">
          <HeroContact />
          <FormSection />
        </div>
      </div>
    </section>
  );
}
