import {Appearance, Button, SafeAreaView, Text, TextStyle} from 'react-native';
import useThemeStyle from './theme/use-theme-style';
import Page from './components/page';
import useTheme from './theme/use-theme';

export default function ProviderPatternMainScreen() {
  const {theme, setTheme} = useTheme();
  const changeTheme = () => {
    setTheme('light');
  };

  const textThemeStyle = useThemeStyle<TextStyle>(
    theme => ({
      fontSize: theme.typography.text.sizes.large,
      color: theme.colors.textPrimary,
    }),
    [theme],
  );

  return (
    <SafeAreaView>
      <Page>
        <Text style={textThemeStyle}>just testing</Text>
        <Button title="Change Theme" onPress={changeTheme}></Button>
      </Page>
    </SafeAreaView>
  );
}
