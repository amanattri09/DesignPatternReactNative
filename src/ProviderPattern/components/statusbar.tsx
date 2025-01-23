import {StatusBar} from 'react-native';
import useTheme from '../theme/use-theme';

export default function CustomStatusBar() {
  const theme = useTheme();
  return (
    <StatusBar
      barStyle={'default'}
    />
  );
}
