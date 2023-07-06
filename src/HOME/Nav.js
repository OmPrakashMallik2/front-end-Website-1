import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="bg-white p-3 text-black flex justify-center space-x-5">
      <Link className="font-bold hover:text-blue-500" to="/">
        Home
      </Link>

      <Link className="font-bold hover:text-blue-500" to="/developer">
        Developer
      </Link>

      <Link  className="font-bold hover:text-blue-500" to="/log">
        Log In
      </Link>

    </div>
  );
}

export default Nav;
