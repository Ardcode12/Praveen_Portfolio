import React, { useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`project-card ${project.featured ? 'featured' : ''}`}
      data-aos="fade-up"
      data-aos-delay={index * 100}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {project.featured && <span className="project-card__badge">Featured</span>}
      
      <div className="project-card__image-container">
        <img src={project.image} alt={project.title} />
        <div className={`project-card__overlay ${isHovered ? 'visible' : ''}`}>
          <div className="project-card__links">
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-card__link"
            >
              <FiExternalLink size={20} />
              <span>Live Demo</span>
            </a>
            <a 
              href={project.githubUrl}
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-card__link"
            >
              <FiGithub size={20} />
              <span>Source Code</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
        <div className="project-card__tech">
          {project.tech.map(tech => (
            <span key={tech} className="project-card__tech-item">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
