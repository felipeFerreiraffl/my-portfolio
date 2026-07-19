import { ExperienceData } from "@/types/elements/data.types";
import { ICONS } from "./icons";

export const EXPERIENCES: ExperienceData[] = [
  {
    id: "exp-1",
    title: "exp_1.title",
    icon: ICONS.experiences.dev,
    type: "academic",
    place: "exp_1.place",
    initialTime: {
      month: "months.jul",
      year: 2023,
    },
    endingTime: {
      month: "months.dec",
      year: 2024,
    },
    description: "exp_1.description",
    skills: [
      "exp_1.skills.fullstack",
      "exp_1.skills.hardware",
      "exp_1.skills.network",
      "exp_1.skills.office",
    ],
  },
  {
    id: "exp-2",
    title: "exp_2.title",
    icon: ICONS.experiences.mech,
    type: "work",
    place: "exp_2.place",
    initialTime: {
      month: "months.jul",
      year: 2023,
    },
    endingTime: {
      month: "months.jul",
      year: 2025,
    },
    description: "exp_2.description",
    skills: ["exp_2.skills.teamwork", "exp_2.skills.details"],
  },
  {
    id: "exp-3",
    title: "exp_3.title",
    icon: ICONS.experiences.star,
    type: "work",
    place: "exp_3.place",
    initialTime: {
      month: "months.feb",
      year: 2026,
    },
    description: "exp_1.description",
    skills: [
      "exp_1.skills.fullstack",
      "exp_1.skills.hardware",
      "exp_1.skills.network",
      "exp_1.skills.office",
    ],
  },
];
