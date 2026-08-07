"use client";

import { ICONS } from "@/constants/icons";
import { cn } from "@/libs/cn";
import { Variants } from "motion";
import { m } from "motion/react";
import { useTranslations } from "next-intl";
import Icon from "./Icon";
import Tooltip from "./Tooltip";
import { useLenis } from "lenis/react";

interface ScrollUpButtonProps {
  isVisible: boolean;
}

export default function ScrollUpButton({ isVisible }: ScrollUpButtonProps) {
  const tAria = useTranslations("AriaLabels");
  const lenis = useLenis();

  const buttonVars: Variants = {
    hidden: {
      opacity: 0,
      y: 16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const handleScrollToTop = () => {
    if (!lenis) return;

    lenis.scrollTo(0);
  };

  return (
    <m.button
      onClick={handleScrollToTop}
      variants={buttonVars}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className={cn(
        "group fixed left-1/2 md:bottom-10 bottom-30 -translate-x-1/2",
        "grid place-items-center md:size-12 size-9 bg-main/20 border border-main rounded-full",
        "backdrop-blur-lg z-999 transition-colors duration-300 hover:bg-main/40",
        !isVisible && "pointer-events-none",
      )}
      aria-label={tAria("scrollUp")}
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      data-cursor-hover>
      <Icon icon={ICONS.arrows.up} className="md:size-6 size-4 text-title" />

      <Tooltip label={tAria("scrollUp")} className="-top-8 left-12" />
    </m.button>
  );
}
