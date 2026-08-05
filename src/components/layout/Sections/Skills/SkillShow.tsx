"use client";

import Icon from "@/components/ui/Icon";
import { ICONS } from "@/constants/icons";
import { SkillIcon, SkillLevel } from "@/types/elements/data.types";

interface SkillShowProps {
  data: SkillIcon;
}

export default function SkillShow({ data }: SkillShowProps) {
  const handleSkillLevel = (level: SkillLevel) => {
    switch (level) {
      case "basic":
        return <span className="size-1 rounded-full bg-main"></span>;
      case "intermediate":
        return (
          <>
            <span className="size-1 rounded-full bg-main"></span>
            <div className="w-1 h-[0.5px] bg-main" />
            <span className="size-1 rounded-full bg-main"></span>
          </>
        );
      case "advanced":
        return (
          <>
            <span className="size-1 rounded-full bg-main"></span>
            <div className="w-1 h-[0.5px] bg-main" />
            <span className="size-1 rounded-full bg-main"></span>
            <div className="w-1 h-[0.5px] bg-main" />
            <span className="size-1 rounded-full bg-main"></span>
          </>
        );
      case "expert":
        return (
          <>
            <span className="size-1 rounded-full bg-main"></span>
            <div className="w-1 h-[0.5px] bg-main" />
            <span className="size-1 rounded-full bg-main"></span>
            <div className="w-1 h-[0.5px] bg-main" />
            <span className="size-1 rounded-full bg-main"></span>
            <div className="w-1 h-[0.5px] bg-main" />
            <span className="size-1 rounded-full bg-main"></span>
          </>
        );
    }
  };

  return (
    <div className="flex flex-col items-center gap-1">
      <Icon icon={data.icon} className="md:size-12 size-8 text-title" ariaLabel={data.label} />
      <div className="flex items-center">{handleSkillLevel(data.level)}</div>

      {data.isMostUsed && (
        <Icon
          icon={ICONS.skills.star}
          className="absolute md:-top-1 md:right-1 -top-1 right-0 md:size-5 size-3 text-star z-20"
        />
      )}
    </div>
  );
}
