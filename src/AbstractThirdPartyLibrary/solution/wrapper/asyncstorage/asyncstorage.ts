import AsyncStorage from '@react-native-async-storage/async-storage';

const AppStorage = () => {
  return {
    saveToAsyncStorage: saveToAsyncStorage,
    readFromAsyncStorage: readFromAsyncStorage,
  };
};

async function saveToAsyncStorage(key: string, value: string) {
  console.log(`came for storing data ${value}`);
  await AsyncStorage.setItem(key, value);
  console.log(`came for retreving data ${await AsyncStorage.getItem(key)}`);
}

async function readFromAsyncStorage(key: string) {
  return await AsyncStorage.getItem(key);
}

export default AppStorage;
