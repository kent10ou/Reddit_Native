import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import RedditNative from '../components/RedditNative';
import PostDetail from '../components/PostDetail';

export const RedditRouter = StackNavigator({
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
});

const RedditRouterWithNavState = ({ dispatch, nav }) => (
  <RedditRouter navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(RedditRouterWithNavState);