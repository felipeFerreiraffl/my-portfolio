import Icon from "@/components/ui/Icon";
import { ICONS } from "@/constants/icons";

export default function LanguageChanger() {
  return (
    <div className="relative group grid place-items-center size-12 cursor-pointer">
      <div className="absolute top-1/2 left-1/2 -translate-1/2 size-12 border-main border-2 rounded-full scale-0 transition-transform duration-300 group-hover:scale-100" />
      <Icon icon={ICONS.language.ptBr} className="size-10 z-20" label="Trocar linguagem" />
    </div>
  );
}
