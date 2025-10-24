import React from 'react';
import './AboutSection.css';
import profileImage from '../assets/Profile-About.png';
import html from '../assets/HTML5.png';           
import javascript from '../assets/JavaScript.png';
import react from '../assets/React.png';
import bootstrap from '../assets/Bootstrap.png';
import css from '../assets/CSS3.png';
import git from '../assets/Git.png';
import figma from '../assets/Figma.png';
import sqlDeveloper from '../assets/SQL-Developer.png';
import tailwindCss from '../assets/Tailwind-CSS.png';
import firebase from '../assets/Firebase.png';
import typescript from '../assets/TypeScript.png';
import azure from '../assets/Azure.png';

const AboutSection = () => {
  const technologies = [
    { name: 'HTML', icon: <img src={html} alt="HTML" /> },
    { name: 'CSS', icon: <img src={css} alt="CSS" /> },
    { name: 'JavaScript', icon: <img src={javascript} alt="JavaScript" /> },
    { name: 'React', icon: <img src={react} alt="React" /> },
    { name: 'Bootstrap', icon: <img src={bootstrap} alt="Bootstrap" /> },
    { name: 'Git', icon: <img src={git} alt="Git" /> },
    { name: 'Figma', icon: <img src={figma} alt="Figma" /> },
    { name: 'SQL Developer', icon: <img src={sqlDeveloper} alt="SQL Developer" /> },
    { name: 'Tailwind CSS', icon: <img src={tailwindCss} alt="Tailwind CSS" /> },
    { name: 'Firebase', icon: <img src={firebase} alt="Firebase" /> },
    { name: 'TypeScript', icon: <img src={typescript} alt="TypeScript" /> },
    { name: 'Azure', icon: <img src={azure} alt="Azure" /> }
  ];

  return (
    <div className="about-section-container">
      <div className="about-content">
        <div className="about-text">
          <h2 className="about-title">I am a front end developer</h2>
          <p className="about-subtitle">
          I’m a front-end developer passionate about creating functional, intuitive, and visually appealing interfaces. I aim to combine design and performance to deliver smooth and well-structured digital experiences.          </p>
          
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
              <img 
                src={profileImage} 
                alt="Profile" 
                className="placeholder-text"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
