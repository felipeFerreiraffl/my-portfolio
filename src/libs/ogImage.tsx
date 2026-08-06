import { OG_IMAGE_SIZE, SITE_AUTHOR } from "@/constants/seo";
import { routing } from "@/libs/i18n/routing";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { ImageResponse } from "next/og";

interface OgImageProps {
  params: Promise<{ locale: string }>;
}

const resolveLocale = async (params: OgImageProps["params"]) => {
  const { locale: requested } = await params;
  return hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;
};

/**
 * O `alt` precisa vir daqui (e não de um `export const alt`) para poder ser
 * traduzido por locale — é o texto que leitores de tela leem no card social.
 */
export const generateOgImageMetadata = async ({ params }: OgImageProps) => {
  const locale = await resolveLocale(params);
  const t = await getTranslations({ locale, namespace: "Meta" });

  return [
    {
      id: "default",
      alt: t("ogAlt", { name: SITE_AUTHOR.name }),
      size: OG_IMAGE_SIZE,
      contentType: "image/png",
    },
  ];
};

export const renderOgImage = async ({ params }: OgImageProps) => {
  const { locale: requested } = await params;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  const t = await getTranslations({ locale, namespace: "Meta" });
  const tHero = await getTranslations({ locale, namespace: "Hero" });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "96px",
          backgroundColor: "#0b0b0f",
          backgroundImage: "radial-gradient(circle at 20% 15%, #1f2937 0%, #0b0b0f 60%)",
          color: "#f5f5f5",
        }}>
        <span style={{ fontSize: 34, letterSpacing: "0.24em", color: "#9ca3af" }}>
          {tHero("role").toUpperCase()}
        </span>

        <span style={{ fontSize: 104, fontWeight: 700, marginTop: 24, lineHeight: 1.05 }}>
          {SITE_AUTHOR.name}
        </span>

        <span style={{ fontSize: 44, marginTop: 28, color: "#d1d5db" }}>{t("ogTagline")}</span>

        <div
          style={{
            display: "flex",
            marginTop: 64,
            height: 8,
            width: 240,
            borderRadius: 999,
            backgroundColor: "#60a5fa",
          }}
        />
      </div>
    ),
    OG_IMAGE_SIZE
  );
};
