import React, { useState } from "react";
import logo from "../../images/Logo.svg";
import { findAllByDisplayValue } from "@testing-library/react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className={`"navbar" ${menuOpen ? "open" : ""}`}>
      <a>
        <img src={logo} alt="Logo" />
      </a>

      {/* mobile navbar */}
      <div className="menu-icon">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* nav items */}
      <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Services</a>
        </li>
        <li>
          <a href="/">Menu</a>
        </li>
        <li>
          <a href="/">Reservations</a>
        </li>
        <li>
          <a href="/">Order Online</a>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
      </ul>
    </nav>
  );
};
