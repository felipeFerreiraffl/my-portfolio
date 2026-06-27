"use client";

import Icon from "@/components/ui/Icon";
import { ICONS } from "@/constants/icons";
import { usePathname, useRouter } from "@/libs/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";

export default function LanguageChanger() {
  const t = useTranslations("Header");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleSwitchLang = (newLocale: string) => {
    if (newLocale !== locale) {
      startTransition(() => {
        router.replace(pathname, { locale: newLocale, scroll: false });
      });
    }
  };

  const isLangPtBr = locale.includes("pt-br");

  return (
    <button
      className="relative group grid place-items-center md:size-12 size-10 cursor-pointer"
      onClick={() => (isLangPtBr ? handleSwitchLang("en") : handleSwitchLang("pt-br"))}
      disabled={isPending}>
      <div className="absolute top-1/2 left-1/2 -translate-1/2 md:size-12 size-10 border-main border-2 rounded-full scale-0 transition-transform duration-300 group-hover:scale-100" />
      <Icon
        icon={isLangPtBr ? ICONS.language.ptBr : ICONS.language.en}
        className="md:size-10 size-7 z-20"
        label={isLangPtBr ? t("tooltips.language.en") : t("tooltips.language.ptBr")}
      />
    </button>
  );
}
