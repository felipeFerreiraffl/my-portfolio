const resolveSiteUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  return "http://localhost:3000";
};

export const SITE_URL = resolveSiteUrl().replace(/\/$/, "");

export const SITE_AUTHOR = {
  name: "Felipe Ferreira Lima",
  firstName: "Felipe",
  lastName: "Ferreira Lima",
  handle: "felipeFerreiraffl",
};

// Cor da barra do navegador, por tema. Equivale a --color-bg em _themes.css.
export const THEME_COLORS = {
  light: "#f6f6f6",
  dark: "#010005",
};

export const OG_IMAGE_SIZE = { width: 1200, height: 630 };

// Keys are locale codes from routing.ts, so they can't follow the camelCase key rule.
export const OG_LOCALES: Record<string, string> = {
  "pt-br": "pt_BR",
  en: "en_US",
};

export const HREFLANGS: Record<string, string> = {
  "pt-br": "pt-BR",
  en: "en",
};
