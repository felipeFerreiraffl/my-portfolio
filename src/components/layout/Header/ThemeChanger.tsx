export default function ThemeChanger() {
  return (
    <div className="relative group cursor-pointer grid place-items-center size-12 border-main border-2 rounded-full">
      <div className="absolute top-1/2 left-1/2 -translate-1/2 size-10 border-main border-[1.5px] rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 -translate-1/2 size-4 border-main border-[1.5px] rounded-full transition-all duration-300 group-hover:size-7"></div>
      <div className="size-4 scale-0 bg-main rounded-full transition-transform duration-300 group-hover:scale-100"></div>
    </div>
  );
}
