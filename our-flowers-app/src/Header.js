import React from 'react';
import ReactDOM, { render } from 'react-dom';
import _ from 'lodash';
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand
} from 'reactstrap';
import './index.css'; //import css file!

export default function Header() {
  return (
    <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Jasmine</NavbarBrand>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/gallery">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/search">Search</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/userprofile">Profile</NavLink>
                        </NavItem>
                    </Nav>
            </Navbar>
  );
}