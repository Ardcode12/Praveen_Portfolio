import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiMail, FiPhone, FiMapPin, FiGithub, 
  FiLinkedin, FiTwitter, FiSend 
} from 'react-icons/fi';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    { icon: FiMail, text: 'Dcoll856@gmail.com', href: 'mailto:praveen@example.com' },
    { icon: FiPhone, text: '+91 7708673148', href: 'tel:+911234567890' },
    { icon: FiMapPin, text: 'TamilNade, India', href: '#' },
  ];

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/praveendaniel66', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/praveendaniel12?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 data-aos="fade-up">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        
        <div className="contact__content">
          <div className="contact__info" data-aos="fade-right">
            <h3>Let's work together</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, 
              or opportunities to be part of your visions.
            </p>
            
            <div className="contact__details">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="contact__item"
                    whileHover={{ x: 5 }}
                  >
                    <Icon className="contact__icon" />
                    <span>{info.text}</span>
                  </motion.a>
                );
              })}
            </div>
            
            <div className="contact__social">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ y: -5 }}
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>
          
          <form 
            className="contact__form" 
            onSubmit={handleSubmit}
            data-aos="fade-left"
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <motion.button
              type="submit"
              className="btn btn--primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
              <FiSend />
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
