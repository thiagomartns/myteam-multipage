import React from "react";
import { Button } from "./ui/button";

export const ContactButton = () => {
  return (
    <Button className="hidden md:block font-bold rounded-2xl bg-transparent border border-white hover:bg-white hover:text-midnight-green">
      contact us
    </Button>
  );
};
