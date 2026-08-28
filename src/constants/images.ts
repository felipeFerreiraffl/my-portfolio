import ProjAniMan1 from "@/assets/img/projects/animan/animan-1.png";
import ProjAniMan2 from "@/assets/img/projects/animan/animan-2.png";
import ProjAniMan3 from "@/assets/img/projects/animan/animan-3.png";
import ProjAniMan4 from "@/assets/img/projects/animan/animan-4.png";
import ProjAniMan5 from "@/assets/img/projects/animan/animan-5.png";
import ProjCalc1 from "@/assets/img/projects/calc/calc-1.png";
import ProjCalc2 from "@/assets/img/projects/calc/calc-2.png";
import ProjCalc3 from "@/assets/img/projects/calc/calc-3.png";
import ProjCalc4 from "@/assets/img/projects/calc/calc-4.png";
import ProjFallabackDark from "@/assets/img/projects/preview-fallback-dark.png";
import ProjFallbackLight from "@/assets/img/projects/preview-fallback-light.png";
import ProjTSAuth1 from "@/assets/img/projects/tsauth/tsauth-1.png";
import ProjTSAuth2 from "@/assets/img/projects/tsauth/tsauth-2.png";

export const IMAGES = {
  projects: {
    fallback: {
      light: ProjFallbackLight,
      dark: ProjFallabackDark,
    },
    proj_1: {
      img_1: ProjCalc1,
      img_2: ProjCalc2,
      img_3: ProjCalc3,
      img_4: ProjCalc4,
    },
    proj_2: {
      img_1: ProjAniMan1,
      img_2: ProjAniMan2,
      img_3: ProjAniMan3,
      img_4: ProjAniMan4,
      img_5: ProjAniMan5,
    },
    proj_3: {
      img_1: ProjTSAuth1,
      img_2: ProjTSAuth2,
    },
  },
} as const;
