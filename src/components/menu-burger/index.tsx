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
            </div>
            <SheetClose asChild>
              <StyledButton label="contact us" />
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
