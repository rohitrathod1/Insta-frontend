import React, { useState } from "react";
import "./Style.css";

const Create = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="create-container">
      <button className="create-btn" onClick={toggleMenu}>
        ➕ Create
      </button>

      {isOpen && (
        <div className="create-menu">
          <div className="menu-item">📷 Post</div>
          <div className="menu-item">📹 Live Video</div>
          <div className="menu-item">📈 Ad</div>
          <div className="menu-item">⚙️ AI</div>
        </div>
      )}
    </div>
  );
};

export default Create;
