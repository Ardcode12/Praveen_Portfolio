import React, { useState, useEffect } from 'react';
import './Navbar.scss';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container">
        <div className="navbar__content">
          <a href="#home" className="navbar__logo">
            <span className="gradient-text">PD</span>
          </a>

          <ul className={`navbar__menu ${isMobileOpen ? 'navbar__menu--open' : ''}`}>
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className="navbar__link"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <button 
            className="navbar__toggle"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
