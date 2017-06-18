import React from 'react'
import { Provider } from 'react-redux'

import configureStore from './store'
import Users from './users/Users'

var store = configureStore()

const App = () => (
  <Provider store={store}>
    <Users />
  </Provider>
)

export default App
