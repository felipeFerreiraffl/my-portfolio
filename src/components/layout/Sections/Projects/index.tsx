"use client";

import Section from "@/components/ui/Section";
import { SectionProps } from "@/types/elements/elements.types";
import { useTranslations } from "next-intl";
import ProjectSet from "./ProjectSet";
import { PROJECTS } from "@/constants/data";
import { useState } from "react";
import { ProjectData } from "@/types/elements/data.types";
import ProjectDetails from "./ProjectDetails";

export default function Projects({ ref }: SectionProps) {
  const tSec = useTranslations("Projects");

  const [open, setOpen] = useState(false);
  const [proj, setProj] = useState<ProjectData | null>(null);

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
        {PROJECTS.map((p) => (
          <ProjectSet
            key={p.id}
            title={tSec(p.title)}
            onClick={(e) => {
              e.preventDefault();
              handleOpen(p);
            }}
          />
        ))}
      </Section>

      <ProjectDetails data={proj} open={open} onOpenChange={() => setOpen(false)} />
    </>
  );
}
