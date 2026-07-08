"use client";

import { cn } from "@/libs/cn";
import { ComponentProps } from "react";

interface SectionTitleProps extends ComponentProps<"h2"> {
  title: string;
}

export default function SectionTitle({ title, className, ...props }: SectionTitleProps) {
  return (
    <div className="w-full flex items-center gap-5">
      <div className="flex items-center">
        <div className="bg-main md:w-12 w-7 h-0.5" />
        <div className="grid place-items-center md:size-7 size-4 border-[1.5px] border-main rounded-full">
          <div className="md:size-4 size-2 rounded-full bg-main" />
        </div>
      </div>

      <h2
        className={cn(
          "whitespace-nowrap md:text-[2.5rem] text-2xl font-bold text-title leading-heading",
          className,
        )}
        {...props}>
        {title}
      </h2>

      <div className="w-full h-px bg-title/20" />
    </div>
  );
}
