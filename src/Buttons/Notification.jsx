import React from "react";
import "./Style.css";

const notifications = [
  {
    username: "vwrathod96",
    message: "started following you.",
    time: "19h",
    profileImg: "/imgs/RRR.jpg",
  },
  {
    username: "vwrathod96",
    message: "started following you.",
    time: "19h",
    profileImg: "/imgs/RRR.jpg",
  },
];

const Notification = () => {
  return (
    <div className="notification-container">
      <h2 className="notification-header">Notifications</h2>
      <h3 className="notification-section">Today</h3>
      <div className="notification-list">
        {notifications.map((item, index) => (
          <div key={index} className="notification-item">
            <img src={item.profileImg} alt={item.username} className="profile-img" />
            <div className="notification-text">
              <span className="username">{item.username} </span>
              <span className="message">{item.message}</span>
              <span className="time">{item.time}</span>
            </div>
            <button className="follow-btn">Follow</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
