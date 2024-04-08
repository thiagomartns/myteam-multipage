import React from "react";
import { Button, ButtonProps } from "./ui/button";

interface StyledButtonProps extends Omit<ButtonProps, "variant"> {
  variant?: "primary" | "secondary";
  color?: "dark" | "light";
  children: string;
}

export const StyledButton: React.FC<StyledButtonProps> = ({
  variant = "primary",
  color = "light",
  children,
  ...props
}) => {
  return (
    <Button
      {...props}
      className={`font-bold rounded-2xl bg-transparent border px-8 text-base inline-flex items-center ${
        color === "light"
          ? "border-white hover:bg-white hover:text-midnight-green"
          : "border-dark-green text-dark-green hover:bg-dark-green hover:text-white"
      }`}
    >
      {children}
    </Button>
  );
};

export default StyledButton;
