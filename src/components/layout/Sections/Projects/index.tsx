"use client";

import Section from "@/components/ui/Section";
import { SectionProps } from "@/types/elements/elements.types";
import { useTranslations } from "next-intl";
import ProjectSet from "./ProjectSet";
import { PROJECTS } from "@/constants/data";
import { useEffect, useState } from "react";
import { ProjectData } from "@/types/elements/data.types";
import ProjectDetails from "./ProjectDetails";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/libs/cn";
import Icon from "@/components/ui/Icon";
import { ICONS } from "@/constants/icons";

export default function Projects({ ref }: SectionProps) {
  const tSec = useTranslations("Projects");
  const tAria = useTranslations("AriaLabels");

  const [open, setOpen] = useState(false);
  const [proj, setProj] = useState<ProjectData | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const handleOpen = (proj: ProjectData) => {
    setOpen(true);
    setProj(proj);
  };

  const handleClose = () => {
    setOpen(false);
    setProj(null);
  };

  useEffect(() => {
    if (!emblaApi) return;

    const updateBtn = () => {
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
    };

    updateBtn();

    emblaApi.on("select", updateBtn);
    emblaApi.on("reInit", updateBtn);

    return () => {
      emblaApi.off("select", updateBtn);
      emblaApi.off("reInit", updateBtn);
    };
  }, [emblaApi]);

  return (
    <>
      <Section ref={ref} title={tSec("title")}>
        <div className="relative w-full group">
          {canPrev && (
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              aria-label={tAria("prev")}
              className={cn(
                "z-90 absolute top-1/2 left-20 -translate-y-1/2 lg:grid hidden place-items-center size-12",
                "border-[1.5px] border-title rounded-full",
                "opacity-0 -translate-x-2 pointer-events-none transition-[opacity, transform] duration-300",
                "group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto",
              )}
              data-cursor-hover>
              <Icon icon={ICONS.arrows.left} className="size-6 text-title" />
            </button>
          )}
          {canNext && (
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              aria-label={tAria("next")}
              className={cn(
                "z-90 absolute top-1/2 right-20 -translate-y-1/2 lg:grid hidden place-items-center size-12",
                "border-[1.5px] border-title rounded-full",
                "opacity-0 translate-x-2 pointer-events-none transition-[opacity, transform] duration-300",
                "group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto",
              )}
              data-cursor-hover>
              <Icon icon={ICONS.arrows.right} className="size-6 text-title" />
            </button>
          )}

          <div className="w-full overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {PROJECTS.map((p, i) => (
                <div
                  key={p.id}
                  className="min-w-0 flex-none basis-full md:basis-1/2 lg:basis-1/3 px-4 md:px-6 lg:px-10">
                  <div className="flex items-center justify-center md:justify-normal">
                    <div
                      className={cn(
                        "hidden md:block flex-1 min-w-0 h-0",
                        i > 0 && "border-t border-dashed border-main",
                      )}
                    />
                    <div className="flex-none">
                      <ProjectSet
                        title={tSec(p.title)}
                        onClick={(e) => {
                          e.preventDefault();
                          handleOpen(p);
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <ProjectDetails data={proj} open={open} onOpenChange={() => setOpen(false)} />
    </>
  );
}
