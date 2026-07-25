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

export default function Projects({ ref }: SectionProps) {
  const tSec = useTranslations("Projects");

  const [open, setOpen] = useState(false);
  const [proj, setProj] = useState<ProjectData | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });

  const handleOpen = (proj: ProjectData) => {
    setOpen(true);
    setProj(proj);
  };

  const handleClose = () => {
    setOpen(false);
    setProj(null);
  };

  return (
    <>
      <Section ref={ref} title={tSec("title")}>
        <div className="relative w-full group">
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
                        i > 0 && "border-t-2 border-dashed border-main",
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
