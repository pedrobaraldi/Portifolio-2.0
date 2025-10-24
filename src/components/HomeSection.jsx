import React from 'react';
import './HomeSection.css';
import Fotoperfil from  '../assets/Profile-Home.png';

const HomeSection = () => {
  return (
    <div className="home-section-container">
      <div className="home-content">
        <div className="home-image-section">
          <div className="image-container">
            
              <div className="placeholder-content">
                <span className="placeholder-text"><img src={Fotoperfil} alt="Foto de perfil" /></span>
              </div>
            
            <div className="image-overlay"></div>
          </div>
        </div>
        
        <div className="home-text-section">
          <div className="text-content">
            <h1 className="main-title">Front-end</h1>
            <h2 className="sub-title">DEVELOPER</h2>
            <p className="tagline">SENSIBLE TO FRONTEND</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
