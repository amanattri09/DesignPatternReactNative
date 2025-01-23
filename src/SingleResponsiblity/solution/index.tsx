import {useUsers} from './hooks';
import PostComponent from './components/PostComponent';
import LoadingView from './components/LoadingView';

const UserContainer = () => {
  const {posts, isLoading} = useUsers();

  return isLoading ? <LoadingView /> : <PostComponent posts={posts} />;
};

export default UserContainer;
