import React from 'react'
import { Link } from 'react-router-dom'
import { HTMLTable, Callout, Intent, Spinner } from "@blueprintjs/core";
import { clientGet } from 'modules/client'
import PostRow from 'components/Posts/PostRow'

class PostsIndex extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      message: ((props.location || {}).state || {}).message,
      posts: [],
      errorMessage: '',
    }
    this.fetchPosts()
  }

  fetchPosts = () => {
    clientGet('/posts')
      .then(response => {
        console.log(response)
        this.setState({
          loading: false,
          posts: response.data,
        })
      })
      .catch(errorMessage => {
        this.setState({errorMessage: errorMessage})
      })
  }

  render() {
    const { errorMessage, message, loading, posts } = this.state
    if (loading) {
      return <Spinner size={Spinner.SIZE_STANDARD}  />
      } else {
      return(
        <div>
          { message && <Callout title={message} intent={Intent.SUCCESS}/> }
          { errorMessage && <Callout title={errorMessage} intent={Intent.ERROR}/> }
          <h1>Posts</h1>
          <Link to="/posts/new">New Post</Link>
          <HTMLTable>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              { posts.length > 0
                ? posts.map((post, index) => <PostRow post={post} key={index} /> )
                : <tr key={0}><td>No posts</td></tr>
              }
            </tbody>
          </HTMLTable>
        </div>
        )
    }
  }
}
export default PostsIndex
