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
import Header from './Header';

export default function App() {
  return (
    <div className="container">
      <Header />
    </div>
  );
}