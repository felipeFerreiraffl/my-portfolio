import { IconType } from "@icons-pack/react-simple-icons";
import { Icon } from "@phosphor-icons/react";
import { FC, Ref, SVGProps } from "react";

export type SVGIcon = FC<SVGProps<SVGElement>> | Icon | IconType;
export type SectionRef = Ref<HTMLElement>;
export type SectionKey = "aboutMe" | "experiences" | "skills" | "projects";

export interface SectionProps {
  ref: SectionRef;
}

export interface NavLink {
  id: SectionKey;
  label: string;
  icon: SVGIcon;
}
