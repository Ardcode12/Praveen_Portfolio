import React from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import './Experience.scss';

const Experience = () => {
  const experiences = [
    // {
    //   id: 1,
    //   type: 'work',
    //   title: 'Senior Full Stack Developer',
    //   company: 'Tech Solutions Inc.',
    //   period: '2022 - Present',
    //   description: 'Led development of multiple client projects using MERN stack. Implemented CI/CD pipelines and mentored junior developers.',
    //   technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    // },
    {
      id: 2,
      type: 'work',
      title: 'Full Stack Developer',
      company: 'T Code',
      period: '2025',
      description: 'Developed and maintained web applications for various clients. Collaborated with design team to implement pixel-perfect UIs.',
      technologies: ['React', 'Express', 'Node.js', 'MangoDb'],
    },
    {
      id: 3,
      type: 'Education',
      title: 'Masters in System Software',
      company: 'Krishna College of Enginering',
      period: '2024 - 2029',
      description: 'Graduated with honors. Specialized in web technologies and software engineering.',
      technologies: ['Data Structures', 'Algorithms', 'Web Development'],
    },
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 data-aos="fade-up">
          Professional <span className="gradient-text">Experience</span>
        </h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className={`timeline__item ${index % 2 === 0 ? 'left' : 'right'}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="timeline__marker">
                {exp.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
              </div>
              
              <div className="timeline__content">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <span className="timeline__period">{exp.period}</span>
                <p>{exp.description}</p>
                <div className="timeline__tech">
                  {exp.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
