import {View, ViewStyle} from 'react-native';
import useThemeStyle from '../theme/use-theme-style';
import {PropsWithChildren} from 'react';
import CustomStatusBar from './statusbar';

export default function Page({children}: Readonly<PropsWithChildren>) {
  const viewStyle = useThemeStyle<ViewStyle>(theme => ({
    backgroundColor: theme.colors.primary,
    padding: theme.spacing['16p'],
    flex: 1,
  }));

  return (
    <>
      <CustomStatusBar />
      <View style={viewStyle}>{children}</View>
    </>
  );
}
