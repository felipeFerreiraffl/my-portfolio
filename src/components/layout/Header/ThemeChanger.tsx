"use client";

import Tooltip from "@/components/ui/Tooltip";
import { cn } from "@/libs/cn";
import { useTheme } from "@teispace/next-themes";
import { useTranslations } from "next-intl";

export default function ThemeChanger() {
  const t = useTranslations("Header");
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <div
      role="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "group relative group cursor-pointer",
        "grid place-items-center md:size-12 size-8 border-main border-2 rounded-full",
      )}
      data-cursor-hover>
      <div className="absolute top-1/2 left-1/2 -translate-1/2 md:size-10 size-5 border-main border-[1.5px] rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 -translate-1/2 md:size-4 size-2 border-main border-[1.5px] rounded-full transition-all duration-300 group-hover:size-7"></div>
      <div className="md:size-4 size-2 scale-0 bg-main rounded-full transition-transform duration-300 group-hover:scale-100"></div>

      <Tooltip
        label={isDark ? t("tooltips.theme.light") : t("tooltips.theme.dark")}
        className="bottom-8 right-8"
      />
    </div>
  );
}
