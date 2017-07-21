import { combineReducers } from 'redux';
import { 
  REQUEST_POSTS,
  RECEIVE_POSTS
} from '../actions/actionCreators';

// Reducers
// pass in default state to posts reducer

function posts (state = {
  isFetching: false,
  items: []
}, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      console.log("REDUCER STATE, REQ_POST: ", state);
      return Object.assign({}, state, {
        isFetching: true
      })

    case RECEIVE_POSTS: 
      console.log("REDUCER STATE, REC_POST: ", state);
      return Object.assign({}, state, {
        isFetching: false, 
        items: action.posts
      })

    default: 
      // console.log("REDUCER STATE, DEFAULT: ", state);
      return state
  }
}

/*
Reducers are updating the state which then passes to the store! This rootReducer.js file is combining the posts reducers
The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.
*/

// Combine Reducers
const rootReducer = combineReducers({
  // reducer functions
  posts
})

export default rootReducer;
