import {Text} from 'react-native';
import {Post} from '../../types';

interface PostComponentProps {
  posts: Array<Post>;
}

export default function PostComponent({posts}: PostComponentProps) {
  return posts.map(post => {
    return <Text key={post.id}>{post.title}</Text>;
  });
}
