import React, { Component } from 'react'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import PageWrapper from '../PageWrapper'
import Dashboard from '../Dashboard'
import PostsIndex from '../Posts'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' render={() => (
            <PageWrapper>
              <Dashboard />
            </PageWrapper>
            )} />
          <Route path='/posts' render={() => (
            <PageWrapper>
              <PostsIndex />
            </PageWrapper>
            )} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
