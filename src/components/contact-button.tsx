import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface ContactButtonProps {
  variant?: "primary" | "secondary";
  color?: "dark" | "light";
}

export const ContactButton = ({
  variant = "primary",
  color = "light",
}: ContactButtonProps) => {
  return (
    <Link href="/contact">
      <Button
        className={`font-bold rounded-2xl bg-transparent border px-8 text-base items-center ${
          color === "light"
            ? " border-white hover:bg-white hover:text-midnight-green"
            : "border-dark-green text-dark-green hover:bg-dark-green hover:text-white"
        }`}
      >
        contact us
      </Button>
    </Link>
  );
};
