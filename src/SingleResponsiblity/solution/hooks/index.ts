import {useEffect, useState} from 'react';
import {Post} from '../../types';

export const useUsers = () => {
  const [posts, setPosts] = useState(Array<Post>);
  const [isLoading, setIsLoading] = useState(false);
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

  return {posts, isLoading};
};
