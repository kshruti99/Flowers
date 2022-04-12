import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Gallery from "./Gallery";
import { Navigate } from 'react-router-dom';
import Header from './Header';


function App() {
  return (
    <div>
      <p>Hi</p>
      <Header />
      <div className="container-fluid">
      </div>
    </div>
  );
}

export default App;
