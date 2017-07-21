import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './app/store/configureStore';
import RedditNative from './app/containers/RedditNative';

const store = configureStore({});

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <RedditNative />
      </Provider>  
    )
  }
}

export default App;