import { AVAILABLE_THEMES } from "@/constants/elements";
import { routing } from "@/libs/i18n/routing";
import "@/styles/globals.css";
import { ThemeProvider } from "@teispace/next-themes";
import { getTheme } from "@teispace/next-themes/server";
import { domAnimation, LazyMotion } from "motion/react";
import { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Space_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";
import { ReactNode } from "react";

interface LocaleRoutingProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export const metadata: Metadata = {
  title: "Portfolio — Felipe Ferreira",
  description:
    "Portfólio profissional feito por Felipe Ferreira, para demonstrar as habilidades, experiências e projetos",
  icons: {
    icon: [{ url: "/favicon.ico" }],
    shortcut: ["/favicon.ico"],
  },
  authors: {
    name: "felipeFerreiraffl",
    url: "https://github.com/felipeFerreiraffl",
  },
};

const spaceGrotesk = Space_Grotesk({
  display: "auto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space_grotesk",
});

export default async function RootLayout({ children, params }: LocaleRoutingProps) {
  const initialTheme = await getTheme();
  const messages = await getMessages();
  const plainMessages = JSON.parse(JSON.stringify(messages));

  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={`${spaceGrotesk.className}`} suppressHydrationWarning>
      <LazyMotion features={domAnimation}>
        <body>
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
              {children}
            </NextIntlClientProvider>
          </ThemeProvider>
        </body>
      </LazyMotion>
    </html>
  );
}
