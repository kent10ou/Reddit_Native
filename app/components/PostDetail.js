import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import {
  View,
  List,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';

class PostDetail extends Component {
  render() {
    console.log('inside PostDetail page - props: ', this.props);

    return (
      <View style={styles.container}>
        {/* <Image source={ {uri: item.thumbnail} } style={styles.resultImage} />
        <View style={styles.rightContainer}>
          <Text key={item.id} style={styles.resultText}>{item.title}</Text>
        </View> */}
        <Text>TESTING</Text>
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
    resizeMode: 'contain'
  },
  resultText: {
    flex: 2,
    textAlign: 'center'
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