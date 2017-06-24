import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'

import configureStore from './store'
import Posts from './posts/Posts'
import Users from './users/Users'
import Landing from './landing'

import 'bootstrap/dist/css/bootstrap.css'
import './assets/style/main.css'
import './assets/style/custom.css'

var store = configureStore()

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <ul className='nav nav-tabs'>
          <li role='presentation'><Link to='/'>Home</Link></li>
          <li role='presentation'><Link to='/users'>Users</Link></li>
          <li role='presentation'><Link to='/posts'>Posts</Link></li>
        </ul>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/posts' component={Posts} />
          <Route path='/users' component={Users} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
)

export default App
