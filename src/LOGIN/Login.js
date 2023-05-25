import React from 'react';
import './Login.css';
import Header from '../HOME/Header';
import Nav from '../HOME/Nav';
import Footer from '../HOME/Footer';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='log'>
      <Header/>
      <Nav/>
      <Link to="/">click for Home Page</Link>
      <div className='log_in'>
        <h2>Log in page under construction</h2>
        <input type='text' />
        <input type='text' />
        <input type='text' />
        <input type='text' />
      </div>
      <Footer/>

    </div>
  )
}

export default Login
