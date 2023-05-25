import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './LOGIN/Login';
import Home from './HOME/Home';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/log" element={<Login/>} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
  );
}

export default App;