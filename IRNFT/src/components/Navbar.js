import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom'; // تغییر به NavLink
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <button className="toggle-btn" onClick={toggleNav} aria-expanded={isNavOpen}>
          ☰
        </button>
        <nav>
          <ul className={`nav-links ${isNavOpen ? 'active' : ''}`}>
            <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
            <li><NavLink to="/coming-soon" className={({ isActive }) => (isActive ? 'active' : '')}>Market</NavLink></li>
            <li><NavLink to="/coming-soon" className={({ isActive }) => (isActive ? 'active' : '')}>Discover</NavLink></li>
            <li><NavLink to="/coming-soon" className={({ isActive }) => (isActive ? 'active' : '')}>Community</NavLink></li>
            <li><NavLink to="/coming-soon" className={({ isActive }) => (isActive ? 'active' : '')}>Wallet</NavLink></li>
          </ul>
        </nav>
        <div className="nav-buttons">
          <button className="search-btn">Search</button>
          <NavLink to="/get-started" className="explore-btn">Explore</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
