import React from 'react'
import {
    Alignment,
    Button,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
    Position
} from "@blueprintjs/core"

import { Link } from 'react-router-dom'
import client from '../../../common/client'

class MainNavbar extends React.Component {

  handleLogout() {
    client.logout((data)=> {
      window.location = "/"
    })
  }

  render() {
    return(
      <Navbar className="bp3-dark">
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Posty</Navbar.Heading>
          <Navbar.Divider />
          <Link to="/">Dashboard</Link>
          <Navbar.Divider />
          <Link to="/posts">Posts</Link>
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          <Button className="bp3-minimal" icon="log-out" text="Logout" onClick={this.handleLogout} />
        </Navbar.Group>
      </Navbar>
    )
  }
}

export default MainNavbar
