import React, { useState } from 'react';
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass, faSquarePlus, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  const handleNavigation = (path) => {
    setActiveTab(path);
    navigate(path);
  };

  return (
    <div className="footer-container">
      <footer className="mobile-footer">
        <div 
          className={`footer-icon ${activeTab === "/home" ? "active" : ""}`} 
          onClick={() => handleNavigation("/home")}
        >
          <p><lord-icon src="https://cdn.lordicon.com/jeuxydnh.json" trigger="click" state="morph-neighbourhood" colors="primary:#eeca66,secondary:#08a88a"></lord-icon></p>
        </div>
        <div 
          className={`footer-icon ${activeTab === "/home/buttons/search" ? "active" : ""}`} 
          onClick={() => handleNavigation("/home/buttons/search")}
        >
          <p><lord-icon src="https://cdn.lordicon.com/wjyqkiew.json"
              trigger="click"
              state="morph-cross"
              colors="primary:#eeca66,secondary:#08a88a"></lord-icon></p>
        </div>
        <div 
          className={`footer-icon add-post ${activeTab === "/home/buttons/create" ? "active" : ""}`} 
          onClick={() => handleNavigation("/home/buttons/create")}
        >
          <p><script src="https://cdn.lordicon.com/lordicon.js"></script>
          <lord-icon
              src="https://cdn.lordicon.com/sbnjyzil.json"
              trigger="click"
              colors="primary:#9cf4a7,secondary:#08a88a">
          </lord-icon></p>
        </div>
        <div 
          className={`footer-icon ${activeTab === "/home/buttons/reels" ? "active" : ""}`} 
          onClick={() => handleNavigation("/home/buttons/reels")}
        >
          <p><lord-icon
              src="https://cdn.lordicon.com/qfwgmyhc.json"
              trigger="click"
              stroke="bold"
              colors="primary:#eeca66,secondary:#08a88a"
            >
            </lord-icon></p>
        </div>
        <div 
          className={`footer-icon ${activeTab === "/home/buttons/Userid" ? "active" : ""}`} 
          onClick={() => handleNavigation("/home/buttons/Userid")}
        >
          <p><lord-icon src="https://cdn.lordicon.com/shcfcebj.json" trigger="click" colors="primary:#9cf4a7,secondary:#08a88a"></lord-icon></p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;