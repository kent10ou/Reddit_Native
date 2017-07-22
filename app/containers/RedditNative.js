import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { 
  View, 
  Text, 
  ListView, 
  StyleSheet,
  TouchableHighlight 
} from 'react-native';
import List from '../components/list';
import * as actionCreators from '../actions/actionCreators';
import { fetchPostsIfNeeded, addCount } from '../actions/actionCreators';

class RedditNative extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFetching: false,
      items: [],
      count: 0 //example
    }
  }

  // when component mounts
  componentDidMount() {
    const { dispatch } = this.props;
    console.log('CDM: ', dispatch);
    // dispatch(fetchPostsIfNeeded());
    console.log('STATE WHEN COMP MOUNTS: ', this.props);
  }
  
  handleClick () {

  }

  incrementCount () {
    this.setState({count: this.state.count + 1});
  }

  addCount () {
    this.props.addCount();
  }
  
  render() {
    const { posts, isFetching = false } = this.props
    console.log('RN-props: ', this.props);
    console.log('RN-POSTS: ', posts);
    console.log('RN-ISFETCHING: ', isFetching);
    return (
      <View style={{marginTop: 20}}>
        {/* {isFetching && posts.length === 0 && <Text>Loading...</Text> }
         {!isFetching && posts.length === 0 && <Text>Empty.</Text> }  
        {posts.length > 0 &&
          <View style={{ opacity: isFetching ? 0.5 : 1 }}>
             <List posts={posts} /> 
          </View>
        } */}

        <Text>Count: {this.state.count}</Text>
        <TouchableHighlight onPress={() => {this.addCount()}}>
          <Text>Add!</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

RedditNative.propTypes = {
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch:PropTypes.func.isRequired
}


function mapStateToProps(state) {
  // const { isFetching, items: posts } = { isFetching: true}

  return {
    posts: state.posts.items,
    isFetching: state.isFetching
  }
}

// function used to dispatch actions
function mapDispatchToProps (dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

// two functions (mapState/DispatchToProps) that are going to take the state (posts/comments) and dispatch (actionCreators) 
// and will surface those data and funcs via props

export default connect(mapStateToProps, mapDispatchToProps)(RedditNative);