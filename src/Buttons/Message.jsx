import React, { useState } from "react";
import "./Style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const messagesData = [
  {
    name: "⚡️ਅਲਸ⚡️",
    username: "You",
    message: "sent an attachment.",
    time: "1d",
    profileImg: "/imgs/RRR.jpg",
    isActive: false,
    unread: false,
  },
  {
    name: "Avinash",
    username: "Active 12m ago",
    message: "",
    time: "",
    profileImg: "/imgs/RRR.jpg",
    isActive: false,
    unread: false,
  },
  {
    name: "Sunil Rathore",
    username: "Sunil",
    message: "sent an attachment.",
    time: "2d",
    profileImg: "/imgs/RRR.jpg",
    isActive: false,
    unread: false,
  },
  {
    name: "❤️🥰 friends 🥰❤️",
    username: "2 active now",
    message: "",
    time: "",
    profileImg: "/imgs/RRR.jpg",
    isActive: true,
    unread: false,
  },
  {
    name: "dipakrathod",
    username: "Active 2h ago",
    message: "",
    time: "",
    profileImg: "/imgs/RRR.jpg",
    isActive: false,
    unread: false,
  },
  {
    name: "Shivpal Singh",
    username: "Active 13m ago",
    message: "",
    time: "",
    profileImg: "/imgs/RRR.jpg",
    isActive: false,
    unread: false,
  },
];

const Message = () => {
  const [activeTab, setActiveTab] = useState("Primary");

  return (
    <div className="message-container">
      {/* Header Section */}
      <div className="header">
        <h2>rohitrathod1592</h2>
        <FontAwesomeIcon icon={faEdit} className="edit-icon" />
      </div>

      {/* Tabs */}
      <div className="tabs">
        {["Primary", "General", "Requests"].map((tab) => (
          <span
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </span>
        ))}
      </div>

      {/* Message List */}
      <div className="message-list">
        {messagesData.map((user, index) => (
          <div key={index} className="message-item">
            <div className="profile-section">
              <img src={user.profileImg} alt={user.name} className="profile-img" />
              {user.isActive && <span className="online-indicator"></span>}
            </div>
            <div className="message-info">
              <p className="name">{user.name}</p>
              <p className="details">
                {user.username} {user.message && `• ${user.message}`} {user.time && `• ${user.time}`}
              </p>
            </div>
            {user.unread && <span className="unread-dot"></span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Message;
