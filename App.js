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
  console.log("INITIALSTATE: ", initialState);
  let newState;
  switch(action.type) {
    case 'POST_DETAIL':
      console.log('before setting newState: ', state);
      newState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'PostDetail' }), state);
      console.log('POST_DETAIL Reducer - newState: ', newState);
      break;
    default: 
      newState = AppNavigator.router.getStateForAction(action,state);
      console.log('default - newState: ', newState);
      // return state
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