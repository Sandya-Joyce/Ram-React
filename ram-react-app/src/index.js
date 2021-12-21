import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/frontend/Footer";
import Header from "./components/frontend/Header";


import App from './App';
import './index.css';


ReactDOM.render(
    <React.StrictMode>
        <div>
        <Header/>
        <App />
        <Footer/>
        </div>
  </React.StrictMode>,
  document.getElementById('root')
);
