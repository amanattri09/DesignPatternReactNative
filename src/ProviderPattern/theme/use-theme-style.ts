import {useMemo} from 'react';
import {Theme} from './ThemeContext';
import useTheme from './use-theme';

type ThemeGenerator<T> = (theme: Theme) => T;

export default function useThemeStyle<T>(
  fn: ThemeGenerator<T>,
  deps: React.DependencyList = [],
) {
  const {theme} = useTheme();
  return useMemo(() => fn(theme), [theme, ...deps]);
}
