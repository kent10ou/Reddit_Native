export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

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
      .then(json => dispatch(recievePosts(json)))
  }
}

function shouldFetchPosts (state) {
  const posts = state.posts;
  if (!posts) {
    return true;
  } else if (posts.isFetching) {
    return false;
  } else {
    return posts.didRefresh;
  }
}

export function fetchPostsIfNeeded () {
  return (dispatch, getState) => {
    const state = getState();
    if ( shouldFetchPosts(state) ) {
      return dispatch(fetchPosts());
    } else {
      return Promise.resolve();
    }
  }
}