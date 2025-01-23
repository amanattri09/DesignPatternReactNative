/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import AbstractThirdPartyLibrarySolutionScreen from './src/AbstractThirdPartyLibrary/solution';
import HomeScreenCompoundSolution from './src/CompoundComponents/Solution';
import GenricsHomeScreen from './src/GenricsComponents/Solution';
import HOCMainScreen from './src/HighOrderComponent';
import ProviderPatternMainScreen from './src/ProviderPattern';
import ThemeContextProvider from './src/ProviderPattern/theme/ThemeContextProvider';
import UserContainer from './src/SingleResponsiblity/problem';

function App(): JSX.Element {
  return (
    <ThemeContextProvider>
      <ProviderPatternMainScreen />
      {/* <UserContainer /> */}
      {/* <HOCMainScreen /> */}
      {/* <GenricsHomeScreen /> */}
      {/* <HomeScreenCompoundSolution /> */}
      {/* <AbstractThirdPartyLibrarySolutionScreen/> */}
    </ThemeContextProvider>
  );
}

export default App;
