import React from "react";
import { ContactButton } from "../contact-button";

export const CallToAction = () => {
  return (
    <section className="py-20 bg-light-coral">
      <div className="container lg:max-w-screen-xl">
        <div className="flex flex-col gap-10 items-center md:flex-row md:justify-around">
          <h1 className="text-dark-green text-4xl text-center font-bold w-[12ch] md:w-[20ch]">
            Ready to get Started?
          </h1>
          <ContactButton color="dark" />
        </div>
      </div>
    </section>
  );
};
