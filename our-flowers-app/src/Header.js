import React from 'react';
// import { LinkContainer } from 'react-router-bootstrap';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Gallery from './Gallery';
import Search from './Search';
import About from './About';
import UserProfile from './UserProfile';

//   import React, { Component } from 'react';
  import ReactDOM, { render } from 'react-dom';
  import App from './App';
  import { Router, Route, Link } from "react-router-dom";
  import _ from 'lodash';
  import './index.css'; //import css file!

export default function Header() {
  return (
    <Router>
        <div className="container">
                <Link to="/">Home</Link>
                {' - '}
                <Link to="/search">Search</Link>
                {' - '}
                <Link to="/about">About</Link>
            <Route exact path="/" component={Gallery} />
            <Route path="/search" component={Search} />
            <Route path="/about" component={About} />
        </div>
    </Router>
  );
}