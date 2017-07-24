import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from "react-navigation";

// from files
import configureStore from './app/store/configureStore';
import Routes from './app/config/routes';


const AppNavigator = StackNavigator(Routes, {
    // navigationOptions: {
    //     title: ({ state }) => {
    //         if (state.params) {
    //             return `${state.params.title}`;
    //         }
    //     }
    // }
});

const navReducer = (state, action) => {
    console.log('nav reducer state: ', state)
    console.log('nav reducer action: ', action)
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
};

@connect(state => ({
    nav: state.nav
}))

class AppWithNavigationState extends Component {
    render() {
    console.log('props from app start: ', this.props);
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