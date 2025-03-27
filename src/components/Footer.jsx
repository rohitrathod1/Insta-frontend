import React from 'react';
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass, faSquarePlus, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="mobile-footer">
        <div className="footer-icon">
          <p><lord-icon src="https://cdn.lordicon.com/jeuxydnh.json" trigger="click" state="morph-neighbourhood" colors="primary:#eeca66,secondary:#08a88a"></lord-icon></p>
        </div>
        <div className="footer-icon">
          <p><lord-icon src="https://cdn.lordicon.com/wjyqkiew.json"
              trigger="click"
              state="morph-cross"
              colors="primary:#eeca66,secondary:#08a88a"></lord-icon></p>
        </div>
        <div className="footer-icon add-post">
          <p><script src="https://cdn.lordicon.com/lordicon.js"></script>
<lord-icon
    src="https://cdn.lordicon.com/sbnjyzil.json"
    trigger="hover"
    colors="primary:#9cf4a7,secondary:#08a88a">
</lord-icon></p>
        </div>
        <div className="footer-icon">
          <p><lord-icon
              src="https://cdn.lordicon.com/qfwgmyhc.json"
              trigger="click"
              stroke="bold"
              colors="primary:#eeca66,secondary:#08a88a"
            >
            </lord-icon></p>
        </div>
        <div className="footer-icon">
          <p><lord-icon src="https://cdn.lordicon.com/shcfcebj.json" trigger="hover" colors="primary:#9cf4a7,secondary:#08a88a"></lord-icon></p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;