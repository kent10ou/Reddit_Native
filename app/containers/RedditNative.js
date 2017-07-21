import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, PropTypes } from 'react-native';
import Posts from '../components/posts';

class RedditNative extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    
  }
  
  

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Posts />
      </View>
    );
  }
}

RedditNative.propTypes = {

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RedditNative;