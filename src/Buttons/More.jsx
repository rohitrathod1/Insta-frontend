import React, { useState } from 'react';
import './Style.css';

const More = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const menuItems = [
    { id: 1, name: 'Your Activity' },
    { id: 2, name: 'Saved' },
    { id: 3, name: 'Switch appearance' },
    { id: 4, name: 'Report a problem' },
    { id: 5, name: 'Threads' },
    { id: 6, name: 'Switch accounts' },
    { id: 7, name: 'Log out' }
  ];

  const suggestions = [
    { id: 1, text: 'Suggestions will appear here' },
    { id: 2, text: 'Additional options' },
    { id: 3, text: 'More settings' }
  ];

  return (
    <div className="settings-container">
      <h1 className="settings-header">Settings</h1>
      
      <div className="menu-list">
        {menuItems.map(item => (
          <div key={item.id} className="menu-item">
            {item.name}
          </div>
        ))}
        
        <div 
          className="menu-item more-btn"
          onClick={() => setShowSuggestions(!showSuggestions)}
        >
          More
        </div>
      </div>

      {showSuggestions && (
        <div className="suggestions-container">
          {suggestions.map(item => (
            <div key={item.id} className="suggestion-item">
              {item.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default More;