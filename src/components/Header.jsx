import React from 'react';
import Navbar from './Nav-bar';
import '../styling/header.css';

const Header = () => {
  return (
    <header className='header'>
      <Navbar />
      <div className="header-content">
        <h1 className='lg-heading text-light main-heading'>travel the world</h1>
        <p className='text-light'>travel the world, experience the greateness, it's the best gift given by nature</p>
        <a href="#" className='btn btn-primary text-red md-heading'>Explore Places</a>
      </div>
    </header>
  );
};

export default Header;