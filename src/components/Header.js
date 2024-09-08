// src/components/Header.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './../styles/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="header-container">
        <Link to="/" className="logo">Dr. Chetan Mudrabettu</Link>
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About Me</Link></li>
            <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
            <li><Link to="/testimonial" onClick={closeMenu}>Testimonial</Link></li>
            <li><Link to="/booknow" onClick={closeMenu}>Book Now</Link></li>
            <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
          </ul>
        </nav>
        <button className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export default Header;