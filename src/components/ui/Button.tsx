"use client";

import { cn } from "@/libs/cn";
import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  label: string;
}

export default function Button({ label, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "cursor-pointer p-2 rounded-[20px]",
        "min-w-30 whitespace-nowrap inline-flex items-center transition-colors duration-300",
        "bg-main/5 text-title hover:bg-main/20 hover:text-main",
      )}
      {...props}>
      <span className="w-full text-center text-base font-bold leading-body">{label}</span>
    </button>
  );
}
