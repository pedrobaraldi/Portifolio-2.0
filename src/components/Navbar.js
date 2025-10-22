import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <button onClick={() => scrollToSection('about')}>ABOUT</button>
        <button onClick={() => scrollToSection('portfolio')}>PORTFOLIO</button>
        <button onClick={() => scrollToSection('contact')}>CONTACT</button>
      </div>
      
      {/* Mobile Menu Button */}
      <button 
        className="mobile-menu-button"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <button onClick={() => scrollToSection('about')}>ABOUT</button>
        <button onClick={() => scrollToSection('portfolio')}>PORTFOLIO</button>
        <button onClick={() => scrollToSection('contact')}>CONTACT</button>
      </div>
    </nav>
  );
};

export default Navbar;
