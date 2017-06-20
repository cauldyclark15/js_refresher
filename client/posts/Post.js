import React from 'react'
import PropTypes from 'prop-types'

const Post = ({ title, body }) => {
  return (
    <div className='post'>
      <div className='padding'>
        <div className='media'>
          <div className='media-body'>
            <h4 className='media-heading'>{title}</h4>
            <p>{body}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

Post.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
}

export default Post
