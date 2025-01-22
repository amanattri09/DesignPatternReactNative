import {SafeAreaView, StyleSheet} from 'react-native';
import UserInfo from './components/UserInfo';
import {WithGreeting} from './components';

export default function HOCMainScreen() {
  const UserInfoWithGreeting = WithGreeting(UserInfo);

  return (
    <SafeAreaView>
      <UserInfoWithGreeting
        name="Aman Attri"
        address="Village Isapur , Dist Gurdaspur , Punjab"
        phoneNumber="9779535664"
      />
    </SafeAreaView>
  );
}

const syles = StyleSheet.create({
  root: {
    padding: 16,
  },
});
