import React, { useState } from 'react';
import './hamburger.css'

interface HamburgerProps {
  isOpen: boolean;
  onClick: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, onClick }) => {
  const [menuOpen, setMenuOpen] = useState(isOpen);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
    onClick();
  };

  return (
    <div className="hamburger-container">
      <button onClick={handleClick} className="hamburger">
        <div className={`hamburger-line ${menuOpen ? 'open-1' : ''}`} />
        <div className={`hamburger-line ${menuOpen ? 'open-0' : ''}`} />
        <div className={`hamburger-line ${menuOpen ? 'open-2' : ''}`} />
      </button>
    </div>
  );
};

export default Hamburger;
