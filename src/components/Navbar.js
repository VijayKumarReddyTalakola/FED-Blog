import React from "react";
import { Link } from "react-router-dom";
import logo from "../pages/Images/logo192.png";

import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <img src ={logo} alt=""/>
        <span>React</span>
        <ul className="on-nav">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-links">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-links">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
