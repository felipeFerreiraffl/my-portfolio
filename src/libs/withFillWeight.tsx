import type { IconProps, Icon as PhosphorIcon } from "@phosphor-icons/react";
import { forwardRef } from "react";

export const withFillWeight = (IconComponent: PhosphorIcon): PhosphorIcon => {
  return forwardRef<SVGSVGElement, IconProps>((props, ref) => (
    <IconComponent {...props} ref={ref} weight="fill" />
  )) as PhosphorIcon;
};
