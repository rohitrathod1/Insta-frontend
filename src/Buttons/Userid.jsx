import React, { useState, useRef } from "react";
import "./Style.css";

const Userid = () => {
  const [user] = useState({
    name: "Rohit Rathod",
    username: "rohitrathod1592",
    bio: `❤️..diwana..of..mahakal..❤️`,
    followers: 363,
    following: 194,
    posts: 0,
    profilePic: "/imgs/RRR.jpg",
  });

  const [activeTab, setActiveTab] = useState("posts");
  const fileInputRef = useRef(null);

  // Function to Open File Upload Dialog
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={user.profilePic} alt="Profile" className="profile-pic" />
        <div className="profile-details">
          <div className="profile-top">
            <h2>{user.username}</h2>
            <button className="edit-btn">Edit Profile</button>
            <button className="archive-btn">View archive</button>
            <div className="settings-icon">⚙</div>
          </div>
          <div className="profile-stats">
            <span>{user.posts} posts</span>
            <span>{user.followers} followers</span>
            <span>{user.following} following</span>
          </div>
          <div className="bio">
            <b>{user.name}</b>
            <p className="editor">Editor</p>
            <p>{user.bio}</p>
          </div>
        </div>
      </div>

      {/* Tabs (Posts, Saved, Tagged) */}
      <div className="profile-nav">
        <span 
          className={activeTab === "posts" ? "active" : ""} 
          onClick={() => setActiveTab("posts")}
        >
          📷 POSTS
        </span>
        <span 
          className={activeTab === "saved" ? "active" : ""} 
          onClick={() => setActiveTab("saved")}
        >
          🔖 SAVED
        </span>
        <span 
          className={activeTab === "tagged" ? "active" : ""} 
          onClick={() => setActiveTab("tagged")}
        >
          🏷 TAGGED
        </span>
      </div>

      {/* Content Based on Active Tab */}
      <div className="tab-content">
        {activeTab === "posts" && (
          <div className="no-posts">
            <div className="no-posts-icon">📸</div>
            <h3>Share photos</h3>
            <p>When you share photos, they will appear on your profile.</p>
            <button className="upload-btn" onClick={handleUploadClick}>
              Share your first photo
            </button>
            <input 
              type="file" 
              ref={fileInputRef} 
              style={{ display: "none" }} 
              accept="image/*"
            />
          </div>
        )}

        {activeTab === "saved" && <div className="saved-content">No saved posts yet.</div>}
        {activeTab === "tagged" && <div className="tagged-content">No tagged posts yet.</div>}
      </div>
    </div>
  );
};

export default Userid;
