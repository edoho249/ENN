import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/header.css";
import logo from "../assets/logo.png"; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
     <div className="logo">
  <Link to="/" onClick={closeMenu}>
    <img src={logo} alt="ENN Logo" />
  </Link>
</div>

      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link
              to="/"
              onClick={closeMenu}
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/business"
              onClick={closeMenu}
              className={location.pathname === "/business" ? "active" : ""}
            >
              Business
            </Link>
          </li>
          <li>
            <Link
              to="/sports"
              onClick={closeMenu}
              className={location.pathname === "/sports" ? "active" : ""}
            >
              Sports
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={closeMenu}
              className={location.pathname === "/about" ? "active" : ""}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={closeMenu}
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <span className="close">×</span> : <span>☰</span>}
      </div>
    </header>
  );
};

export default Header;
