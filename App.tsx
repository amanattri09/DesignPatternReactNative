/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import ProviderPatternMainScreen from './src/ProviderPattern';
import ThemeContextProvider from './src/ProviderPattern/theme/ThemeContextProvider';

function App(): JSX.Element {
  return (
    <ThemeContextProvider>
      <ProviderPatternMainScreen />
    </ThemeContextProvider>
  );
}

export default App;
