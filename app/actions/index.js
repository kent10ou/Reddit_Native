export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

function requestPosts () {
  return {
    type: REQUEST_POSTS
  }
}

function receivePosts () {
  return {
    type: RECEIVE_POSTS
  }
}