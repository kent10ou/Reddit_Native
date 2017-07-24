import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './app/store/configureStore';
import RedditNative from './app/containers/RedditNative';
import PostStack from './app/router/Router';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <PostStack />
      </Provider>  
    )
  }
}

export default App;