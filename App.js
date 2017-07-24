import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers, NavigationActions } from "react-navigation";

// from files
import configureStore from './app/store/configureStore';
import Routes from './app/config/routes';


const AppNavigator = StackNavigator(Routes, {});
const initialState = AppNavigator.router.getActionForPathAndParams('RedditNative');

// navigation reducer
const navReducer = (state = initialState, action) => {
  // const newState = AppNavigator.router.getStateForAction(action, state);
  // console.log('NEW_STATE HIT: ', newState)
  let newState;
  switch(action.type) {
    case 'POST_DETAIL':
      console.log('before setting newState: ', state);
      newState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'PostDetail' }, {posts: state.posts}), 
      state);
      console.log('POST_DETAIL HIT: ', newState);
      break;
    default: 
      newState = AppNavigator.router.getStateForAction(action,state);
  }
  return newState || state;
};

@connect(state => ({
  nav: state.nav
}))

class AppWithNavigationState extends Component {
  render() {
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav
        })}
      />
    );
  }
}

const store = configureStore(navReducer);

export default function App() {
  return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  );
}