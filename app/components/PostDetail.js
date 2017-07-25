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
    console.log('inside PostDetail page - props: ', this.props);
    const item = this.props.navigation.state.params;
    console.log('item: ', item);
    return (
      <View style={styles.container}>
        <View>
          <Image source={{ uri: item.thumbnail }} style={styles.resultImage} />
          <View>
            <Text key={item.id} style={styles.resultText}>{item.title}</Text>
          </View>
        </View>
        <View>
          <Text key={item.id} style={styles.info}>Author: /u/{item.author}    Upvotes: {item.ups}</Text>
        </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  resultImage: {
    flex: 1,
    resizeMode: 'contain',
    height: 100,
    width: 100
  },
  resultText: {
    flex: 2,
    textAlign: 'center',
    height: 100,
  }
});

function mapStateToProps(state) {
  console.log('mapStateToProps POSTDETAIL - state: ', state)
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