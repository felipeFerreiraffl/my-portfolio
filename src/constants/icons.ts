import AboutAnimeManga from "@/assets/svg/aboutMe/about-anime-manga.svg";
import AboutFootball from "@/assets/svg/aboutMe/about-football.svg";
import AboutGames from "@/assets/svg/aboutMe/about-games.svg";
import ArrowLeft from "@/assets/svg/arrows/arrow-left.svg";
import ArrowRight from "@/assets/svg/arrows/arrow-right.svg";
import ArrowUp from "@/assets/svg/arrows/arrow-up.svg";
import GenCloseX from "@/assets/svg/close-x.svg";
import GenEmail from "@/assets/svg/email.svg";
import ExpDev from "@/assets/svg/experiences/experience-dev.svg";
import ExpMech from "@/assets/svg/experiences/experience-mech.svg";
import ExpStar from "@/assets/svg/experiences/experience-star.svg";
import LangEn from "@/assets/svg/lang/lang-en.svg";
import LangPt from "@/assets/svg/lang/lang-pt.svg";
import NavAboutMe from "@/assets/svg/nav/nav-about-me.svg";
import NavExp from "@/assets/svg/nav/nav-experiences.svg";
import NavProj from "@/assets/svg/nav/nav-projects.svg";
import NavSkills from "@/assets/svg/nav/nav-skills.svg";
import SkillJava from "@/assets/svg/skills/icons/java.svg";
import SkillsBack from "@/assets/svg/skills/skills-back.svg";
import SkillsFront from "@/assets/svg/skills/skills-front.svg";
import SkillsStar from "@/assets/svg/skills/skills-star.svg";
import SkillsTools from "@/assets/svg/skills/skills-tools.svg";
import { withFillWeight } from "@/libs/withFillWeight";
import { SVGIcon } from "@/types/elements/elements.types";
import {
  SiCss,
  SiFigma,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSpring,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "@icons-pack/react-simple-icons";
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react/ssr";

export const ICONS = {
  closeX: GenCloseX as SVGIcon,
  email: GenEmail as SVGIcon,
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
  skills: {
    backend: SkillsBack as SVGIcon,
    frontend: SkillsFront as SVGIcon,
    star: SkillsStar as SVGIcon,
    tools: SkillsTools as SVGIcon,
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
  skillsIcons: {
    html5: SiHtml5,
    css3: SiCss,
    javascript: SiJavascript,
    typescript: SiTypescript,
    styledComponents: SiStyledcomponents,
    nextjs: SiNextdotjs,
    tailwind: SiTailwindcss,
    react: SiReact,
    java: SkillJava as SVGIcon,
    spring: SiSpring,
    mysql: SiMysql,
    mongodb: SiMongodb,
    nodejs: SiNodedotjs,
    git: SiGit,
    figma: SiFigma,
    vercel: SiVercel,
  },
} as const;
