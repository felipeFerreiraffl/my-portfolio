import HomeScreen from "@/components/screens/Home";
import { routing } from "@/libs/i18n/routing";
import { setRequestLocale } from "next-intl/server";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;

  // Mantém a página elegível para renderização estática
  setRequestLocale(locale);

  return <HomeScreen />;
}
