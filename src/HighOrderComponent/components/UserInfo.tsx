import {StyleSheet, Text, View} from 'react-native';

type UserInfoProps = {
  name: string;
  address: string;
  phoneNumber: string;
};

export default function UserInfo(props: Readonly<UserInfoProps>) {
  return (
    <View style={styles.column}>
      <Text>{`Username : ${props.name}`}</Text>
      <Text>{props.address}</Text>
      <Text>{props.phoneNumber}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
  },
});
