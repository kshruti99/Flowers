import React from 'react';
import Gallery from './Gallery';
import Search from './Search.js';
import About from './About';
import UserProfile from './UserProfile';
import { Link } from "react-router-dom";
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
  Nav,
  NavbarBrand
} from 'reactstrap';
import _ from 'lodash';
import "bootstrap/dist/css/bootstrap.css";
import './index.css'; //import css file!

export default function Header() {
  return (
    <div className="container">
      {/* <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/gallery">Home</Link>
        {' - '}
        <Link to="/search">Search</Link>
        {' - '}
        <Link to="/about">About</Link>
        {' - '}
        <Link to="/userprofile"> User Profile</Link>
      </nav> */}  
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
      <Gallery/>
    </div>
  );
}