import {Text} from 'react-native';

type ListingProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};

export default function Listing<T>({items}: ListingProps<T>) {
  return items.map((item, index) => {
    return <Text key={`item-${index}`}>renderItem(item)</Text>;
  });
}
