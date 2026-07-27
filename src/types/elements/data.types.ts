import { SVGIcon } from "./elements.types";

export interface HeroRingData {
  id: string;
  sizeVar: string;
  borderWidth: number;
  borderStyle?: string;
  className: string;
  hasGradient?: boolean;
}

export interface ExperienceData {
  id: `exp-${number}`;
  title: string;
  icon: SVGIcon;
  place: string;
  initialTime: {
    month: string;
    year: number;
  };
  endingTime?: {
    month: string;
    year: number;
  };
  type: "academic" | "work";
  description: string;
  skills: string[];
}

interface SkillIcon {
  icon: SVGIcon;
  label: string;
  isMostUsed?: boolean;
}

export interface SkillsData {
  id: `ski-${number}`;
  title: string;
  skills: SkillIcon[];
  illustration: {
    icon: SVGIcon;
    label?: string;
  };
}

export interface ProjectData {
  id: `proj-${number}`;
  title: string;
  description: string;
  techs: SkillIcon[];
  feats: string[];
  repoLink: string;
  demoLink?: string;
  previewSrc?: ImageData;
}
