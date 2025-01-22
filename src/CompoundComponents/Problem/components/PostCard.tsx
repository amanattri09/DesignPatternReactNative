import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';

interface PostCardProps {
  post: PostCard;
  isOnProfile?: boolean;
  isOnSavedScreen?: boolean;
}

export default function PostCard({
  post,
  isOnProfile,
  isOnSavedScreen,
}: PostCardProps) {
  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text>{post.title}</Text>
        <Text>{post.content}</Text>
        {/* FIRST CHECK  */}
        {!isOnProfile && <Text style={styles.auther}>{post.user.name}</Text>}
        {/* SECOND CHECK  */}
        {!isOnSavedScreen && (
          <View style={styles.row}>
            <Button title="Read More"></Button>
            <Button title="Commentes"></Button>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

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
