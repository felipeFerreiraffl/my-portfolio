import { SkillsData } from "@/types/elements/data.types";
import { ICONS } from "../icons";
import { SKILLS_NAMES } from "../objects";

export const SKILLS: SkillsData[] = [
  {
    id: "ski-1",
    title: "frontend.title",
    skills: [
      { icon: ICONS.skillsIcons.html5, label: SKILLS_NAMES.html, isMostUsed: true },
      { icon: ICONS.skillsIcons.css3, label: SKILLS_NAMES.css, isMostUsed: true },
      { icon: ICONS.skillsIcons.javascript, label: SKILLS_NAMES.javascript, isMostUsed: true },
      { icon: ICONS.skillsIcons.typescript, label: SKILLS_NAMES.typescript, isMostUsed: true },
      { icon: ICONS.skillsIcons.nextjs, label: SKILLS_NAMES.nextjs, isMostUsed: true },
      { icon: ICONS.skillsIcons.tailwind, label: SKILLS_NAMES.tailwind, isMostUsed: true },
    ],
    illustration: {
      icon: ICONS.skills.frontend,
      label: "frontend.alt",
    },
  },
  {
    id: "ski-2",
    title: "backend.title",
    skills: [
      { icon: ICONS.skillsIcons.java, label: SKILLS_NAMES.java },
      { icon: ICONS.skillsIcons.spring, label: SKILLS_NAMES.spring },
      { icon: ICONS.skillsIcons.mysql, label: SKILLS_NAMES.mysql },
      { icon: ICONS.skillsIcons.mongodb, label: SKILLS_NAMES.mongodb },
      { icon: ICONS.skillsIcons.nodejs, label: SKILLS_NAMES.nodejs, isMostUsed: true },
    ],
    illustration: {
      icon: ICONS.skills.backend,
      label: "backend.alt",
    },
  },
  {
    id: "ski-3",
    title: "tools.title",
    skills: [
      { icon: ICONS.skillsIcons.git, label: SKILLS_NAMES.git, isMostUsed: true },
      { icon: ICONS.skillsIcons.figma, label: SKILLS_NAMES.figma, isMostUsed: true },
    ],
    illustration: {
      icon: ICONS.skills.tools,
      label: "tools.alt",
    },
  },
];
