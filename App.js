import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from "react-navigation";

// from files
import configureStore from './app/store/configureStore';
import Routes from './app/config/routes';


const AppNavigator = StackNavigator(Routes, {});

const navReducer = (state, action) => {
    // console.log('navReducer - state: ', state);
    // console.log('navReducer - action: ', action);
    const newState = AppNavigator.router.getStateForAction(action.type, state);
    // console.log('NEW_STATE HIT: ', newState)
    return newState || state;
};

@connect(state => ({
    nav: state.nav
}))

class AppWithNavigationState extends Component {
    render() {
    // console.log('props from app start: ', this.props);
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