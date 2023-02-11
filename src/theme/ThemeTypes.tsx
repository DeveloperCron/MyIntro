import { color } from './color';

export type ThemeType = 'dark' | 'light';
export interface Theme {
  secondary: color;
  primary: color;
  color: color;
}
