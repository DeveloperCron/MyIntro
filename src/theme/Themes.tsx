import { ThemeType, Theme } from './ThemeTypes';
import { color } from './color';

const Themes: Record<ThemeType, Theme> = {
  light: {
    primary: color.WHITE,
    secondary: color.PURPLE,
    color: color.BLACK,
    third: color.BRIGHTGREY,
  },
  dark: {
    primary: color.GREY,
    secondary: color.PURPLE,
    color: color.WHITE,
    third: color.BRIGHTBLACK,
  },
};
export { Themes };
