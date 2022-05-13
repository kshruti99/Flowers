import React from 'react';
import Gallery from './Gallery';
import Search from './Search.js';
import About from './About';
import UserProfile from './UserProfile';
import Header from './Header';
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

export default function App() {
  return (
    <div className="container">  
      <Gallery/>
    </div>
  );
}