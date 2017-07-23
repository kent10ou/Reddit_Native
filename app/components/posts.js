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


class Posts extends Component {
  
  _keyExtractor = (item, index) => item.id;

  _renderFlatListItem = ({item}) => {
    console.log('ITEM: ', {item});
    return (
      <View>
		    <Text key={item.id} style={styles.resultText}>{item.title}</Text>
        <Image source={ {uri: item.thumbnail} } style={styles.resultImage} />
	    </View>
    )
  }

  render() {
    console.log('props in List component: ', this.props);
    console.log("THIS: ", this);
    return (
      <View>
        <FlatList
          data={this.props.posts} // looks like this: { posts: [{},{},...]}
          renderItem= {this._renderFlatListItem}
          keyExtractor={this._keyExtractor}> 
        </FlatList>
      </View>
    )
  }
} 

          /* renderItem= {( {item} ) => {this.renderFlatListItem(item)} }  */
          /* {this.props.posts.map((post, i) =>
            <Text key={i}>{post.title}</Text>
          )} */

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
  resultText: {
    backgroundColor: '#000',
    color: '#FFF',
    height: 20,
  },
  resultImage: {
    height: 150,
    width: 140,
  }
})

export default Posts;