import { combineReducers } from 'redux'

import users from './users/user-redux'
import posts from './posts/post-redux'

export default combineReducers({
  users,
  posts
})
