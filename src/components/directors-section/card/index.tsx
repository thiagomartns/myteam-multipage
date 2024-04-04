"use client";
import { Linkedin, Plus, Twitter, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface Director {
  img: any;
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
    <li className="flex flex-col items-center py-12 mt-10 px-5 bg-dark-green relative">
      {opened ? (
        <div className="flex flex-col gap-8 justify-center h-full items-center  ">
          <h1 className="text-rapture-blue font-bold text-2xl">
            {director.name}
          </h1>
          <p className="text-white font-semibold text-center">
            {director.text}
          </p>
          <div className="flex gap-2 justify-center text-white">
            <Twitter />
            <Linkedin />
          </div>
        </div>
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
            <p className="italic text-lg text-white">{director.role}</p>
          </div>
        </>
      )}

      <div
        onClick={handleChange}
        className={`rounded-full p-3 absolute -bottom-7 cursor-pointer ${
          opened ? "bg-rapture-blue" : "bg-light-coral"
        }`}
      >
        {opened ? (
          <X size={32} className="text-sacramento-state-green p-1 " />
        ) : (
          <Plus size={32} className="text-sacramento-state-green p-1" />
        )}
      </div>
    </li>
  );
};
