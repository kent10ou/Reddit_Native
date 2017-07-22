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
// import action from '../actions/actionCreators.js'


class RedditNative extends Component {
  constructor(props) {
    super(props)
  }

  // when component mounts
  componentDidMount() {
    // const { dispatch } = this.props.actions;
    // console.log('CDM: ', dispatch);
    // dispatch(fetchPostsIfNeeded());
    this.props.actions.fetchPostsIfNeeded()
    console.log('STATE WHEN COMP MOUNTS: ', this.props);
  }
  
  render() {
    // const { posts, isFetching = false } = this.props
    console.log('RN-state: ', this.state);
    console.log('RN-props: ', this.props);
    return (
      <View style={{marginTop: 20}}>
        {/* {isFetching && posts.length === 0 && <Text>Loading...</Text> }
         {!isFetching && posts.length === 0 && <Text>Empty.</Text> }  
        {posts.length > 0 &&
          <View style={{ opacity: isFetching ? 0.5 : 1 }}>
             <List posts={posts} /> 
          </View>
        } */}

        <Text>Count: {this.props.count}</Text>
        <TouchableHighlight onPress={() => {this.props.actions.addCount()}}>
          <Text>Add!</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

{/* RedditNative.propTypes = {
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch:PropTypes.func.isRequired
} */}


function mapStateToProps(state) {
  // const { isFetching, items: posts } = { isFetching: true}
  console.log('mapStateToProps - state: ', state)
  return {
    posts: state.posts.items,
    isFetching: state.posts.isFetching,
    count: state.count.count
  }
}

// function used to dispatch actions
function mapDispatchToProps (dispatch) {
    console.log('dispatch: ', dispatch)
    return {
      actions: bindActionCreators(actionCreators, dispatch)
    }
}

// two functions (mapState/DispatchToProps) that are going to take the state (posts/comments) and dispatch (actionCreators) 
// and will surface those data and funcs via props

export default connect(mapStateToProps, mapDispatchToProps)(RedditNative);