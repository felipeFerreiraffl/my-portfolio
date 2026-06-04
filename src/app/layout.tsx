import "@/styles/globals.css";
import { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { ReactNode } from "react";

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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.className}`}>
      <body>{children}</body>
    </html>
  );
}
