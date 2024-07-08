'use client';
import React, { useState, useEffect } from 'react';
import TypingEffect from '../typing';

interface NavbarProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="flex items-center justify-between p-4">
      <TypingEffect />
      <nav id="navbar" className="navbar">
        <div className="nav-container flex justify-center space-x-4">
          <button
            className={`nav-button ${activeSection === 'home' ? 'active' : ''}`}
            onClick={() => onNavigate('home')}
          >
            Home
          </button>
          <button
            className={`nav-button ${activeSection === 'edu' ? 'active' : ''}`}
            onClick={() => onNavigate('edu')}
          >
            Edu
          </button>
          <button
            className={`nav-button ${activeSection === 'work' ? 'active' : ''}`}
            onClick={() => onNavigate('work')}
          >
            Work
          </button>
          <button
            className={`nav-button ${activeSection === 'community' ? 'active' : ''}`}
            onClick={() => onNavigate('community')}
          >
            Community
          </button>
        </div>
      </nav>
      <div className="toggle-switch">
      <label className="switch-label">
        <input type="checkbox" class="checkbox" />
        <span className="slider"></span>
      </label>
    </div>
    </header>
  );
};

export default Navbar;
