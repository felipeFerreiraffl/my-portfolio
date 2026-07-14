import { cn } from "@/libs/cn";
import { ICONS } from "./icons";
import { NavLink } from "@/types/elements/elements.types";
import { HeroRingData } from "@/types/elements/data.types";

export const NAV_LINKS: NavLink[] = [
  { id: "aboutMe", label: "nav.aboutMe", icon: ICONS.nav.aboutMe },
  { id: "experiences", label: "nav.experiences", icon: ICONS.nav.experiences },
  { id: "skills", label: "nav.skills", icon: ICONS.nav.skills },
  { id: "projects", label: "nav.projects", icon: ICONS.nav.projects },
];

export const HERO_RINGS: HeroRingData[] = [
  {
    id: "dashed",
    borderWidth: 1,
    borderStyle: "dashed",
    sizeVar: "--ring-dashed-size",
    className: cn("lg:[--ring-dashed-size:65dvw] [--ring-dashed-size:164dvw]"),
  },
  {
    id: "inner-1",
    borderWidth: 2.5,
    sizeVar: "--ring-inner-1-size",
    className: cn("lg:[--ring-inner-1-size:47dvw] [--ring-inner-1-size:108dvw]"),
  },
  {
    id: "inner-2",
    borderWidth: 1.5,
    sizeVar: "--ring-inner-2-size",
    className: cn("lg:[--ring-inner-2-size:49dvw] [--ring-inner-2-size:164dvw]"),
  },
  {
    id: "outer-1",
    borderWidth: 1,
    sizeVar: "--ring-outer-1-size",
    className: cn("lg:[--ring-outer-1-size:92dvw] [--ring-outer-1-size:0]"),
    hasGradient: true,
  },
  {
    id: "outer-2",
    borderWidth: 2.5,
    sizeVar: "--ring-outer-2-size",
    className: cn("lg:[--ring-outer-2-size:94dvw] [--ring-outer-2-size:0]"),
    hasGradient: true,
  },
  {
    id: "outer-3",
    borderWidth: 1.5,
    sizeVar: "--ring-outer-3-size",
    className: cn("lg:[--ring-outer-3-size:100dvw] [--ring-outer-3-size:0]"),
    hasGradient: true,
  },
] as const;

export const SKILLS_NAMES = {
  html: "HTML",
  css: "CSS",
  javascript: "Javascript",
  typescript: "Typescript",
  reactjs: "React.js",
  nextjs: "Next.js",
  java: "Java",
  tailwind: "TailwindCSS",
  spring: "Spring",
  mysql: "MySQL",
  mongodb: "MongoDB",
  nodejs: "Node.js",
  git: "Git",
  figma: "Figma",
};
