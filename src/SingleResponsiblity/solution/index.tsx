import {useUsers} from './hooks';
import PostComponent from './components/PostComponent';
import LoadingView from './components/loadingview';

const UserContainer = () => {
  const {posts, isLoading} = useUsers();

  return isLoading ? <LoadingView /> : <PostComponent posts={posts} />;
};

export default UserContainer;
