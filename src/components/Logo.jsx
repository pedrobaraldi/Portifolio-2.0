import React from 'react';
import './Logo.css';
import logoImage from '../assets/Logo.png';

const Logo = () => {
  return (
    <div className="logo">
      <img src={logoImage} alt="PB Logo" className="logo-image" />
    </div>
  );
};

export default Logo;
