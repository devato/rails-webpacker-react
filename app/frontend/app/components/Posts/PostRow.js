import React from 'react'

class PostRow extends React.Component {

  render() {
    const { post } = this.props
    return (
      <tr>
        <td>{post.title}</td>
        <td>{post.description}</td>
      </tr>
    )
  }
}
export default PostRow
