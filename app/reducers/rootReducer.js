import { combineReducers } from 'redux';
import { 
  REQUEST_POSTS,
  RECEIVE_POSTS
} from '../actions';

// Reducers
// pass in default state to posts reducer
function posts (state = {
  isFetching: false,
  items: []
}, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true
      })

    case RECEIVE_POSTS: 
      return Object.assign({}, state, {
        isFetching: false, 
        items: action.posts
      })

    default: 
      return state
  }
}

// Combine Reducers
const rootReducer = combineReducers({
  // reducer functions
  posts
})

export default rootReducer;
