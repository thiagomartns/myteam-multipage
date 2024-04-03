import Image from "next/image";
import React from "react";
import LogoImage from "@/assets/img/logo.svg";
import Pinterest from "@/assets/img/icon-pinterest.svg";
import { Facebook, Twitter } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <section className="bg-dark-green py-10 text-white">
      <div className="main-container flex-col gap-5 container md:max-w-screen-md lg:max-w-screen-xl">
        <div className="text-white flex flex-col gap-5 items-center sm:flex-row sm:justify-between sm:w-full ">
          <div className="flex flex-col gap-2 sm:gap-10">
            <Image
              src={LogoImage}
              alt="myteam Logo Image"
              width={150}
              height={100}
            />
            <ul className="flex justify-between gap-5  body-1">
              <Link className="hover:text-light-coral " href="/">
                home
              </Link>
              <Link className="hover:text-light-coral " href="/about">
                about
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center sm:items-end">
            <p className="body-1">987 Hillcrest Lane</p>
            <p className="body-1">Irvine, CA</p>
            <p className="body-1">California 92714</p>
            <p className="body-1">Call us: 949-833-7432</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:w-full">
          <ul className="flex gap-2 justify-center">
            <li>
              <Facebook />
            </li>
            <li>
              <Twitter />
            </li>
            <li>
              <Image src={Pinterest} alt="Pinterest Logo" />
            </li>
          </ul>
          <p className="body-2">Copyright 2024. All Rights Reserved</p>
        </div>
      </div>
    </section>
  );
};
