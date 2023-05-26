import React from 'react'
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div class="Nav">
      <ul>
        <li class="active"><Link class="btn" to="/">Home</Link></li>
        <li><Link class="btn" to="/developer">Developer</Link></li>
        <li ><Link class="btn" to="/log">Log In</Link></li>
      </ul>
    </div>
  )
}

export default Nav;
