import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <Navbar bg="secondary" variant="dark">
    <Navbar.Brand>
      Catmash
    </Navbar.Brand>
    <Nav className="mr-auto">
    <LinkContainer to="/">
      <Nav.Link>Vote</Nav.Link>
    </LinkContainer>
    <LinkContainer to="/score">
      <Nav.Link>Score</Nav.Link>
    </LinkContainer>
    </Nav>
  </Navbar>
  )
}

export default Header