import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './LOGIN/Login';
import Home from './HOME/Home';
import Developer from './Developer/Developer';
import Nav from './HOME/Nav';
import Footer from './HOME/Footer';
import Header from './HOME/Header';
// import Photoslide from './HOME/Photoslide';

function App() {
  return (
      <div className='bg-slate-500'>
        <Header/>
        <Nav/>
        <Routes>
          <Route path="/log" element={<Login/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/developer" element={<Developer/>}/>
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;