import React from 'react';
import { Link } from 'react-router';
import '../styling/card.css';

const Card = ({ image, title, description, reverse = false }) => {
  return (
    <div className={`row ${reverse ? 'row2' : 'row1'}`}>
      <div className="img-box">
        <img src={image} alt={title} />
      </div>
      <div className="text-box">
        <h2 className='lg-heading text-black'>{title}</h2>
        <p className='text-gray'>{description}</p>
        <Link to="/about" className='btn btn-secondary'>More</Link>
      </div>
    </div>
  );
};

export default Card;