import React from "react";
import HeroContact from "@/components/contact/components/hero";
import FormSection from "@/components/contact/components/form-section";

export default function Contact() {
  return (
    <section className="py-32 pt-20 bg-midnight-green md:pt-32">
      <div className="lg:container lg:max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <HeroContact />
          <FormSection />
        </div>
      </div>
    </section>
  );
}
