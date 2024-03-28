import LogoImage from "@/assets/img/logo.svg";
import { Menu } from "lucide-react";
import Image from "next/image";
import { ContactButton } from "../contact-button";

export const Navigation = () => {
  return (
    <div className="flex justify-between p-5 bg-midnight-green items-center">
      <div className="flex gap-5 items-center">
        <Image
          src={LogoImage}
          alt="myteam Logo Image"
          width={150}
          height={100}
        />
        <ul className="hidden sm:flex gap-2 body-1 text-white">
          <li>home</li>
          <li>about</li>
        </ul>
      </div>
      <Menu className="block sm:hidden" color="white" />
      <ContactButton />
    </div>
  );
};
