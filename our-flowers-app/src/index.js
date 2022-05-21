import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Gallery from './Gallery';
import Search from './Search.js';
import About from './About';
import Header from './Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProfile from './UserProfile';


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/storage';

import GAL_DATA from './galleryObjects.json';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACLSlLCTj4UkDVdC8NG4FcJKrwZyAuG6U",
    authDomain: "jasmine-gallery-24816.firebaseapp.com",
    databaseURL: "https://jasmine-gallery-24816-default-rtdb.firebaseio.com",
    projectId: "jasmine-gallery-24816",
    storageBucket: "jasmine-gallery-24816.appspot.com",
    messagingSenderId: "692095937928",
    appId: "1:692095937928:web:c81c9fa2818dae2f0b1e3d"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const database = firebase.database();


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App galObjects={GAL_DATA}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export  {
    database, storage, firebase as default
  }