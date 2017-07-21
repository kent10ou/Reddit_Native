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
    return (
      <View>

        <Posts />
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
  const { isFetching, items: posts } = { isFetching: true, items: [] }

  return {
    posts,
    isFetching
  }
}

export default connect(mapStateToProps)(RedditNative);