import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchUsersFromServer } from './user-redux'

class Users extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchUsersFromServer())
  }
  render () {
    return (
      <pre>
        <samp>
          {JSON.stringify(this.props.users, null, 4)}
        </samp>
      </pre>
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
