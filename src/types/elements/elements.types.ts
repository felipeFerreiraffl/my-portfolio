import { Icon } from "@phosphor-icons/react";
import { StaticImageData } from "next/image";
import { FC, SVGProps } from "react";

export type SVGIcon = FC<SVGProps<SVGElement>> | Icon;
