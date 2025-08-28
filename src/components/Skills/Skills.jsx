import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, 
  FaGitAlt, FaDocker, FaAws, FaDatabase 
} from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiMongodb, SiExpress,
  SiRedux, SiTailwindcss, SiPostgresql, SiFirebase 
} from 'react-icons/si';
import './Skills.scss';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('frontend');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  
  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      color: '#6366f1',
      bgGradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      skills: [
        { name: 'React.js', icon: FaReact, color: '#61DAFB' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'HTML5', icon: FaHtml5, color: '#E34C26' },
        { name: 'CSS3/SCSS', icon: FaCss3Alt, color: '#1572B6' },
        
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      ]
    },
    backend: {
      title: 'Backend Development',
      color: '#10b981',
      bgGradient: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
        { name: 'Express.js', icon: SiExpress, color: '#000000' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        // { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        // { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
        { name: 'REST APIs', icon: FaDatabase, color: '#FF6B6B' },
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      color: '#f59e0b',
      bgGradient: 'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)',
      skills: [
        { name: 'Git & GitHub', icon: FaGitAlt, color: '#F05032' },
        // { name: 'Docker', icon: FaDocker, color: '#2496ED' },
        // { name: 'AWS', icon: FaAws, color: '#FF9900' },
      ]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="skills" id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="skills__header"
        >
          <h2>
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="skills__subtitle">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          className="skills__tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {Object.entries(skillCategories).map(([key, category]) => (
            <motion.button
              key={key}
              className={`skills__tab ${selectedCategory === key ? 'active' : ''}`}
              onClick={() => setSelectedCategory(key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                '--tab-color': category.color,
                background: selectedCategory === key ? category.bgGradient : 'transparent'
              }}
            >
              <span>{category.title}</span>
              {selectedCategory === key && (
                <motion.div
                  className="skills__tab-indicator"
                  layoutId="activeTab"
                  transition={{ type: "spring", bounce: 0.2 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="skills__content"
          key={selectedCategory}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="skills__grid">
            {skillCategories[selectedCategory].skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  className="skill-card"
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 10,
                    rotateX: -10
                  }}
                  style={{
                    '--skill-color': skill.color,
                    '--card-delay': `${index * 50}ms`
                  }}
                >
                  <motion.div 
                    className="skill-card__icon-wrapper"
                    animate={{
                      rotateY: hoveredSkill === skill.name ? 360 : 0,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="skill-card__icon" />
                    <div className="skill-card__glow"></div>
                  </motion.div>
                  
                  <motion.h4 
                    className="skill-card__name"
                    initial={{ opacity: 0.8 }}
                    animate={{ 
                      opacity: hoveredSkill === skill.name ? 1 : 0.8,
                      scale: hoveredSkill === skill.name ? 1.1 : 1
                    }}
                  >
                    {skill.name}
                  </motion.h4>

                  {/* Floating particles on hover */}
                  {hoveredSkill === skill.name && (
                    <div className="skill-card__particles">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="particle"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ 
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                            x: [0, (Math.random() - 0.5) * 100],
                            y: [0, -Math.random() * 100 - 50]
                          }}
                          transition={{
                            duration: 1,
                            delay: i * 0.1,
                            repeat: Infinity,
                            repeatDelay: 0.5
                          }}
                        />
                      ))}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Category Description */}
          <motion.div 
            className="skills__description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="skills__description-content">
              <div className="skills__description-icon">
                {selectedCategory === 'frontend' && '🎨'}
                {selectedCategory === 'backend' && '⚙️'}
                {selectedCategory === 'tools' && '🛠️'}
              </div>
              <p>
                {selectedCategory === 'frontend' && 
                  "Crafting responsive and interactive user interfaces with modern frameworks and libraries."}
                {selectedCategory === 'backend' && 
                  "Building scalable server-side applications and RESTful APIs with robust databases."}
                {selectedCategory === 'tools' && 
                  "Utilizing industry-standard tools for version control, containerization, and cloud deployment."}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="skills__bg-decoration">
        <motion.div
          className="skills__bg-gradient"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </section>
  );
};

export default Skills;
