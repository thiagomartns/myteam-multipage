import React from "react";
import HeroContact from "@/components/contact/components/hero";
import FormSection from "@/components/contact/components/form-section";

export default function Contact() {
  return (
    <section className="py-8 pb-16 bg-midnight-green">
      <div className="container lg:max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <HeroContact />
          <FormSection />
        </div>
      </div>
    </section>
  );
}
