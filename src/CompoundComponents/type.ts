interface PostCard {
  id: string;
  title: string;
  content: string;
  user: {
    id: number;
    name: string;
  };
}
