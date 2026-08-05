import { SkillsData } from "@/types/elements/data.types";
import { ICONS } from "../icons";
import { SKILLS_NAMES } from "../objects";

export const SKILLS: SkillsData[] = [
  {
    id: "ski-1",
    title: "frontend.title",
    skills: [
      {
        icon: ICONS.skillsIcons.html5,
        label: SKILLS_NAMES.html,
        isMostUsed: true,
        level: "advanced",
      },
      {
        icon: ICONS.skillsIcons.css3,
        label: SKILLS_NAMES.css,
        isMostUsed: true,
        level: "advanced",
      },
      {
        icon: ICONS.skillsIcons.javascript,
        label: SKILLS_NAMES.javascript,
        isMostUsed: true,
        level: "advanced",
      },
      {
        icon: ICONS.skillsIcons.typescript,
        label: SKILLS_NAMES.typescript,
        isMostUsed: true,
        level: "intermediate",
      },
      {
        icon: ICONS.skillsIcons.react,
        label: SKILLS_NAMES.reactjs,
        isMostUsed: true,
        level: "advanced",
      },
      {
        icon: ICONS.skillsIcons.nextjs,
        label: SKILLS_NAMES.nextjs,
        isMostUsed: true,
        level: "advanced",
      },
      {
        icon: ICONS.skillsIcons.tailwind,
        label: SKILLS_NAMES.tailwind,
        isMostUsed: true,
        level: "advanced",
      },
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
      { icon: ICONS.skillsIcons.java, label: SKILLS_NAMES.java, level: "intermediate" },
      { icon: ICONS.skillsIcons.spring, label: SKILLS_NAMES.spring, level: "basic" },
      { icon: ICONS.skillsIcons.mysql, label: SKILLS_NAMES.mysql, level: "intermediate" },
      { icon: ICONS.skillsIcons.mongodb, label: SKILLS_NAMES.mongodb, level: "basic" },
      {
        icon: ICONS.skillsIcons.nodejs,
        label: SKILLS_NAMES.nodejs,
        isMostUsed: true,
        level: "intermediate",
      },
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
      {
        icon: ICONS.skillsIcons.git,
        label: SKILLS_NAMES.git,
        isMostUsed: true,
        level: "intermediate",
      },
      {
        icon: ICONS.skillsIcons.figma,
        label: SKILLS_NAMES.figma,
        isMostUsed: true,
        level: "expert",
      },
    ],
    illustration: {
      icon: ICONS.skills.tools,
      label: "tools.alt",
    },
  },
];
