import type { IconProps, Icon as PhosphorIcon } from "@phosphor-icons/react";
import { forwardRef } from "react";

export const withFillWeight = (IconComponent: PhosphorIcon): PhosphorIcon => {
  const FilledIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
    <IconComponent {...props} ref={ref} weight="fill" />
  ));

  FilledIcon.displayName = `withFillWeight(${IconComponent.displayName ?? "Icon"})`;

  return FilledIcon as PhosphorIcon;
};
