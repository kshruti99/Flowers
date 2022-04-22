import React from 'react';
// import { LinkContainer } from 'react-router-bootstrap';

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Gallery from './Gallery';
import Search from './Search.js';
import About from './About';
// import UserProfile from './UserProfile';

//   import React, { Component } from 'react';
// import ReactDOM, { render } from 'react-dom';
// import App from './App';
import { Route, Link } from "react-router-dom";
import _ from 'lodash';
import './index.css'; //import css file!

export default function Header() {
  return (
    <div className="container">
      {/* <Route exact path="/" component={Gallery} />
          <Route path="/search" component={Search} />
          <Route path="/about" component={About} /> */}
      <nav
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
      </nav>
    </div>
  );
}