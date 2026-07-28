"use client";

import { cn } from "@/libs/cn";
import { ProjectData } from "@/types/elements/data.types";
import { useTranslations } from "next-intl";
import { MouseEventHandler } from "react";

type ProjectSetProps = Pick<ProjectData, "title"> & {
  onClick?: MouseEventHandler;
};

export default function ProjectSet({ title, onClick }: ProjectSetProps) {
  const tSec = useTranslations("Projects");

  return (
    <div
      role="button"
      onClick={onClick}
      className="group relative grid place-items-center md:size-80 size-64 border-2 border-main rounded-full"
      data-cursor-hover>
      <div
        className={cn(
          "absolute top-1/2 left-1/2 -translate-1/2 md:max-w-73 max-w-83 size-[92%] aspect-square border border-main rounded-full",
          "lg:opacity-0 lg:scale-0 opacity-100 scale-100 transition-[opacity, scale] duration-300 ease-in-out",
          "group-hover:opacity-100 group-hover:scale-100",
        )}
      />
      <div
        className={cn(
          "lg:block hidden absolute top-1/2 left-1/2 -translate-1/2 md:max-w-52 max-w-44 size-[65%] aspect-square",
          "bg-main/20 rounded-full shadow-project blur-[32px]",
          "opacity-0 scale-0 transition-[opacity, scale] duration-300 ease-in-out",
          "group-hover:opacity-100 group-hover:scale-100",
        )}
      />

      <div className="flex flex-col items-center gap-2 text-center">
        <h3 className="md:text-2xl text-xl font-medium leading-heading text-title">{title}</h3>
        <span
          className={cn(
            "md:text-base text-sm leading-body text-text",
            "lg:opacity-0 lg:scale-0 opacity-100 scale-100 transition-[opacity, scale] duration-300 ease-in-out",
            "group-hover:opacity-100 group-hover:scale-100",
          )}>
          {tSec("seeProj")}
        </span>
      </div>
    </div>
  );
}
