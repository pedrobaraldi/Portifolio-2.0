import React, { useState, useEffect } from 'react';
import './ScrollDown.css';

const ScrollDown = () => {
  const [isAtContact, setIsAtContact] = useState(false);

  useEffect(() => {
    const contactSection = document.getElementById('contact');
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAtContact(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    if (isAtContact) {
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll to next section
      const currentSection = document.querySelector('.main-section.visible');
      if (currentSection) {
        const nextSection = currentSection.nextElementSibling;
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <div className={`scroll-down ${isAtContact ? 'at-contact' : ''}`} onClick={handleClick}>
      {isAtContact ? (
        <>
          <div className="scroll-arrow">↑</div>
          <div className="scroll-text">GO TO TOP</div>
        </>
      ) : (
        <>
          <div className="scroll-text">SCROLL DOWN</div>
          <div className="scroll-arrow">↓</div>
        </>
      )}
    </div>
  );
};

export default ScrollDown;
