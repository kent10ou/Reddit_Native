import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Text,
  Image,
} from 'react-native';

class PostDetail extends Component {
  render() {
    const item = this.props.navigation.state.params;
    console.log('inside PostDetail page - props: ', item);
    console.log('thumbnail: ', item.url);
    return (
      <View style={{flexDirection: 'column'}}>
        <View style={{flex: 0, flexDirection: 'row'}}>
      { item.preview ?  
          <Image 
            resizeMode='cover'
            style={{flex: 1, width:null, height: 290}}
            source={{ uri: item.url }} />
      : <Text key={item.id} style={{flex: 1, textAlign: 'center', height: 30, marginTop: 100}}>No Image</Text> }
        </View>
        <View>
          <Text key={item.id} style={{textAlign: 'center', height: 30, marginTop: 30}}>Author: /u/{item.author}    Upvotes: {item.ups}</Text>
        </View> 
        <View>
          <Text key={item.id} style={{textAlign: 'center', height: 100}}>{item.title}</Text>
        </View>
      </View>
    );
  }
}

/* // StyleSheet is not loading...
const detailStyles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  postImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  resultText: {
    flex: 2,
    textAlign: 'center',
    height: 100,
  }
});
*/
function mapStateToProps(state) {
  // console.log('mapStateToProps POSTDETAIL - state: ', state)
  return {
    posts: state.posts.items,
    isFetching: state.posts.isFetching,
    nav: state.nav
  }
}

// function used to dispatch actions
function mapDispatchToProps (dispatch) {
    // console.log('dispatch: ', dispatch)
    return {
      actions: bindActionCreators(actionCreators, dispatch)
    }
}

// two functions (mapState/DispatchToProps) that are going to take the state (posts/comments) and dispatch (actionCreators) 
// and will surface those data and funcs via props

export default connect(mapStateToProps)(PostDetail);