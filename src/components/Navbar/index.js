import React, { useState } from "react";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className={`nav-bar ${menuOpen ? "open" : ""}`}>
      <a href="/" className="logo">
        <img src={logo} alt="logo" />
      </a>

      {/* nav items */}
      <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Services</Link>
        </li>
        <li>
          <Link to="/">Menu</Link>
        </li>
        <li>
          <Link to="/booking">Reservations</Link>
        </li>
        <li>
          <Link to="/">Order Online</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
      </ul>

      {/* mobile navbar */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};
