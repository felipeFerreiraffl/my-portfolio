"use client";

import Icon from "@/components/ui/Icon";
import { ICONS } from "@/constants/icons";
import { ProjectData } from "@/types/elements/data.types";
import { useTranslations } from "next-intl";

interface ProjectDetails {
  data: ProjectData | null;
  open: boolean;
  onOpenChange: () => void;
}

export default function ProjectDetails({ data, open, onOpenChange }: ProjectDetails) {
  const tAria = useTranslations("AriaLabels");

  if (!open) return;

  return (
    <div className="fixed top-1/2 left-1/2 -translate-1/2 grid place-items-center z-999 size-full">
      <div role="dialog" className="relative size-full grid place-items-center">
        <div className="absolute inset-0 size-full bg-bg/30" />

        <div className="relative w-[76dvw] max-h-[85dvh] h-full bg-bg border-[1.5px] border-main rounded-[40px]">
          <button
            onClick={onOpenChange}
            className="cursor-pointer absolute md:top-6 md:right-6 top-5 right-5 grid place-items-center md:size-7 size-5 border-[0.5] border-main rounded-full z-1000"
            aria-label={tAria("close")}
            data-cursor-hover>
            <Icon icon={ICONS.closeX} className="md:size-4 size-3 text-text" />
          </button>
        </div>
      </div>
    </div>
  );
}
