import AsyncStorage from '@react-native-async-storage/async-storage';

const AppStorage = () => {
  return {
    saveToAsyncStorage: saveToAsyncStorage,
    readFromAsyncStorage: readFromAsyncStorage,
  };
};

async function saveToAsyncStorage(key: string, value: string) {
  await AsyncStorage.setItem(key, value);
}

async function readFromAsyncStorage(key: string) {
  return await AsyncStorage.getItem(key);
}

export default AppStorage;
