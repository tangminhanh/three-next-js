// app/Navbar.tsx
'use client';

import React from 'react';

interface NavbarProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  return (
    <nav id="navbar" className="navbar">
      <div className="nav-container">
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
  );
};

export default Navbar;
