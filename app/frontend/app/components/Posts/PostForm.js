import React from 'react'
import { Redirect } from 'react-router'
import {
  FormGroup, TextArea, InputGroup, Intent, Button, Callout
} from '@blueprintjs/core'

import { clientGet, clientPost, clientPatch } from 'modules/client';

class PostForm extends React.Component {

  state = {
    submitDisabled: true,
    redirectTo: '',
    errorMessage: '',
    post: {
      id: '',
      title: '',
      description: ''
    },
    formAction: {
      text: 'Create',
      type: 'create'
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params
    if (id === 'new') return
    this.fetchPostData(id)
  }

  fetchPostData(id) {
    clientGet(`/posts/${id}`)
      .then(response => {
        this.setState({
          post: {
            id: response.data.id,
            title: response.data.title,
            description: response.data.description,
          },
          formAction: {
            text: 'Update',
            type: 'update'
          }
        })
        this.validateForm()
      })
      .catch(errorMessage => {
        this.setState({errorMessage: errorMessage})
      })
  }

  handleChange = e => {
    const { name, value } = e.target
    const newPost = { ...this.state.post, [name]: value }
    this.setState({ post: newPost })
    this.validateForm()
  }

  validateForm = () => {
    const { post } = this.state
    if (post.title && post.description) {
      this.setState({submitDisabled: false})
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const { post, formAction } = this.state
    let apiResponse

    if (formAction.type === 'create') {
      apiResponse = this.createPost(post)
    } else {
      apiResponse = this.updatePost(post)
    }
    apiResponse
      .then(response => {
        const { location } = response.headers
        if (location) {
          this.setState({redirectTo: location})
        } else {
          this.setState({redirectTo: '/posts'})
        }
      })
      .catch(errorMessage => {
        this.setState({errorMessage: errorMessage})
      })
  }

  createPost(post) {
    return clientPost('/posts', {
      title: post.title,
      description: post.description
    })
  }

  updatePost(post) {
    return clientPatch(`/posts/${post.id}`, {
      title: post.title,
      description: post.description
    })
  }

  render() {
    const { errorMessage, redirectTo, submitDisabled, post, formAction } = this.state
    if (redirectTo) {
      return <Redirect to={{ pathname: redirectTo, state: { message: `Successfully ${formAction.text}d post.` }}} />
    } else {
      return(
        <div className="post-new__wrapper">
          { errorMessage && <Callout title={errorMessage} intent={Intent.ERROR}/> }
          <form onSubmit={this.handleSubmit}>
            <h1>{formAction.text} Post</h1>
            <FormGroup label="Post Title" labelFor="post-title" labelInfo="(required)" >
              <InputGroup
                id="post-title"
                placeholder="Enter a title"
                value={post.title}
                name="title"
                onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup label="Post Description" labelFor="post-description" labelInfo="(required)" >
              <TextArea
                id="post-description"
                fill={true} placeholder="Description"
                value={post.description}
                name="description"
                onChange={this.handleChange}/>
            </FormGroup>
            <Button disabled={submitDisabled} type="submit" icon="tick-circle">{formAction.text} Post</Button>
          </form>
        </div>
      )
    }
  }
}
export default PostForm
