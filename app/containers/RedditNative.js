import React, { Component } from 'react';
import { 
  View, 
  Text, 
  ListView, 
  StyleSheet 
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Posts from '../components/posts';
import { fetchPostsIfNeeded } from '../actions/actionCreators';

class RedditNative extends Component {
  constructor(props) {
    super(props)
    
  }

  // when component mounts
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPostsIfNeeded());
    console.log('STATE WHEN COMP MOUNTS: ', this.props);
  }
  
  handleClick () {

  }
  
  render() {
    const { posts, isFetching } = this.props
    console.log('props: ', this.props);
    console.log('POSTS: ', posts);
    console.log('ISFETCHING: ', isFetching);
    return (
      <View>
        {isFetching && posts.length === 0 && <Text>Loading...</Text> }
        {/* {!isFetching && posts.length === 0 && <Text>Empty.</Text> }  */}
        {posts.length > 0 &&
          <View style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Posts posts={posts} />
          </View>
        }
      </View>
    );
  }
}

RedditNative.propTypes = {
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch:PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { isFetching, items: posts } = { isFetching: true}

  return {
    posts: state.posts.items,
    isFetching: state.isFetching
  }
}

// two functions (mapState/DispatchToProps) that are going to take the state (posts/comments) and dispatch (actionCreators) 
// and will surface those data and funcs via props

export default connect(mapStateToProps)(RedditNative);