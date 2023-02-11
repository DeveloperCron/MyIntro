import { ThemeType, Theme } from './ThemeTypes';
import { color } from './color';

const Themes: Record<ThemeType, Theme> = {
  light: {
    primary: color.WHITE,
    secondary: color.PURPLE,
    color: color.BLACK,
  },
  dark: {
    primary: color.GREY,
    secondary: color.PURPLE,
    color: color.WHITE,
  },
};
export { Themes };
