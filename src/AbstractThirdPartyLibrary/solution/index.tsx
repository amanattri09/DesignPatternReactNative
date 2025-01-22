import {useEffect, useState} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import {fetchData} from './wrapper/fetch/fetch';
import AppStorage from './wrapper/asyncstorage/asyncstorage';

export default function AbstractThirdPartyLibrarySolutionScreen() {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetchData('https://restcountries.com/v3.1/all', setCountry);
  }, []);

  const handleSaveData = async () => {
    await AppStorage().saveToAsyncStorage('userName', 'Aman Attri');
    // now fetch data
    const data = await AppStorage().readFromAsyncStorage('userName');
  };

  return (
    <SafeAreaView>
      <Text>Abstract third party library</Text>
      <Button title="Save Data" onPress={handleSaveData} />
    </SafeAreaView>
  );
}
