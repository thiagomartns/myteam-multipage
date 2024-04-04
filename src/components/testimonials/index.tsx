import React from "react";
import Image from "next/image";
import AvatarKady from "@/assets/img/avatar-kady.jpg";
import AvatarAiysha from "@/assets/img/avatar-aiysha.jpg";
import AvatarArthur from "@/assets/img/avatar-arthur.jpg";

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
    <section className="py-32 bg-midnight-green">
      <div className="lg:container lg:max-w-screen-xl">
        <div className="flex flex-col gap-8 items-center px-5 md:px-32 lg:px-0 lg:items-end lg:justify-between">
          <h1 className="text-center text-white text-5xl font-bold md:text-6xl lg:text-7xl">
            Delivering real results for top companies. Some of our{" "}
            <span className="text-rapture-blue">success stories.</span>
          </h1>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            {items.map((testimonial) => (
              <div
                key={testimonial.id}
                className="text-white flex flex-col items-center justify-center gap-2 py-8"
              >
                <div className="relative z-10 lg:container lg: h-32">
                  <p className="font-semibold text-center text-lg">
                    {testimonial.text}
                  </p>
                  <p className="absolute top-0 right-1/2 z-1 text-7xl">"</p>
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
    </section>
  );
};
