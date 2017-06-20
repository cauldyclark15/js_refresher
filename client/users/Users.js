import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchUsersFromServer } from './user-redux'
import User from './User'

class Users extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchUsersFromServer())
  }
  render () {
    return (
      <div>
        {this.props.users.map(user => <User key={user.id} name={user.name} phone={user.phone} website={user.website} />)}
      </div>
    )
  }
}

Users.propTypes = {
  dispatch: PropTypes.func,
  users: PropTypes.array
}

function mapStateToProps (state) {
  return {
    users: state.users.users
  }
}

export default connect(mapStateToProps)(Users)
