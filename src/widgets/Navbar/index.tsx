import React from 'react'

import { Header, Link as NavLink, Nav } from './styled'

const Navbar = () => {
  return (
    <Header>
      <Nav>
        <NavLink to="/">Jokes</NavLink>
        <NavLink to="/liked">Liked jokes</NavLink>
      </Nav>
    </Header>
  )
}

export default Navbar
