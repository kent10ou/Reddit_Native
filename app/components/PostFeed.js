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

import Thumbnail from './Thumbnail';
import PostDetail from './PostDetail';

class PostFeed extends Component {
  
  _keyExtractor = (item, index) => {
    return item.id;
  }
  _goToPostDetails = (item) => {
    // need to pass state when dispatching action
    // return this.props.actions.goToPostDetail();
    this.props.props.navigation.navigate('PostDetail', item);
  };
  
  _pullToRefresh = () => {
    this.props.actions.fetchPostsIfNeeded();
  }

  _renderFlatListItem = ({item}) => {
    const { posts, isFetching, nav, actions, itemIndex } = this.props

    return (
      <TouchableHighlight underlayColor={'#d6d7da'} activeOpacity={0.5} onPress={ () => {this._goToPostDetails(item); console.log('CLICKED, this.props: ', this.props)} }>
        <View style={styles.itemContainer}>
          <View style={styles.row}>
            <Image source={ {uri: item.thumbnail} } style={styles.resultImage} />
            <View style={styles.rightContainer}>
              <Text key={item.id} style={styles.resultText}>{item.title}</Text>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <Text key={item.id} style={styles.info}>Author: /u/{item.author}    Upvotes: {item.ups}</Text>
         </View>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    // console.log('this in FlatList: ', this);
    return (
      <FlatList
          data={this.props.posts} // looks like this: { posts: [{},{},...]}
          renderItem= {this._renderFlatListItem}
          keyExtractor={this._keyExtractor}
          onRefresh={ () => {this._pullToRefresh()} }
          refreshing={this.props.isFetching}> 
      </FlatList>
    )
  }
} 

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'column',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    padding: 10,
  },
  row: {
    flexDirection: 'row'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  rightContainer: {
    flex: 2,
    margin:10,
    height: 100,
  },
  bottomContainer: {

  },
  info: {
    textAlign: 'center'
  },
  resultText: {
    color: '#000',
    height: 100
  },
  resultImage: {
    flex: 1,
    height: 100,
    width: 100,
    margin: 10,
    borderRadius: 4
  }
})

export default PostFeed;