import React from 'react'
import { ButtonGroup, Button } from '@blueprintjs/core'
import { Link } from 'react-router-dom'

class PostRow extends React.Component {

  render() {
    const { post, handleDelete } = this.props
    return (
      <tr>
        <td>{post.title}</td>
        <td>{post.description}</td>
        <td>
          <ButtonGroup>
            <Link to={`/posts/${post.id}`}><Button icon="edit">Edit</Button></Link>
            <Button
              icon="trash"
              intent="danger"
              onClick={(e) => handleDelete(post.id)}
            ></Button>
          </ButtonGroup>
        </td>
      </tr>
    )
  }
}

export default PostRow
