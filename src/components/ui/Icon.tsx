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
  const accessibleName = label ?? ariaLabel;

  return (
    <>
      <Component
        // Sem role="img", o aria-label num <svg> é ignorado por boa parte dos
        // leitores de tela; sem nome algum, o ícone é decorativo
        role={accessibleName ? "img" : undefined}
        aria-hidden={accessibleName ? undefined : true}
        focusable="false"
        className={cn("relative shrink-0", className)}
        aria-label={accessibleName}
      />
      {label && <Tooltip label={label} className="bottom-8 left-8" />}
    </>
  );
}
