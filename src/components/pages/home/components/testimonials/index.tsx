import React from "react";
import Image from "next/image";
import AvatarKady from "@/assets/img/avatar-kady.jpg";
import AvatarAiysha from "@/assets/img/avatar-aiysha.jpg";
import AvatarArthur from "@/assets/img/avatar-arthur.jpg";
import IconQuotes from "@/assets/img/icon-quotes.svg";
import Pattern5 from "@/assets/img/bg-pattern-home-4-about-3.svg";
import Pattern6 from "@/assets/img/bg-pattern-home-5.svg";

export const Testimonials = () => {
  const items = [
    {
      id: 1,
      text: " “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”",
      name: "Kady Baker",
      role: "Product Manager at Bookmark",
      img: AvatarKady,
    },
    {
      id: 2,
      text: "“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”",
      name: "Aiysha Reese",
      role: "Founder of Manage",
      img: AvatarAiysha,
    },
    {
      id: 3,
      text: "“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”",
      name: "Arthur Clarke",
      role: "Co-founder of MyPhysio",
      img: AvatarArthur,
    },
  ];

  return (
    <section className="py-64 bg-deep-jungle-green relative overflow-x-hidden lg:py-48">
      <div className="lg:container lg:max-w-screen-xl">
        <div className="flex flex-col gap-8 items-center px-5 md:px-32 lg:px-0 lg:items-end lg:justify-between">
          <h1 className="z-10 text-center text-white text-5xl font-bold md:text-6xl">
            Delivering real results for top companies. Some of our{" "}
            <span className="text-rapture-blue">success stories.</span>
          </h1>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            {items.map((testimonial) => (
              <div
                key={testimonial.id}
                className="text-white flex flex-col items-center justify-center gap-2 py-8"
              >
                <div className="relative min-h:32 lg:container">
                  <p className="font-semibold text-center text-xl z-50 relative">
                    {testimonial.text}
                  </p>
                  <Image
                    alt="Quotes Icon"
                    src={IconQuotes}
                    className="absolute -top-8 right-1/2 z-10"
                  />
                </div>

                <div className="flex flex-col items-center py-4">
                  <h1 className="text-rapture-blue font-bold text-2xl">
                    {testimonial.name}
                  </h1>
                  <p className="italic text-lg">{testimonial.role}</p>
                </div>
                <Image
                  src={testimonial.img}
                  alt="User pictire"
                  width={128}
                  className="rounded-full border-4 border-white"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 z-0 ">
        <Image src={Pattern5} alt="Static Pattern" className="w-[300px] z-0" />
      </div>
      <div className="absolute bottom-0 right-0 z-0 lg:top-auto ">
        <Image src={Pattern6} alt="Static Pattern" className="w-[300px] z-0" />
      </div>
    </section>
  );
};
