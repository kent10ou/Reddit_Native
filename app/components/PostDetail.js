import React, { Component } from 'react';
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
    console.log('inside PostDetail page - props: ', this);
    // console.log('inside PostDetail page - props: ', state);
    return (
      <View>
        <Text>NOW SHOWING: POST DETAILS SCREEN</Text>
      </View>
    );
  }
}


export default PostDetail;