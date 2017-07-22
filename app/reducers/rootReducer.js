import { combineReducers } from 'redux';
import posts from './posts';

// Combine Reducers
const rootReducer = combineReducers({
  // reducer functions
  posts
})

export default rootReducer;

/*
Reducers are updating the state which then passes to the store! This rootReducer.js file is combining the posts reducers
The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.
*/
