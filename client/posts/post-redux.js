import axios from 'axios'

const REQUEST_POSTS = 'request_posts'
const RECEIVE_POSTS = 'receive_posts'
const ERROR_FETCH_POSTS = 'error_fetch_posts'

function requestPosts () {
  return {
    type: REQUEST_POSTS
  }
}

function receivePosts (posts) {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

function errorFetchPosts (error) {
  return {
    type: ERROR_FETCH_POSTS,
    error
  }
}

export function fetchPostsFromServer () {
  return function asyncDispatch (dispatch) {
    var config = {
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/posts',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    dispatch(requestPosts())
    axios(config)
      .then(function resolve (response) {
        dispatch(receivePosts(response.data))
      })
      .catch(function reject (err) {
        dispatch(errorFetchPosts(err))
      })
  }
}

const DEFAULT_STATE = {
  isFetching: false,
  posts: [],
  error: ''
}

function postReducer (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        posts: action.posts,
        error: ''
      })
    case ERROR_FETCH_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      })
    default:
      return state
  }
}

export default postReducer
