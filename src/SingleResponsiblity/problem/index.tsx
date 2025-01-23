import {useEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView, Text} from 'react-native';
import {Post} from '../types';

const URL = 'https://jsonplaceholder.typicode.com/posts';

const UserContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState(Array<Post>);

  const fetchData = () => {
    setIsLoading(true);
    fetch(URL)
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

  return (
    <SafeAreaView>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        posts.map(post => {
          return <Text key={post.id}>{post.title}</Text>;
        })
      )}
    </SafeAreaView>
  );
};

export default UserContainer;
