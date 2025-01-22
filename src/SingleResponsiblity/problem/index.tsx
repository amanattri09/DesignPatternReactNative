import {useEffect, useState} from 'react';
import {ActivityIndicator, Text} from 'react-native';
import {Post} from '../types';

const UserContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState(Array<Post>);

  const url = 'https://jsonplaceholder.typicode.com/posts';

  const fetchData = () => {
    setIsLoading(true);
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setIsLoading(false);
        setPosts(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    posts.map(post => {
      return <Text key={post.id}>{post.title}</Text>;
    })
  );
};

export default UserContainer;
