import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            about
          </Link>
        </li>
        <li>
          <Link to="/upload" className="nav-link active">
            tours
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
