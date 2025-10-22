import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  const technologies = [
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'Git', icon: '📦' },
    { name: 'Figma', icon: '🎯' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'TypeScript', icon: '🔷' }
  ];

  return (
    <div className="about-section-container">
      <div className="about-content">
        <div className="about-text">
          <h2 className="about-title">LOREM IPSUM DOLOR SIT AMET AMET SIT</h2>
          <p className="about-subtitle">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet Sit Adipiscing consectetur adipiscing elit quisque faucibus ex. Adipiscing
          </p>
          
          <div className="technologies-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-item">
                <div className="tech-icon">{tech.icon}</div>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="about-image-section">
          <div className="image-placeholder">
            <div className="placeholder-content">
              <span className="placeholder-text">Your Photo Here</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
