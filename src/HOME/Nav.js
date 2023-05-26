import React from 'react'
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div class="Nav">
      <Link class="btn" to="/">Home</Link>
      <Link class="btn" to="/log">Log In</Link>
      <Link class="btn" to="/developer">Developer</Link>
    </div>
  )
}

export default Nav
