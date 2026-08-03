"use client";

import Tooltip from "@/components/ui/Tooltip";
import { cn } from "@/libs/cn";
import { useIsHydrated } from "@/hooks/useIsHydrated";
import { useTheme } from "@teispace/next-themes";
import { useTranslations } from "next-intl";

export default function ThemeChanger() {
  const t = useTranslations("Header");
  const { resolvedTheme, setTheme } = useTheme();

  // O tema só é conhecido no cliente (o servidor renderiza estático), então o
  // primeiro render precisa bater com o do servidor para não gerar mismatch.
  const isHydrated = useIsHydrated();
  const isDark = isHydrated && resolvedTheme === "dark";

  return (
    <div
      className={cn(
        "group relative cursor-pointer",
        "grid place-items-center md:size-12 size-8 border-main border-2 rounded-full",
      )}
      data-cursor-hover>
      <div className="absolute top-1/2 left-1/2 -translate-1/2 md:size-10 size-5 border-main border-[1.5px] rounded-full shrink-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-1/2 md:size-4 size-2 border-main border-[1.5px] rounded-full transition-all duration-300 group-hover:size-7 shrink-0"></div>
      <div className="md:size-4 size-2 scale-0 bg-main rounded-full transition-transform duration-300 group-hover:scale-100 shrink-0"></div>

      {/* Gatilho real: mantém o Tooltip fora do <button> e habilita teclado */}
      <button
        type="button"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        aria-label={isDark ? t("tooltips.theme.light") : t("tooltips.theme.dark")}
        className="absolute inset-0 rounded-full cursor-pointer"
      />

      <Tooltip
        label={isDark ? t("tooltips.theme.light") : t("tooltips.theme.dark")}
        className="bottom-8 right-8"
      />
    </div>
  );
}
