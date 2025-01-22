import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';

export default function AbstractThirdPartyLibraryProblemScreen() {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then(res => res.json())
      .then(data => setCountry(data));
  }, []);

  const handleSaveData = async () => {
    await AsyncStorage.setItem('userName', 'Aman Attri');
  };

  return (
    <SafeAreaView>
      <Text>Abstract third party library</Text>
      <Button title="Save Data" onPress={handleSaveData} />
    </SafeAreaView>
  );
}
