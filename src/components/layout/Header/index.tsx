import { navLinks } from "@/constants/objects";
import ThemeChanger from "./ThemeChanger";
import LanguageChanger from "./LanguageChanger";

export default function Header() {
  return (
    <header className="fixed top-10 left-1/2 -translate-x-1/2 flex items-center gap-20 bg-main/20 border-[0.5px] border-main rounded-[40px] py-3 px-10 backdrop-blur-md">
      <ThemeChanger />
      <nav>
        <ul className="flex items-center gap-5">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href="#"
                className="text-sm font-bold text-text transition-colors duration-300 hover:text-main">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <LanguageChanger />
    </header>
  );
}
