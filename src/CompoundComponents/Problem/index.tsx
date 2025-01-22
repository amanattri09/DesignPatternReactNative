import { SafeAreaView } from 'react-native';
import PostCard from './components/PostCard';

export default function HomeScreenCompoundProblem() {
  return (
    <SafeAreaView>
      <PostCard
        isOnProfile={true}
        post={{
          id: '1',
          title: 'Hello World',
          content: 'This is first blog of our channel',
          user: {
            id: 1,
            name: 'Aman Attri ',
          },
        }}
      />
    </SafeAreaView>
  );
}
