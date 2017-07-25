import { REQUEST_POSTS, RECEIVE_POSTS } from '../actions/actionCreators';

const initialState = {
  isFetching: false,
  items: []
}

// pass in default state to posts reducer
function posts (state = initialState, action) {
  switch (action.type) {

    case REQUEST_POSTS:
      // console.log("REDUCER, REQ_POST: ", state);
      return {
        ...state,
        isFetching: true
      }

    case RECEIVE_POSTS: 
      // console.log("REDUCER, REC_POST: ", state);
      return {
        ...state,
        isFetching: false, 
        items: action.posts
      }

    default: 
      // console.log("REDUCER, DEFAULT: ", state);
      return state;
  }
}

export default posts;
