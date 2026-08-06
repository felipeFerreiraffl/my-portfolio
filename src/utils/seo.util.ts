import { HREFLANGS, OG_LOCALES, SITE_URL } from "@/constants/seo";
import { routing } from "@/libs/i18n/routing";

export const buildLocaleUrl = (locale: string) => `${SITE_URL}/${locale}`;

export const buildLanguageAlternates = () => {
  const alternates: Record<string, string> = {};

  routing.locales.forEach((locale) => {
    alternates[HREFLANGS[locale] ?? locale] = buildLocaleUrl(locale);
  });
  alternates["x-default"] = buildLocaleUrl(routing.defaultLocale);

  return alternates;
};

export const buildKnownLanguages = () =>
  routing.locales.map((locale) => HREFLANGS[locale] ?? locale);

export const buildOgLocale = (locale: string) => OG_LOCALES[locale] ?? locale;

export const buildAlternateOgLocales = (locale: string) =>
  routing.locales.filter((item) => item !== locale).map(buildOgLocale);
