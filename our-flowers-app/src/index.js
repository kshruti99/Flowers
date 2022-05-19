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



ReactDOM.render(
    <React.StrictMode>
        <Header />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="about" element={<About />} />
                <Route path="search" element={<Search />} />
                <Route path="userprofile" element={<UserProfile />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();