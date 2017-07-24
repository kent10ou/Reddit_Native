import RedditNative from '../components/RedditNative';
import PostDetail from '../components/PostDetail';;

const Routes = {
  PostFeed: {
    screen: RedditNative,
    navigationOptions: {
      title: 'Reddit Feed',
    },
  },
  PostDetail: {
    screen: PostDetail,
    navigationOptions: {
      title: 'Post Details'
    }
  },
};

export default Routes;