import Cursor from "@/components/ui/Cursor";
import { AVAILABLE_THEMES } from "@/constants/elements";
import { EXTERNAL_LINKS } from "@/constants/objects";
import { SITE_AUTHOR, SITE_URL } from "@/constants/seo";
import { SectionRefsProvider } from "@/contexts/sectionRefs.context";
import { routing } from "@/libs/i18n/routing";
import SmoothScrollProvider from "@/libs/smoothScroll";
import "@/styles/globals.css";
import {
  buildAlternateOgLocales,
  buildKnownLanguages,
  buildLanguageAlternates,
  buildLocaleUrl,
  buildOgLocale,
} from "@/utils/seo.util";
import { ThemeProvider } from "@teispace/next-themes";
import { getTheme } from "@teispace/next-themes/server";
import { domAnimation, LazyMotion } from "motion/react";
import { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { Space_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

interface LocaleRoutingProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

type LocaleMetadataProps = Omit<LocaleRoutingProps, "children">;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleMetadataProps): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // The locale is passed explicitly so the route stays eligible for static rendering.
  const t = await getTranslations({ locale, namespace: "Meta" });

  const title = t("title", { name: SITE_AUTHOR.name });
  const description = t("description");
  const siteName = t("siteName", { name: SITE_AUTHOR.name });
  const url = buildLocaleUrl(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: t("titleTemplate", { name: SITE_AUTHOR.name }),
    },
    description,
    applicationName: siteName,
    keywords: t("keywords")
      .split(",")
      .map((keyword) => keyword.trim()),
    authors: [{ name: SITE_AUTHOR.handle, url: EXTERNAL_LINKS.gitHub }],
    creator: SITE_AUTHOR.name,
    publisher: SITE_AUTHOR.name,
    category: "technology",
    icons: {
      icon: [{ url: "/favicon.ico" }],
      shortcut: ["/favicon.ico"],
    },
    formatDetection: { email: false, address: false, telephone: false },
    alternates: {
      canonical: url,
      languages: buildLanguageAlternates(),
    },
    openGraph: {
      type: "profile",
      firstName: SITE_AUTHOR.firstName,
      lastName: SITE_AUTHOR.lastName,
      username: SITE_AUTHOR.handle,
      title,
      description,
      siteName,
      url,
      locale: buildOgLocale(locale),
      alternateLocale: buildAlternateOgLocales(locale),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

const spaceGrotesk = Space_Grotesk({
  display: "auto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space_grotesk",
});

export default async function RootLayout({ children, params }: LocaleRoutingProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const initialTheme = await getTheme();
  const messages = await getMessages();
  const plainMessages = JSON.parse(JSON.stringify(messages));

  const tMeta = await getTranslations({ locale, namespace: "Meta" });
  const tHero = await getTranslations({ locale, namespace: "Hero" });

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_AUTHOR.name,
    alternateName: SITE_AUTHOR.handle,
    url: buildLocaleUrl(locale),
    email: `mailto:${EXTERNAL_LINKS.email}`,
    jobTitle: tHero("role"),
    description: tMeta("description"),
    knowsLanguage: buildKnownLanguages(),
    sameAs: [EXTERNAL_LINKS.gitHub, EXTERNAL_LINKS.linkedIn],
  };

  return (
    <html lang={locale} className={`${spaceGrotesk.className}`} suppressHydrationWarning>
      <LazyMotion features={domAnimation}>
        <body>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
          />
          <SmoothScrollProvider>
            <ThemeProvider
              attribute="class"
              initialTheme={initialTheme ?? "light"}
              themes={AVAILABLE_THEMES}
              transition={{
                type: "fade",
                duration: 300,
                origin: "center",
              }}>
              <NextIntlClientProvider
                locale={locale}
                messages={plainMessages}
                now={new Date()}
                timeZone="America/Sao_Paulo">
                <SectionRefsProvider>
                  <Cursor />
                  {children}
                </SectionRefsProvider>
              </NextIntlClientProvider>
            </ThemeProvider>
          </SmoothScrollProvider>
        </body>
      </LazyMotion>
    </html>
  );
}
