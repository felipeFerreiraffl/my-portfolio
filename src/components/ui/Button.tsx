"use client";

import { cn } from "@/libs/cn";
import { Variants } from "motion";
import { ComponentProps } from "react";
import { m } from "motion/react";

interface ButtonProps extends ComponentProps<typeof m.button> {
  label: string;
}

export default function Button({ label, ...props }: ButtonProps) {
  const dotToRing: Variants = {
    rest: { scale: 1 },
    hover: { scale: 1, transition: { duration: 0.3, ease: "easeInOut", delayChildren: 0.05 } },
  };

  const circleVariant: Variants = {
    rest: { width: 4, height: 4, borderWidth: 0 },
    hover: { width: 12, height: 12, borderWidth: 1 },
  };

  return (
    <m.button
      variants={dotToRing}
      initial="rest"
      whileHover="hover"
      className={cn(
        "group cursor-pointer p-2 rounded-[20px]",
        "min-w-30 whitespace-nowrap inline-flex items-center transition-colors duration-300",
        "bg-main/5 text-title hover:bg-main/20 hover:text-main",
      )}
      {...props}>
      <div className="flex items-center">
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-1/2 size-1 rounded-full bg-title transition-colors duration-300 group-hover:bg-main" />
          <m.div variants={circleVariant} className="rounded-full border-main" />
        </div>
        <div className="w-2 h-px bg-title transition-colors duration-300 group-hover:bg-main" />
      </div>

      <span className="w-full text-center px-2 text-base font-bold leading-body">{label}</span>

      <div className="flex items-center">
        <div className="w-2 h-px bg-title transition-colors duration-300 group-hover:bg-main" />
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-1/2 size-1 rounded-full bg-title transition-colors duration-300 group-hover:bg-main" />
          <m.div variants={circleVariant} className="rounded-full border-main" />
        </div>
      </div>
    </m.button>
  );
}
