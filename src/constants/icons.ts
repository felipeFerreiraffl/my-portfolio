import AboutAnimeManga from "@/assets/svg/aboutMe/about-anime-manga.svg";
import AboutFootball from "@/assets/svg/aboutMe/about-football.svg";
import AboutGames from "@/assets/svg/aboutMe/about-games.svg";
import ExpDev from "@/assets/svg/experiences/experience-dev.svg";
import ExpMech from "@/assets/svg/experiences/experience-mech.svg";
import ExpStar from "@/assets/svg/experiences/experience-star.svg";
import LangEn from "@/assets/svg/lang/lang-en.svg";
import LangPt from "@/assets/svg/lang/lang-pt.svg";
import NavAboutMe from "@/assets/svg/nav/nav-about-me.svg";
import NavExp from "@/assets/svg/nav/nav-experiences.svg";
import NavProj from "@/assets/svg/nav/nav-projects.svg";
import NavSkills from "@/assets/svg/nav/nav-skills.svg";
import { withFillWeight } from "@/libs/withFillWeight";
import { SVGIcon } from "@/types/elements/elements.types";
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react/ssr";
import SkillCss3 from "devicons-react/icons/Css3Plain";
import SkillFigma from "devicons-react/icons/FigmaPlain";
import SkillGit from "devicons-react/icons/GitPlain";
import SkillHtml5 from "devicons-react/icons/Html5Plain";
import SkillJava from "devicons-react/icons/JavaPlain";
import SkillJavascript from "devicons-react/icons/JavascriptPlain";
import SkillMongodb from "devicons-react/icons/MongodbPlain";
import SkillMysql from "devicons-react/icons/MysqlOriginal";
import SkillNextjs from "devicons-react/icons/NextjsPlain";
import SkillNodejs from "devicons-react/icons/NodejsPlain";
import SkillSpring from "devicons-react/icons/SpringOriginal";
import SkillTailwindcss from "devicons-react/icons/TailwindcssPlainWordmark";
import SkillTypescript from "devicons-react/icons/TypescriptPlain";
import ArrowUp from "@/assets/svg/arrows/arrow-up.svg";
import ArrowRight from "@/assets/svg/arrows/arrow-right.svg";
import ArrowLeft from "@/assets/svg/arrows/arrow-left.svg";

export const ICONS = {
  language: {
    ptBr: LangPt as SVGIcon,
    en: LangEn as SVGIcon,
  },
  nav: {
    aboutMe: NavAboutMe as SVGIcon,
    experiences: NavExp as SVGIcon,
    skills: NavSkills as SVGIcon,
    projects: NavProj as SVGIcon,
  },
  aboutMe: {
    animeManga: AboutAnimeManga as SVGIcon,
    football: AboutFootball as SVGIcon,
    games: AboutGames as SVGIcon,
  },
  experiences: {
    dev: ExpDev as SVGIcon,
    mech: ExpMech as SVGIcon,
    star: ExpStar as SVGIcon,
  },
  arrows: {
    up: ArrowUp as SVGIcon,
    right: ArrowRight as SVGIcon,
    left: ArrowLeft as SVGIcon,
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
