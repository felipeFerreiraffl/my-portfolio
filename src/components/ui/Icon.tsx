"use client";

import { cn } from "@/libs/cn";
import { SVGIcon } from "@/types/elements/elements.types";
import Tooltip from "./Tooltip";

interface IconProps {
  icon: SVGIcon;
  className?: string;
  label?: string;
  ariaLabel?: string;
}

export default function Icon({ icon: Component, className, label, ariaLabel }: IconProps) {
  return (
    <>
      <Component
        role={label ? "img" : undefined}
        className={cn("group relative shrink-0", className)}
        aria-label={label ?? ariaLabel}
      />
      {label && <Tooltip label={label} className="bottom-8 left-8" />}
    </>
  );
}
