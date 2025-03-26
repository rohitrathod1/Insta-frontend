import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHouse,
  faMagnifyingGlass,
  faSquarePlus,
  faHeart,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const Footer = () => {
  const [activeIcon, setActiveIcon] = useState('home');

  return (
    <div className="footer-container">
      <footer className="mobile-footer">
        <div 
          className={`footer-icon ${activeIcon === 'home' ? 'active' : ''}`}
          onClick={() => setActiveIcon('home')}
        >
          <FontAwesomeIcon icon={faHouse} />
        </div>
        <div 
          className={`footer-icon ${activeIcon === 'search' ? 'active' : ''}`}
          onClick={() => setActiveIcon('search')}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <div 
          className="footer-icon add-post"
          onClick={() => setActiveIcon('create')}
        >
          <FontAwesomeIcon icon={faSquarePlus} />
        </div>
        <div 
          className={`footer-icon ${activeIcon === 'activity' ? 'active' : ''}`}
          onClick={() => setActiveIcon('activity')}
        >
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div 
          className={`footer-icon ${activeIcon === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveIcon('profile')}
        >
          <FontAwesomeIcon icon={faUser} />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
