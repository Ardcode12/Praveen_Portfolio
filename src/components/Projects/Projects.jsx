import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import './Projects.scss';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Ulagoo',
      description: 'Full-featured MERN travel pakage booking platform with payment integration, admin dashboard, and real-time pakage management.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'Redux'],
      category: 'fullstack',
      image: '/images/Ulaago.png',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true
    },
    // {
    //   id: 2,
    //   title: 'Real-Time Chat Application',
    //   description: 'WebSocket-based chat application with rooms, private messaging, and file sharing capabilities.',
    //   tech: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    //   category: 'fullstack',
    //   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVP3OLRs0rCjALVCuNOyyd6Y1dvhEsGkOYjg&s',
    //   liveUrl: 'https://example.com',
    //   githubUrl: 'https://github.com',
    //   featured: true
    // },
    // {
    //   id: 3,
    //   title: 'Task Management System',
    //   description: 'Collaborative project management tool with drag-and-drop functionality and team features.',
    //   tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    //   category: 'fullstack',
    //   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAgNjuZ503Rol7lnKqiPtQR2BmMPAFA5rWfA&s',
    //   liveUrl: 'https://example.com',
    //   githubUrl: 'https://github.com',
    //   featured: false
    // },
    // {
    //   id: 4,
    //   title: 'Weather Dashboard',
    //   description: 'Interactive weather dashboard with location-based forecasts and data visualization.',
    //   tech: ['React', 'Chart.js', 'Weather API'],
    //   category: 'frontend',
    //   image: 'https://www.wscubetech.com/blog/wp-content/uploads/2024/01/best-web-development-Projects-1024x576.webp',
    //   liveUrl: 'https://example.com',
    //   githubUrl: 'https://github.com',
    //   featured: false
    // },
    // {
    //   id: 5,
    //   title: 'RESTful API Service',
    //   description: 'Scalable REST API with JWT authentication, rate limiting, and comprehensive documentation.',
    //   tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    //   category: 'backend',
    //   image: 'https://www.wscubetech.com/blog/wp-content/uploads/2024/01/best-web-development-project-idea-1024x683.webp',
    //   liveUrl: 'https://example.com',
    //   githubUrl: 'https://github.com',
    //   featured: false
    // },
    // {
    //   id: 6,
    //   title: 'Portfolio Website',
    //   description: 'Modern portfolio website with dark mode, animations, and optimized performance.',
    //   tech: ['React', 'SCSS', 'Framer Motion'],
    //   category: 'frontend',
    //   image: 'https://www.wscubetech.com/blog/wp-content/uploads/2024/01/web-development-projects-1.webp',
    //   liveUrl: 'https://example.com',
    //   githubUrl: 'https://github.com',
    //   featured: false
    // }
  ];

  const categories = ['all', 'fullstack', 'frontend', 'backend'];
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 data-aos="fade-up">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        
        <div className="projects__filters" data-aos="fade-up" data-aos-delay="100">
          {categories.map(cat => (
            <button
              key={cat}
              className={`projects__filter ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="projects__grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
