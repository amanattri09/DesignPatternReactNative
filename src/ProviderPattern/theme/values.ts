export type ColorTheme = {
  primary: string;
  secondary: string;
  textSecondary: string;
  textPrimary: string;
};

const sharedColors = {
  black: '#000000',
  white: '#FFFFFF',
};

type SharedColors = typeof sharedColors;

export type TColors = ColorTheme & SharedColors;

type ColorPalettes = {
  light: TColors;
  dark: TColors;
};

export const appColors: ColorPalettes = {
  dark: {
    primary: '#080811',
    secondary: '#161629',
    textPrimary: sharedColors.white,
    textSecondary: '#67686E',
    ...sharedColors,
  },
  light: {
    primary: '#F8F8F8',
    secondary: '#E4E4E4',
    textPrimary: '#161629',
    textSecondary: '#9D5DB0',
    ...sharedColors,
  },
};

const colors: TColors = {
  ...appColors.light,
};

const typography = {
  header: {
    weights: {
      regular: '400',
      medium: '500',
      semiBold: '600',
      bold: '700',
      extraBold: '800',
    },
    sizes: {
      xxlarge: 64,
      brand: 40,
      xlarge: 34,
      large: 28,
      medium: 22,
      small: 20,
    },
    // correspond directly with `sizes`
    _lineHeights: {
      xxlarge: 70,
      brand: 42,
      xlarge: 41,
      large: 34,
      medium: 28,
      small: 25,
    },
  },
  text: {
    weights: {
      regular: '400' as const,
      medium: '500' as const,
      semiBold: '600' as const,
      bold: '700' as const,
    },
    sizes: {
      xxlarge: 64,
      brand: 40,
      xlarge: 34,
      large: 28,
      title1: 28,
      title2: 22,
      title3: 20,
      body: 17,
      callout: 16,
      footnote: 14,
      caption1: 12,
      caption2: 11,
      caption3: 8, // Not found in AOC
    },
    // correspond directly with `sizes`
    _lineHeights: {
      xxlarge: 70,
      brand: 42,
      xlarge: 41,
      large: 34,
      title1: 34,
      title2: 28,
      title3: 25,
      body: 22,
      callout: 21,
      footnote: 18,
      caption1: 16,
      caption2: 13,
    },
  },
};

const spacing = {
  '4p': 4,
  '8p': 8,
  '12p': 12,
  '16p': 16,
  '20p': 20,
  '24p': 24,
  '32p': 32,
  '48p': 48,
  '64p': 64,
};

const radii = {
  none: 0,
  extraSmall: 4,
  small: 8,
  regular: 12,
  medium: 16,
  xlarge: 32,
  xxlarge: 64,
};

export {colors, typography, spacing, radii};
