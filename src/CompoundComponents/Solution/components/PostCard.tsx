import {Button, StyleSheet, Text, View} from 'react-native';
import {PropsWithChildren, createContext, useContext} from 'react';

type PostCardContext = {
  post: PostCard;
};

const PostCardContext = createContext<PostCardContext | undefined>(undefined);

function usePostCardContext() {
  const context = useContext(PostCardContext);
  if (!context) {
    throw new Error(`usePostCardContext must be used within a PostCard`);
  }
  return context;
}

type PostCardProps = PropsWithChildren & {
  post: PostCard;
  isOnProfile?: boolean;
  isOnSavedScreen?: boolean;
};

export default function PostCard({
  post,
  isOnProfile,
  isOnSavedScreen,
  children
}: PostCardProps) {
  return (
    <PostCardContext.Provider value={{post}}>
      <View style={styles.root}>{children}</View>
    </PostCardContext.Provider>
  );
}

PostCard.Title = function PostCardTitle() {
  const {post} = usePostCardContext();
  return <Text>{post.title}</Text>;
};

PostCard.Content = function PostCardContent() {
  const {post} = usePostCardContext();
  return <Text>{post.content}</Text>;
};

PostCard.User = function PostCardUser() {
  return (
    <View style={styles.row}>
      <Button title="Read More"></Button>
      <Button title="Commentes"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 16,
    flexDirection: 'column',
    gap: 4,
  },
  row: {
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'space-around',
  },
  auther: {
    color: 'gray',
  },
});
