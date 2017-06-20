import React from 'react'
import { Provider } from 'react-redux'

import configureStore from './store'
import Posts from './posts/Posts'

import 'bootstrap/dist/css/bootstrap.css'
import './assets/style/main.css'
import './assets/style/custom.css'

var store = configureStore()

const App = () => (
  <Provider store={store}>
    <Posts />
  </Provider>
)

export default App
