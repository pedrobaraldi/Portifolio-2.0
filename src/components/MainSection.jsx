import React, { useEffect, useRef } from 'react';
import './MainSection.css';

const MainSection = ({ sectionNumber, title, content, children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="main-section" 
      data-section={sectionNumber}
      id={title.toLowerCase()}
    >
      <div className="section-content">
        <div className="content-placeholder">
          {children || (
            <div className="placeholder-content">
              <h2>{title}</h2>
              <p>{content}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MainSection;
