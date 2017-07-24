export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const POST_DETAIL = 'POST_DETAIL';

function requestPosts () {
  return {
    type: REQUEST_POSTS
  }
}

function receivePosts (json) {
  return {
    type: RECEIVE_POSTS,
    posts: json.data.children.map(child => child.data)
  }
}

// thunk action creator
function fetchPosts () {
  return dispatch => {
    dispatch(requestPosts())
    return fetch(`https://reddit.com/.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(json)))
      .catch(err => console.log(err))
  }
}

function shouldFetchPosts (state) {
  const isFetching = state.posts.isFetching;
  console.log('shouldFetchPosts: ', isFetching)
  if (!isFetching) {
    return true;
  } else if (isFetching) {
    return false;
  } else {
    return posts.didRefresh;
  }
}

export function fetchPostsIfNeeded () {
  return (dispatch, getState) => {
    const state = getState();
    console.log("fetchPostsIfNeeded ", state);
    if ( shouldFetchPosts(state) ) {
      return dispatch(fetchPosts());
    } else {
      return Promise.resolve();
    }
  }
}

// actions to change navigation
function jumpPage () {
  console.log('hit JUMPPAGE');
  return {
    type: POST_DETAIL
  }
}

export function goToPostDetail () {
  return (dispatch, getState) => {
    const state = getState();
    console.log('goToPostDetail Action Hit! :', state);
    dispatch(jumpPage());
  }
}


