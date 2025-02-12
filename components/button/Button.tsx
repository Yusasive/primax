"use client";

import React from "react";
import { cn } from "@/lib/utils"; 

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger";
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  isLoading = false,
  className,
  children,
  ...props
}) => {
  const baseStyles =
    "px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center";
  const variants = {
    primary: "bg-[#ddd6fe] text-[#623eca] hover:bg-[#f2efff]",
    secondary: "bg-white text-black hover:bg-gray-700",
    outline: "bg-white text-[#623eca] hover:bg-gray-100",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;
