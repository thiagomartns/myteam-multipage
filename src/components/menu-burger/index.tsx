"use client";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { ContactButton } from "../contact-button";

export default function MenuBurger() {
  const [openedMenu, setOpenedMenu] = useState<boolean>(false);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu
          onClick={() => setOpenedMenu(true)}
          size={30}
          className="text-white hover:cursor-pointer lg:hidden"
        />
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
              <Link href="/contact">
                <ContactButton />
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
