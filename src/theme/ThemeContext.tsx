import React, { Dispatch, ReactElement, SetStateAction } from 'react';
import { Themes } from './Themes';
import { ThemeType, Theme } from './ThemeTypes';

interface ThemeContextProps {
  themeType: ThemeType;
  theme: Theme;
  setCurrentTheme: Dispatch<SetStateAction<ThemeType>>;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  themeType: 'light',
  theme: Themes['light'],
} as ThemeContextProps);

export const ThemeProvider: React.FC<{ children: ReactElement }> = ({
  children,
}) => {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeType>('light');

  return (
    <ThemeContext.Provider
      value={{
        themeType: currentTheme,
        theme: Themes[currentTheme],
        setCurrentTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
