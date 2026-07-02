import { NAV_LINKS } from "@/constants/objects";
import LanguageChanger from "./LanguageChanger";
import ThemeChanger from "./ThemeChanger";
import Icon from "@/components/ui/Icon";

export default function MobileNav() {
  return (
    <nav className="md:hidden w-[90dvw] fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-between bg-main/20 border-[0.5px] border-main rounded-[40px] py-3 px-5 backdrop-blur-md">
      <ThemeChanger />
      <ul className="flex items-center gap-3">
        {NAV_LINKS.map((link) => (
          <li key={link.id}>
            <a href="#">
              <Icon icon={link.icon} className="bg-main/20 p-2 rounded-full text-text size-8" />
            </a>
          </li>
        ))}
      </ul>
      <LanguageChanger />
    </nav>
  );
}
