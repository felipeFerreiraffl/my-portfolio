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
