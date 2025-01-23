import {useEffect, useState} from 'react';
import {Post} from '../../types';

const URL = 'https://jsonplaceholder.typicode.com/posts';

export const useUsers = () => {
  const [posts, setPosts] = useState(Array<Post>);
  const [isLoading, setIsLoading] = useState(false);

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

  return {posts, isLoading};
};
