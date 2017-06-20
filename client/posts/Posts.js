import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchPostsFromServer } from './post-redux'
import Post from './Post'

class Posts extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchPostsFromServer())
  }
  render () {
    return (
      <div>
        {this.props.posts.map(post => <Post key={post.id} title={post.title} body={post.body} />)}
      </div>
    )
  }
}

Posts.propTypes = {
  dispatch: PropTypes.func,
  posts: PropTypes.array
}

function mapStateToProps (state) {
  return {
    posts: state.posts.posts
  }
}

export default connect(mapStateToProps)(Posts)
