"use client";
import { Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { StyledButton } from "../styled-button";
import Image from "next/image";
import Pattern5 from "@/assets/img/bg-pattern-about-1-mobile-nav-1.svg";

export default function MenuBurger() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu size={30} className="text-white hover:cursor-pointer lg:hidden" />
      </SheetTrigger>
      <SheetContent className="bg-police-blue w-[60vw]">
        <div className="flex flex-col justify-center h-[35vh]">
          <div className="flex flex-col gap-5 w-48 my-0 mx-auto">
            <div className="flex flex-col text-white font-semibold gap-4">
              <SheetClose asChild>
                <Link className="hover:text-light-coral " href="/">
                  home
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link className="hover:text-light-coral " href="/about">
                  about
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/contact">
                  <StyledButton>Contact us</StyledButton>
                </Link>
              </SheetClose>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 -right-32 z-0 lg:top-auto ">
          <Image
            src={Pattern5}
            alt="Static Pattern"
            className="w-[250px] z-0"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
