import React from 'react';
import { Link } from 'react-router';
import '../styling/nav-bar.css';

const Navbar = ({ darkBg = false }) => {
  return (
    <nav className={`navbar ${darkBg ? 'bg-dark' : ''}`}>
      <div className="container">
        <h1 className='logo lg-heading text-light'>WT</h1>
        <ul className='nav-items'>
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/about">About</Link></li>
          <li className="nav-item"><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;