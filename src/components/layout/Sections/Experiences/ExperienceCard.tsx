"use client";

import Icon from "@/components/ui/Icon";
import { SVGIcon } from "@/types/elements/elements.types";

interface ExperienceCardProps {
  title: string;
  icon: SVGIcon;
  location: string;
  dateTime: string;
  type: "academic" | "work";
  description: string;
  skills: string[];
}

export default function ExperienceCard({
  title,
  icon,
  location,
  dateTime,
  type,
  description,
  skills,
}: ExperienceCardProps) {
  return (
    <article className="w-full flex flex-col items-center gap-1">
      <div className="w-full flex items-center">
        <div className="grid place-items-center size-4 border-[1.5px] border-main rounded-full">
          <div className="size-2 bg-main rounded-full" />
        </div>
        <div className="w-full h-[0.5px] bg-main" />
        <div className="grid place-items-center size-4 border-[1.5px] border-main rounded-full">
          <div className="size-2 bg-main rounded-full" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-10 mx-2 py-5 border-l border-r border-main">
        <div className="flex justify-center gap-5">
          <div className="md:block hidden size-3 bg-text rotate-45 my-3" />
          <div className="flex flex-col items-center gap-3 text-center">
            <h3 className="md:text-[2rem] text-2xl font-bold leading-heading text-title">
              {title}
            </h3>
            <div className="flex flex-col items-center gap-1">
              <p className="md:text-xl text-base font-medium md:leading-heading leading-body text-text">
                {location}
              </p>
              <span className="md:text-lg text-sm leading-body text-gray">{dateTime}</span>
            </div>
            <div className="flex items-center gap-2 bg-study/60 py-2 px-4 rounded-[20px]">
              <div className="size-1 bg-text rotate-45" />
              <span className="text-base leading-body text-text">
                {type === "academic" ? "academicTag" : "workTag"}
              </span>
              <div className="size-1 bg-text rotate-45" />
            </div>
          </div>
          <div className="md:block hidden size-3 bg-text rotate-45 my-3" />
        </div>

        <div className="w-full lg:grid lg:grid-cols-3 flex flex-col lg:gap-20 gap-5 lg:place-items-center">
          <div className="relative lg:grid hidden place-items-center size-72 rounded-full border-[1.5px] border-main">
            <div className="absolute top-1/2 left-1/2 -translate-1/2 rotate-45 size-47 border border-main" />
            <Icon icon={icon} className="size-25 text-main" />
          </div>

          <ul className="w-full flex flex-col gap-5 col-span-2">
            <li className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="size-2 bg-text rounded-full" />
                <h4 className="md:text-xl text-lg font-medium leading-heading text-text">
                  Descrição
                </h4>
              </div>
              <p className="pl-5 md:text-base text-sm leading-body text-text">{description}</p>
            </li>
            <li className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="size-2 bg-text rounded-full" />
                <h4 className="md:text-xl text-lg font-medium leading-heading text-text">
                  Habilidades
                </h4>
              </div>
              <div className="w-full flex gap-2 flex-wrap">
                {skills.map((s) => (
                  <span className="bg-main/20 border-[0.5px] border-main py-2 px-3 rounded-[20px] md:text-sm text-xs leading-body text-text">
                    {s}
                  </span>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full flex items-center">
        <div className="grid place-items-center size-4 border-[1.5px] border-main rounded-full">
          <div className="size-2 bg-main rounded-full" />
        </div>
        <div className="w-full h-[0.5px] bg-main" />
        <div className="grid place-items-center size-4 border-[1.5px] border-main rounded-full">
          <div className="size-2 bg-main rounded-full" />
        </div>
      </div>
    </article>
  );
}
