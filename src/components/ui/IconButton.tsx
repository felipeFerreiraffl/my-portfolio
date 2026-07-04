"use client";

import { SVGIcon } from "@/types/elements/elements.types";
import { ComponentProps } from "react";
import Icon from "./Icon";
import { cn } from "@/libs/cn";
import { ClassValue } from "clsx";

interface IconButtonProps extends ComponentProps<"button"> {
  icon: SVGIcon;
  tooltipLabel?: string;
}

export default function IconButton({ icon, tooltipLabel, className, ...props }: IconButtonProps) {
  return (
    <button
      aria-label={tooltipLabel}
      className={cn(
        "relative group cursor-pointer grid place-items-center md:size-16 size-10",
        className,
      )}
      {...props}>
      <div
        className={cn(
          "absolute top-1/2 left-1/2 -translate-1/2 md:size-16 size-10 border-2 border-main rounded-full scale-0 opacity-0",
          "transition-[transform, opacity] duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100",
        )}
      />
      <div
        className={cn(
          "md:size-14 size-8 grid place-items-center border border-title rounded-full text-title",
          "transition-colors duration-300 group-hover:text-main group-hover:border-main",
        )}>
        <Icon icon={icon} label={tooltipLabel} className="md:size-8 size-4" />
      </div>
    </button>
  );
}
