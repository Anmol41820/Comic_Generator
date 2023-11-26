// import logo from './logo.svg';
import './App.css';
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState, useEffect } from "react";

import GenerateComic from './component/GenerateComic';
import HomePage from './component/HomePage';
import Navbar from "./component/Navbar";
// import Footer from "./component/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/GenerateComic" element={<GenerateComic />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;
