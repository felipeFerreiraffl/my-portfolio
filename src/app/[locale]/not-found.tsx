import Button from "@/components/ui/Button";
import { Link } from "@/libs/i18n/navigation";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <main className="w-full min-h-dvh grid place-items-center md:px-12 px-7">
      <div className="flex flex-col items-center gap-8 text-center">
        <div className="flex items-center gap-3">
          <div className="size-3 bg-main rotate-45" />
          <span className="md:text-[5rem] text-6xl font-bold leading-heading text-main">404</span>
          <div className="size-3 bg-main rotate-45" />
        </div>

        <div className="flex flex-col items-center gap-2">
          <h1 className="md:text-4xl text-2xl font-bold leading-heading text-title">
            {t("title")}
          </h1>
          <p className="md:text-lg text-base leading-body text-gray max-w-prose">
            {t("description")}
          </p>
        </div>

        <Link href="/">
          <Button label={t("backHome")} />
        </Link>
      </div>
    </main>
  );
}
