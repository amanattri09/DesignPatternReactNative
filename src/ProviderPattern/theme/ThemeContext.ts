import {createContext} from 'react';

import * as theme from './values';

export type Appearance = 'light' | 'dark';
export type Theme = typeof theme;

export interface ThemeContextValues {
  appearance: Appearance;
  theme: Theme;
  setTheme: (appearance: Appearance) => void;
}

function noop(_appearance: Appearance) {
  return;
}

export default createContext<ThemeContextValues>({
  theme,
  appearance: 'light',
  setTheme: noop,
});
