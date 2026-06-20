import { availableThemes } from "@/constants/objects";
import "@/styles/globals.css";
import { Metadata } from "next";
import { ThemeProvider } from "@teispace/next-themes";
import { Space_Grotesk } from "next/font/google";
import { ReactNode } from "react";
import { getTheme } from "@teispace/next-themes/server";

export const meta: Metadata = {
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

export default async function RootLayout({ children }: { children: ReactNode }) {
  const initialTheme = await getTheme();

  return (
    <html lang="pt-BR" className={`${spaceGrotesk.className}`} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          initialTheme={initialTheme ?? "light"}
          themes={availableThemes}
          transition={{
            type: "fade",
            duration: 300,
            origin: "center",
          }}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
