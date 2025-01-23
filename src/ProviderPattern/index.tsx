import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextStyle,
  View,
} from 'react-native';
import useThemeStyle from './theme/use-theme-style';
import Page from './components/page';
import useTheme from './theme/use-theme';

export default function ProviderPatternMainScreen() {
  const {theme, setTheme, appearance} = useTheme();
  const changeTheme = () => {
    setTheme(appearance == 'dark' ? 'light' : 'dark');
  };

  const textThemeStyle = useThemeStyle<TextStyle>(theme => ({
    fontSize: theme.typography.text.sizes.large,
    color: theme.colors.textPrimary,
    alignSelf: 'center',
  }));

  return (
    <SafeAreaView style={{flex: 1}}>
      <Page>
        <Text style={textThemeStyle}>Home Screen </Text>
        <View style={styles.buttonStyle}>
          <Button title="Change Theme" onPress={changeTheme}></Button>
        </View>
      </Page>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
  },
  buttonStyle: {
    marginTop: 16,
  },
});
