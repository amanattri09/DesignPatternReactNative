import {View, ViewStyle} from 'react-native';
import useThemeStyle from '../theme/use-theme-style';
import {PropsWithChildren} from 'react';

export default function Page({children}: Readonly<PropsWithChildren>) {
  const viewStyle = useThemeStyle<ViewStyle>(theme => ({
    backgroundColor: theme.colors.white,
    padding: theme.spacing['16p'],
  }));

  return <View style={viewStyle}>{children}</View>;
}
