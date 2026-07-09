import LangPt from "@/assets/svg/lang/lang-pt.svg";
import LangEn from "@/assets/svg/lang/lang-en.svg";
import NavAboutMe from "@/assets/svg/nav/nav-about-me.svg";
import NavExp from "@/assets/svg/nav/nav-experiences.svg";
import NavSkills from "@/assets/svg/nav/nav-skills.svg";
import NavProj from "@/assets/svg/nav/nav-projects.svg";
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react/ssr";
import SkillHtml5 from "devicons-react/icons/Html5Plain";
import SkillCss3 from "devicons-react/icons/Css3Plain";
import SkillJavascript from "devicons-react/icons/JavascriptPlain";
import SkillTypescript from "devicons-react/icons/TypescriptPlain";
import SkillNextjs from "devicons-react/icons/NextjsPlain";
import SkillTailwindcss from "devicons-react/icons/TailwindcssPlainWordmark";
import SkillJava from "devicons-react/icons/JavaPlain";
import SkillSpring from "devicons-react/icons/SpringOriginal";
import SkillMysql from "devicons-react/icons/MysqlOriginal";
import SkillMongodb from "devicons-react/icons/MongodbPlain";
import SkillNodejs from "devicons-react/icons/NodejsPlain";
import SkillGit from "devicons-react/icons/GitPlain";
import SkillFigma from "devicons-react/icons/FigmaPlain";
import { withFillWeight } from "@/libs/withFillWeight";

export const ICONS = {
  language: {
    ptBr: LangPt,
    en: LangEn,
  },
  nav: {
    aboutMe: NavAboutMe,
    experiences: NavExp,
    skills: NavSkills,
    projects: NavProj,
  },
  social: {
    gitHub: withFillWeight(GithubLogoIcon),
    linkedIn: withFillWeight(LinkedinLogoIcon),
  },
  skills: {
    html5: SkillHtml5,
    css3: SkillCss3,
    javascript: SkillJavascript,
    typescript: SkillTypescript,
    nextjs: SkillNextjs,
    tailwind: SkillTailwindcss,
    java: SkillJava,
    spring: SkillSpring,
    mysql: SkillMysql,
    mongodb: SkillMongodb,
    nodejs: SkillNodejs,
    git: SkillGit,
    figma: SkillFigma,
  },
} as const;
