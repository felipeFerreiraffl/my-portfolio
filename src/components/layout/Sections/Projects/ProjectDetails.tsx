"use client";

import Button from "@/components/ui/Button";
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
  const tSec = useTranslations("Projects");
  const tAria = useTranslations("AriaLabels");

  if (!open) return;

  return (
    <div
      data-state={open ? "open" : "closed"}
      className="fixed top-1/2 left-1/2 -translate-1/2 grid place-items-center z-999 size-full">
      <div role="dialog" className="relative size-full grid place-items-center">
        <div className="absolute inset-0 size-full bg-bg/30" />

        <div className="relative md:w-[76dvw] w-[80dvw] max-h-[85dvh] h-full bg-bg border-[1.5px] border-main rounded-[40px] py-10 px-12">
          <button
            onClick={onOpenChange}
            className="cursor-pointer absolute md:top-6 md:right-6 top-5 right-5 grid place-items-center md:size-7 size-5 border-[0.5] border-main rounded-full z-1000"
            aria-label={tAria("close")}
            data-cursor-hover>
            <Icon icon={ICONS.closeX} className="md:size-4 size-3 text-text" />
          </button>

          <div className="flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex items-center gap-3">
                <div className="size-3 bg-main rotate-45" />
                <h3 className="md:text-[2.5rem] text-2xl font-bold leading-heading text-title whitespace-nowrap">
                  {tSec(data?.title ?? "")}
                </h3>
                <div className="size-3 bg-main rotate-45" />
              </div>
              <p className="md:text-base text-medium leading-body text-text">
                {tSec(data?.description ?? "")}
              </p>
            </div>

            <div className="w-full flex flex-col items-center gap-5">
              <div className="md:max-w-[60%] w-full flex flex-col items-center gap-3 text-center">
                <h4 className="md:text-2xl text-xl font-medium leading-heading text-text">
                  {tSec("techsTitle")}
                </h4>
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  {data?.techs.map((t) => (
                    <Icon
                      key={t.label}
                      icon={t.icon}
                      ariaLabel={t.label}
                      className="size-8 text-title"
                    />
                  ))}
                </div>
              </div>

              <div className=""></div>

              <div className="md:max-w-[60%] w-full flex flex-col items-center gap-3 text-center">
                <h4 className="md:text-2xl text-xl font-medium leading-heading text-text">
                  {tSec("featTitle")}
                </h4>
                <div className="flex items-center justify-center gap-3 flex-wrap">
                  {data?.feats.map((f) => (
                    <span
                      key={`feat-(${f})`}
                      className="md:text-sm text-xs leading-body text-text bg-main/20 border-[0.5px] border-main rounded-[20px] py-2 px-3">
                      {tSec(f)}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-5">
                <Button label="Demo" />
                <Button label={tSec("repo")} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
