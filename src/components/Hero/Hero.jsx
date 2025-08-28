import React, { useState, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import './Hero.scss';

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimationControls();
  
  const titles = [
    'MERN Stack Developer',
    'Strong Security Maker',
    'Data Analiyst',
    'Problem Solver'
  ];

  // Mouse move effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Title rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Floating animation
  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });
  }, [controls]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section className="hero" id="home">
      {/* Animated Background */}
      <div className="hero__background">
        <div className="hero__grid"></div>
        
        <motion.div 
          className="hero__gradient-orb hero__gradient-orb--1"
          animate={{
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />
        <motion.div 
          className="hero__gradient-orb hero__gradient-orb--2"
          animate={{
            x: mousePosition.x * -1.5,
            y: mousePosition.y * -1.5,
          }}
          transition={{ type: "spring", damping: 35, stiffness: 150 }}
        />
        <motion.div 
          className="hero__gradient-orb hero__gradient-orb--3"
          animate={{
            x: mousePosition.x * 1.2,
            y: mousePosition.y * -1.2,
          }}
          transition={{ type: "spring", damping: 40, stiffness: 100 }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`hero__particle hero__particle--${i}`} />
        ))}
      </div>
      
      <div className="container">
        <motion.div 
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Animated intro text */}
          <motion.div 
            className="hero__intro"
            variants={itemVariants}
          >
            <span className="hero__intro-text">
              {[...'Welcome to my portfolio'].map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03, duration: 0.5 }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </span>
          </motion.div>
          
          {/* Name with glitch effect */}
          <motion.h1 
            className="hero__name"
            variants={itemVariants}
          >
            <span className="hero__name-text" data-text="Praveen">
              Praveen
            </span>
          </motion.h1>
          
          {/* Animated title */}
          <motion.div 
            className="hero__title-wrapper"
            variants={itemVariants}
          >
            <motion.div 
              className="hero__title"
              key={titleIndex}
              initial={{ opacity: 0, y: 20, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: 90 }}
              transition={{ duration: 0.5 }}
            >
              <span className="hero__title-text gradient-text">
                {titles[titleIndex]}
              </span>
            </motion.div>
          </motion.div>
          
          {/* Animated description */}
          <motion.p 
            className="hero__description"
            variants={itemVariants}
            animate={controls}
          >
            <span className="hero__description-highlight">
              Crafting digital experiences
            </span>{' '}
            that blend creativity with functionality. Passionate about building 
            scalable applications and beautiful interfaces that make a difference.
          </motion.p>
          
          {/* CTA Buttons with hover effects */}
          <motion.div 
            className="hero__cta"
            variants={itemVariants}
          >
            <motion.button 
              className="btn btn--primary"
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View My Work</span>
              <div className="btn__glow"></div>
            </motion.button>
            
            <motion.button 
              className="btn btn--secondary"
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get In Touch</span>
              <svg className="btn__arrow" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Social links floating */}
          <motion.div 
            className="hero__social"
            variants={itemVariants}
          >
            {['GitHub', 'LinkedIn', 'Twitter'].map((social, index) => (
              <motion.a
                key={social}
                href="#"
                className="hero__social-link"
                whileHover={{ y: -5, scale: 1.1 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <span>{social}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Animated scroll indicator */}
      <motion.div 
        className="hero__scroll-indicator"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel"></div>
        </div>
        <motion.div
          className="hero__scroll-arrows"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span></span>
          <span></span>
          <span></span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
