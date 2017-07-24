import React, { Component } from 'react';
import { Provider } from 'react-redux';

// from files
import configureStore from './app/store/configureStore';
import RedditRouterWithNavState from './app/router/Router';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <RedditRouterWithNavState />
      </Provider>  
    )
  }
}

export default App;