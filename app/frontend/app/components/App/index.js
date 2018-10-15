import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import PageWrapper from 'components/PageWrapper'
import Dashboard from 'components/Dashboard'

import PostsIndex from 'components/Posts'
import PostNew from 'components/Posts/PostNew'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <PageWrapper>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/posts" component={PostsIndex} />
            <Route path="/posts/new" component={PostNew} />
          </Switch>
        </PageWrapper>
      </BrowserRouter>
    )
  }
}

export default App
