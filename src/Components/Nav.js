import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white",
  };

  return (
    <nav>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li> D || A </li>
        </Link>

        <Link style={navStyle} to="/about">
          <li> ABOUT </li>
        </Link>

        <Link style={navStyle} to="/portfolio">
          <li> PORTFOLIO </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
