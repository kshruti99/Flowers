import React from 'react';
import ReactDOM, { render } from 'react-dom';
import _ from 'lodash';
import {
    Navbar,
    NavItem,
    NavLink,
    Nav,
    NavbarBrand,
    Button
} from 'reactstrap';
import './index.css'; //import css file!

export default function Header(props) {
    return (
        <Navbar color="light" light expand="md" className="a">
            <NavbarBrand href="/">Jasmine</NavbarBrand>
            <Nav className="ms-auto" navbar>
                <NavItem>
                    <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/search">Search</NavLink>
                </NavItem>
                <NavItem>
                    {/* <NavLink href="https://k4vya.github.io/jasmine-landing/">About</NavLink> */}
                    <NavLink href="/about">About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/uploadphoto">Post</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/userprofile">Profile</NavLink>
                </NavItem>
                <NavItem>
                    <Button onClick={props.signOutCallback} size="medium" color="secondary" aria-label="log out button">Log Out</Button>
                </NavItem>
            </Nav>
        </Navbar>
    );
}
