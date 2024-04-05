import React from "react";

export const HeroHomepage = () => {
  return (
    <section className="py-32 pt-20 bg-midnight-green">
      <div className="lg:container lg:max-w-screen-xl">
        <div className="flex flex-col gap-8 items-center px-5 md:px-32 lg:flex-row lg:px-0 lg:items-end lg:justify-between">
          <h1 className="text-center text-white text-5xl font-bold w-[9ch] md:text-6xl lg:text-7xl lg:text-left lg:w-[12ch] xl:w-[9ch] ">
            Find the best <span className="text-light-coral">talent</span>
          </h1>
          <p className="text-white text-center text-xl font-semibold lg:text-left lg:w-96 xl:w-[550px]">
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
        </div>
      </div>
    </section>
  );
};
