"use client";
import { Linkedin, Plus, Twitter, X } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { motion as m } from "framer-motion";
import Link from "next/link";

interface Director {
  img: string | StaticImageData;
  name: string;
  role: string;
  id: number;
  text: string;
}

interface DirectorProps {
  director: Director;
}

export const DirectorCard = ({ director }: DirectorProps) => {
  const [opened, setOpened] = useState<boolean>(false);

  const handleChange = () => {
    setOpened(!opened);
  };

  return (
    <li className="z-10 flex flex-col items-center py-12 mt-10 px-5 bg-sacramento-state-green relative w-full h-80 my-0 mx-auto md:w-80 lg:w-96">
      {opened ? (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.2,
          }}
          className="flex flex-col gap-8 justify-center h-full items-center"
        >
          <h1 className="text-rapture-blue font-bold text-2xl">
            {director.name}
          </h1>
          <p className="text-white font-semibold text-center text-xl">
            {director.text}
          </p>
          <div className="flex gap-5 justify-center text-white">
            <Link href="#" className="hover:text-light-coral">
              <Twitter />
            </Link>
            <Link href="#" className="hover:text-light-coral">
              <Linkedin />
            </Link>
          </div>
        </m.div>
      ) : (
        <>
          <Image
            src={director.img}
            alt="User picture"
            width={128}
            className="rounded-full border-4 border-white"
          />
          <div className="flex flex-col items-center py-4">
            <h1 className="text-rapture-blue font-bold text-2xl">
              {director.name}
            </h1>
            <p className="italic text-lg text-white text-center">
              {director.role}
            </p>
          </div>
        </>
      )}

      <m.div
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.3 },
        }}
        onClick={handleChange}
        className={`rounded-full p-3 absolute -bottom-7 cursor-pointer  hover:bg-rapture-blue  ${
          opened ? "bg-rapture-blue" : "bg-light-coral"
        }`}
      >
        {opened ? (
          <X size={32} className="text-sacramento-state-green p-1" />
        ) : (
          <Plus size={32} className="text-sacramento-state-green p-1" />
        )}
      </m.div>
    </li>
  );
};
