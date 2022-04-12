import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';

export default function NavBar() {
  return (
    <Navbar className="color-nav" expand="sm">
      <Container className="fixPosition">

        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              alt="INKD logo"
              src="img/logo.png"
              className="d-inline-block align-top logoSize"
            />{' '}
            <span className="logoFont">INKD</span>
          </Navbar.Brand>
        </LinkContainer>

        <Nav className=".ms-auto">
          <LinkContainer to="/Home"><Nav.Link>Home</Nav.Link></LinkContainer>
          <LinkContainer to="/Map"><Nav.Link>Map</Nav.Link></LinkContainer>
          <LinkContainer to="/Portfolios"><Nav.Link>Portfolios</Nav.Link></LinkContainer>
          <LinkContainer to="/Schedule"><Nav.Link>Schedule</Nav.Link></LinkContainer>
          <LinkContainer to="/Account"><Nav.Link>Account</Nav.Link></LinkContainer>
        </Nav>

      </Container>
    </Navbar>
  );
}