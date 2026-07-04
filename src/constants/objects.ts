import { cn } from "@/libs/cn";
import { ICONS } from "./icons";

export const NAV_LINKS = [
  { id: 1, label: "nav.aboutMe", icon: ICONS.nav.aboutMe },
  { id: 2, label: "nav.experiences", icon: ICONS.nav.experiences },
  { id: 3, label: "nav.skills", icon: ICONS.nav.skills },
  { id: 4, label: "nav.projects", icon: ICONS.nav.projects },
];

export const HERO_RINGS: HeroRingData[] = [
  {
    id: "dashed",
    borderWidth: 1,
    borderStyle: "dashed",
    sizeVar: "--ring-dashed-size",
    className: cn("lg:[--ring-dashed-size:65dvw] [--ring-dashed-size:164dvw]"),
    hasGradient: true,
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
];
