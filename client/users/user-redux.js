import axios from 'axios'

const REQUEST_USERS = 'request_users'
const RECEIVE_USERS = 'receive_users'
const ERROR_FETCH_USERS = 'error_fetch_users'

function requestUsers () {
  return {
    type: REQUEST_USERS
  }
}

function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

function errorFetchUsers (error) {
  return {
    type: ERROR_FETCH_USERS,
    error
  }
}

export function fetchUsersFromServer () {
  return function asyncDispatchUsers (dispatch) {
    var config = {
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/users',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    dispatch(requestUsers())
    axios(config)
      .then(function resolve (response) {
        dispatch(receiveUsers(response.data))
      })
      .catch(function reject (err) {
        dispatch(errorFetchUsers(err))
      })
  }
}

const DEFAULT_STATE = {
  isFetching: false,
  users: [],
  error: ''
}

function userReducer (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case REQUEST_USERS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_USERS:
      return Object.assign({}, state, {
        isFetching: false,
        users: action.users,
        error: ''
      })
    case ERROR_FETCH_USERS:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      })
    default:
      return state
  }
}

export default userReducer
