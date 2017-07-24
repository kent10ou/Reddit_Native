import React from 'react';
import { StackNavigator } from 'react-navigation';

import RedditNative from '../containers/RedditNative';
import PostDetail from '../components/PostDetail';

const PostStack = StackNavigator({
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
    // navigationOptions: ({ navigation }) => ({
    //   title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
    // }),
  },
});

export default PostStack;