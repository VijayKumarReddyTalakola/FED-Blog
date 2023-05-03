import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/logo192.png";
import "../App.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="icon">
          <Link to='/'>
            <img src ={logo} alt=""/>
          </Link>
            <span>React</span>
        </div>
        <ul className="navmenu">
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
