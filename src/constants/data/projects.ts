import { ProjectData } from "@/types/elements/data.types";
import { ICONS } from "../icons";
import { EXTERNAL_LINKS, SKILLS_NAMES } from "../objects";
import { IMAGES } from "../images";

export const PROJECTS: ProjectData[] = [
  {
    id: "proj-1",
    title: "data.proj_1.title",
    description: "data.proj_1.desc",
    techs: [
      { icon: ICONS.skillsIcons.react, label: SKILLS_NAMES.reactjs },
      { icon: ICONS.skillsIcons.css3, label: SKILLS_NAMES.css },
      { icon: ICONS.skillsIcons.javascript, label: SKILLS_NAMES.javascript },
      { icon: ICONS.skillsIcons.vercel, label: SKILLS_NAMES.vercel },
    ],
    feats: [
      "data.proj_1.features.feat_1",
      "data.proj_1.features.feat_2",
      "data.proj_1.features.feat_3",
      "data.proj_1.features.feat_4",
    ],
    repoLink: `${EXTERNAL_LINKS.gitHub}/calculos-matematicos`,
    demoLink: "https://calculos-matematicos.vercel.app/",
    images: [
      IMAGES.projects.proj_1.img_1,
      IMAGES.projects.proj_1.img_2,
      IMAGES.projects.proj_1.img_3,
      IMAGES.projects.proj_1.img_4,
    ],
  },
  {
    id: "proj-2",
    title: "data.proj_2.title",
    description: "data.proj_2.desc",
    techs: [
      { icon: ICONS.skillsIcons.react, label: SKILLS_NAMES.reactjs },
      { icon: ICONS.skillsIcons.css3, label: SKILLS_NAMES.css },
      { icon: ICONS.skillsIcons.javascript, label: SKILLS_NAMES.javascript },
      { icon: ICONS.skillsIcons.styledComponents, label: SKILLS_NAMES.styledComponents },
      { icon: ICONS.skillsIcons.vercel, label: SKILLS_NAMES.vercel },
    ],
    feats: [
      "data.proj_2.features.feat_1",
      "data.proj_2.features.feat_2",
      "data.proj_2.features.feat_3",
      "data.proj_2.features.feat_4",
      "data.proj_2.features.feat_5",
      "data.proj_2.features.feat_6",
      "data.proj_2.features.feat_7",
    ],
    repoLink: `${EXTERNAL_LINKS.gitHub}/anime-manga-info`,
    demoLink: "https://anime-manga-info.vercel.app/",
    images: [
      IMAGES.projects.proj_2.img_1,
      IMAGES.projects.proj_2.img_2,
      IMAGES.projects.proj_2.img_3,
      IMAGES.projects.proj_2.img_4,
      IMAGES.projects.proj_2.img_5,
    ],
  },
  {
    id: "proj-3",
    title: "data.proj_3.title",
    description: "data.proj_3.desc",
    techs: [
      { icon: ICONS.skillsIcons.react, label: SKILLS_NAMES.reactjs },
      { icon: ICONS.skillsIcons.css3, label: SKILLS_NAMES.css },
      { icon: ICONS.skillsIcons.javascript, label: SKILLS_NAMES.javascript },
      { icon: ICONS.skillsIcons.java, label: SKILLS_NAMES.java },
      { icon: ICONS.skillsIcons.spring, label: SKILLS_NAMES.spring },
      { icon: ICONS.skillsIcons.mysql, label: SKILLS_NAMES.mysql },
    ],
    feats: [
      "data.proj_3.features.feat_1",
      "data.proj_3.features.feat_2",
      "data.proj_3.features.feat_3",
      "data.proj_3.features.feat_4",
    ],
    repoLink: `${EXTERNAL_LINKS.gitHub}/tsauth`,
    demoLink: "https://tsauth.vercel.app/",
    images: [IMAGES.projects.proj_3.img_1, IMAGES.projects.proj_3.img_2],
  },
];
