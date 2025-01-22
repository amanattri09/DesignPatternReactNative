import {Text} from 'react-native';
import Listing from './components/Listing/Listing';
import {DummyData} from './mock /DummyData';

export default function GenricsHomeScreen() {
  return (
    <Listing
      items={DummyData}
      renderItem={item => {
        return <Text>{item.name}</Text>;
      }}
    />
  );
}
