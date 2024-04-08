import LogoImage from "@/assets/img/logo.svg";
import Image from "next/image";
import { StyledButton } from "../styled-button";
import Link from "next/link";
import MenuBurger from "../menu-burger";

export const Navigation = () => {
  return (
    <div className="py-12 bg-police-blue">
      <div className="container lg:max-w-screen-xl w-full flex justify-between">
        <div className="flex gap-10 items-center ">
          <Link href="/">
            <Image
              src={LogoImage}
              alt="myteam Logo Image"
              width={150}
              height={100}
            />
          </Link>
          <div className="hidden md:flex gap-5 body-1 text-white">
            <Link className="hover:text-light-coral " href="/">
              home
            </Link>
            <Link className="hover:text-light-coral " href="/about">
              about
            </Link>
          </div>
        </div>
        <div className="block md:hidden">
          <MenuBurger />
        </div>
        <div className="hidden md:block">
          <Link href="/contact">
            <StyledButton>Contact us</StyledButton>
          </Link>
        </div>
      </div>
    </div>
  );
};
