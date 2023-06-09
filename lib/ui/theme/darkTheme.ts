import { DefaultTheme } from "styled-components";
import { HSLA } from "lib/ui/colors/HSLA";
import { sharedColors } from "./shared";

const backgroundHue = 0;
const backgroundSaturation = 0;

const backgroundLightness = 10;

export const regularTextAlpha = 0.9;

export const darkTheme: DefaultTheme = {
  name: "dark",
  colors: {
    ...sharedColors,
    foreground: new HSLA(
      backgroundHue,
      backgroundSaturation,
      backgroundLightness + 3
    ),
    background: new HSLA(
      backgroundHue,
      backgroundSaturation,
      backgroundLightness
    ),
    text: new HSLA(0, 0, 100, 0.81),
    textSupporting: new HSLA(0, 0, 61),
    textSupporting2: new HSLA(0, 0, 100, 0.44),
    textSupporting3: new HSLA(0, 0, 100, 0.28),

    backgroundGlass: new HSLA(0, 0, 100, 0.06),
    backgroundGlass2: new HSLA(0, 0, 100, 0.13),

    overlay: new HSLA(backgroundHue, backgroundSaturation, 1, 0.8),

    outlinedHover: new HSLA(0, 0, 16),

    contrast: new HSLA(0, 0, 100),
  },
  shadows: {
    small:
      "rgb(15 15 15 / 20%) 0px 0px 0px 1px, rgb(15 15 15 / 20%) 0px 2px 4px",
    medium:
      "rgb(15 15 15 / 10%) 0px 0px 0px 1px, rgb(15 15 15 / 20%) 0px 3px 6px, rgb(15 15 15 / 40%) 0px 9px 24px;",
  },
};
