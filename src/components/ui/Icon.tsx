"use client";

import { cn } from "@/libs/cn";
import { SVGIcon } from "@/types/elements/elements.types";
import Tooltip from "./Tooltip";

interface IconProps {
  icon: SVGIcon;
  className?: string;
  label?: string;
}

export default function Icon({ icon: Component, className, label }: IconProps) {
  return (
    <>
      <Component
        role={label ? "img" : undefined}
        className={cn("group relative shrink-0", className)}
        aria-label={label}
      />
      {label && <Tooltip label={label} className="bottom-8 left-8" />}
    </>
  );
}
