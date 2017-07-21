import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  FlatList,
  StyleSheet,
  Text
} from 'react-native';

class Posts extends React.Component {
  render() {
  console.log('props in posts component: ', this.props);
    return (
      <View>
        <FlatList
          data={this.props.posts}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        />
      </View>
    )
  }
} 

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Posts;