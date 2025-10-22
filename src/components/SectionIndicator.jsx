import React, { useState, useEffect } from 'react';
import './SectionIndicator.css';

const SectionIndicator = () => {
  const [currentSection, setCurrentSection] = useState(1);

  useEffect(() => {
    const sections = document.querySelectorAll('.main-section');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionNumber = parseInt(entry.target.dataset.section);
            setCurrentSection(sectionNumber);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="section-indicator">
      <span className="section-number">
        {String(currentSection).padStart(2, '0')}
      </span>
      <div className="section-line"></div>
    </div>
  );
};

export default SectionIndicator;
