import { combineReducers } from 'redux';
// import nav from './nav';
import posts from './posts';

// Combine Reducers
export default function rootReducer(navReducer) {
  console.log('ROOT_REDUCER: ', navReducer);
  return combineReducers({
    // reducer functions
    nav: navReducer,
    posts: posts
  })
};

/*
Reducers are updating the state which then passes to the store! This rootReducer.js file is combining the posts reducers
The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.
*/
