import {useEffect, useMemo, useState} from 'react';
import ThemeContext, {Appearance, ThemeContextValues} from './ThemeContext';
import * as theme from './values';

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

function noop(appearance: Appearance) {
  return;
}

export default function ThemeContextProvider({
  children,
}: Readonly<ThemeContextProviderProps>) {
  const [state, setState] = useState<Omit<ThemeContextValues, 'setTheme'>>({
    theme: theme,
    appearance: 'light',
  });

  const setTheme = (appearanceNew: Appearance) => {
    setState(prev => ({
      ...prev,
      appearance: appearanceNew,
      theme: {
        ...theme,
        colors:
          appearanceNew === 'light'
            ? theme.appColors.light
            : theme.appColors.dark,
      },
    }));
  };

  return (
    <ThemeContext.Provider
      value={useMemo(() => ({...state, setTheme}), [state])}>
      {children}
    </ThemeContext.Provider>
  );
}
