import { Icon } from "@phosphor-icons/react";
import { FC, RefObject, SVGProps } from "react";

export type SVGIcon = FC<SVGProps<SVGElement>> | Icon;
export type SectionRef = RefObject<HTMLElement | null>;
export type SectionKey = "aboutMe" | "experiences" | "skills" | "projects";

export interface SectionProps {
  ref: SectionRef;
}

export interface NavLink {
  id: SectionKey;
  label: string;
  icon: SVGIcon;
}
