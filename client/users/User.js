import React from 'react'
import PropTypes from 'prop-types'

const User = ({ name, phone, website }) => {
  return (
    <div className='post'>
      <div className='padding'>
        <div className='media'>
          <div className='media-body'>
            <h5 className='post-heading'>{name}</h5>
            <p className='post-info'>contact: {phone}</p>
            <p className='post-info'>website: {website}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

User.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  website: PropTypes.string
}

export default User
