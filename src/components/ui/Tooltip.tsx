"use client";

import { cn } from "@/libs/cn";
import { ComponentProps } from "react";

interface TooltipProps extends ComponentProps<"div"> {
  label: string;
}

export default function Tooltip({ label, className }: TooltipProps) {
  return (
    <div
      className={cn(
        "absolute z-200 inline-flex w-auto",
        "bg-bg p-3 border border-main rounded-xl",
        "text-sm text-text whitespace-nowrap",
        "opacity-0 transition-opacity duration-300 group-hover:opacity-100",
        "delay-0 group-hover:delay-800",
        className
      )}>
      {label}
    </div>
  );
}
