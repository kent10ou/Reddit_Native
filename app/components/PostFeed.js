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
  
  _keyExtractor = (item, index) => item.id;
  
  _goToPostDetails = (state) => {
    // this.props.nav.navigate('PostDetail', { ...state });
    // console.log('THIS.PROPS: ', this.props)
    return this.props.actions.goToPostDetail();
  };
  
  _pullToRefresh = (state) => {
    console.log('PullTORefresh STATE: ', state);
    console.log('PULL TO REFRESH PROPS: ', this.props);
    this.props.actions.fetchPostsIfNeeded();
  }

  _renderFlatListItem = ({item}) => {
    return (
      <TouchableHighlight underlayColor={'#d6d7da'} activeOpacity={0.5} onPress={ () => {this._goToPostDetails(); console.log('PRESSED DO SOMETHING');} }>
        <View style={styles.itemContainer}>
          <Image source={ {uri: item.thumbnail} } style={styles.resultImage} />
          <View style={styles.textContainer}>
            <Text key={item.id} style={styles.resultText}>{item.title}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    console.log('props in List component: ', this.props);
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
    flexDirection: 'row',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    padding: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  textContainer: {
    flex: 2,
    margin:10,
    height: 100,
  },
  resultText: {
    color: '#000',
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