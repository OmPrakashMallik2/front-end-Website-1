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
      <div class="form-container">
        <form>
          <h2>Log In </h2>
          <div class="imgcontainer">
            <img class="avatar" src="https://w7.pngwing.com/pngs/134/220/png-transparent-person-illustration-india-login-computer-icons-emoticon-medicine-user-login-icon-miscellaneous-text-logo-thumbnail.png" alt="User avatar" />
            {/* <img class="avatar" src='https://w7.pngwing.com/pngs/134/220/png-transparent-person-illustration-india-login-computer-icons-emoticon-medicine-user-login-icon-miscellaneous-text-logo-thumbnail.png'/> */}
          </div>

          <div class="container">
            <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required/>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>
            
            <button type="submit">Login</button>
            <label>
              <input type="checkbox" checked="checked" name="remember"/>
              Remember me
            </label>
          </div>

          <div class="container">
            <Link className="gohome" to="/">Home Page</Link>
          </div>
          <div class="container">
            <button type="button" class="cancelbtn">Cancel</button>
            {/* eslint-disable-next-line */}
            <span class="pw">Forgot <a>Password?</a></span>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Login;
