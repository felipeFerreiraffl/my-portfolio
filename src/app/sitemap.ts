import { routing } from "@/libs/i18n/routing";
import { buildLanguageAlternates, buildLocaleUrl } from "@/utils/seo.util";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = buildLanguageAlternates();

  return routing.locales.map((locale) => ({
    url: buildLocaleUrl(locale),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === routing.defaultLocale ? 1 : 0.8,
    alternates: { languages },
  }));
}
