import LogoImage from "@/assets/img/logo.svg";
import { Menu } from "lucide-react";
import Image from "next/image";
import { ContactButton } from "../contact-button";
import Link from "next/link";

export const Navigation = () => {
  return (
    <div className="pt-6 bg-midnight-green">
      <div className="main-container container md:max-w-screen-md lg:max-w-screen-xl">
        <div className="flex gap-5 items-center">
          <Image
            src={LogoImage}
            alt="myteam Logo Image"
            width={150}
            height={100}
          />
          <ul className="hidden md:flex gap-2 body-1 text-white">
            <Link className="hover:text-light-coral " href="/">
              home
            </Link>
            <Link className="hover:text-light-coral " href="/about">
              about
            </Link>
          </ul>
        </div>
        <div className="block md:hidden">
          <Menu size={32} color="white" />
        </div>
        <div className="hidden md:block">
          <ContactButton />
        </div>
      </div>
    </div>
  );
};
