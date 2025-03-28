import React, { useState } from "react";
import "./Style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const initialRecentSearches = [
  {
    username: "rohitrathod1592",
    name: "Rohit Rathod",
    profileImg: "/imgs/RRR.jpg",
  },
  {
    username: "its__vittal__rathod",
    name: "its. vittal. rathod 123 • Following",
    profileImg: "/imgs/RRR.jpg",
  },
  {
    username: "krishnapawar9113",
    name: "krishna pawar • Following",
    profileImg: "/imgs/RRR.jpg",
  },
];

const Search = () => {
  const [query, setQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState(initialRecentSearches);

  const clearSearch = (index) => {
    setRecentSearches(recentSearches.filter((_, i) => i !== index));
  };

  const clearAll = () => {
    setRecentSearches([]);
  };

  return (
    <div className="search-container">
      <h2>Search</h2>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <FontAwesomeIcon
            icon={faTimes}
            className="clear-icon"
            onClick={() => setQuery("")}
          />
        )}
      </div>

      {recentSearches.length > 0 && (
        <div className="recent-searches">
          <div className="recent-header">
            <span>Recent</span>
            <span className="clear-all" onClick={clearAll}>Clear all</span>
          </div>
          {recentSearches.map((user, index) => (
            <div key={index} className="search-item">
              <img src={user.profileImg} alt={user.username} className="profile-img" />
              <div className="user-info">
                <p className="username">{user.username}</p>
                <p className="details">{user.name}</p>
              </div>
              <FontAwesomeIcon
                icon={faTimes}
                className="remove-icon"
                onClick={() => clearSearch(index)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
