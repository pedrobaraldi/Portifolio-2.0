import React from 'react';
import './PortfolioGrid.css';

const PortfolioGrid = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with React and Node.js",
      tech: "React, Node.js, MongoDB"
    },
    {
      id: 2,
      title: "Mobile App",
      description: "Cross-platform mobile application for task management",
      tech: "React Native, Firebase"
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      description: "Real-time analytics dashboard with data visualization",
      tech: "Vue.js, D3.js, Python"
    },
    {
      id: 4,
      title: "API Integration",
      description: "RESTful API with microservices architecture",
      tech: "Node.js, Express, PostgreSQL"
    },
    {
      id: 5,
      title: "UI/UX Design",
      description: "Modern web application with responsive design",
      tech: "Figma, CSS3, JavaScript"
    },
    {
      id: 6,
      title: "Cloud Solution",
      description: "Scalable cloud infrastructure with AWS services",
      tech: "AWS, Docker, Kubernetes"
    }
  ];

  return (
    <div className="portfolio-grid">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <div className="project-content">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">{project.tech}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioGrid;
