import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Leftside = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("/home");

  const handleNavigation = (path) => {
    setActiveTab(path);
    navigate(path);
  };

  return (
    <div>
      <div className="left-box">
        <div className="list-box">
          <div className="list-box-ul">
            <ul>
              <div
                className={`ul-li ${activeTab === "/home" ? "active" : ""}`}
                onClick={() => handleNavigation("/home")}
              >
                <li className="li-name">
                  <lord-icon
                    src="https://cdn.lordicon.com/jeuxydnh.json"
                    trigger="click"
                    state="morph-neighbourhood"
                    colors="primary:#eeca66,secondary:#08a88a"
                  ></lord-icon>
                </li>
                <p>Home</p>
              </div>

              <div
                className={`ul-li ${activeTab === "/home/buttons/search" ? "active" : ""}`}
                onClick={() => handleNavigation("/home/buttons/search")}
              >
                <li className="li-name">
                  <lord-icon
                    src="https://cdn.lordicon.com/wjyqkiew.json"
                    trigger="click"
                    state="morph-cross"
                    colors="primary:#eeca66,secondary:#08a88a"
                  ></lord-icon>
                </li>
                <p>Search</p>
              </div>

              <div
                className={`ul-li ${activeTab === "/home/buttons/reels" ? "active" : ""}`}
                onClick={() => handleNavigation("/home/buttons/reels")}
              >
                <li className="li-name">
                  <lord-icon
                    src="https://cdn.lordicon.com/qfwgmyhc.json"
                    trigger="click"
                    stroke="bold"
                    colors="primary:#eeca66,secondary:#08a88a"
                  ></lord-icon>
                </li>
                <p>Reels</p>
              </div>

              <div
                className={`ul-li ${activeTab === "/home/buttons/message" ? "active" : ""}`}
                onClick={() => handleNavigation("/home/buttons/message")}
              >
                <li className="li-name">
                  <lord-icon
                    src="https://cdn.lordicon.com/ozlkyfxg.json"
                    trigger="click"
                    colors="primary:#bcee66,secondary:#e8e230"
                  ></lord-icon>
                </li>
                <p>Message</p>
              </div>

              <div
                className={`ul-li ${activeTab === "/home/buttons/notification" ? "active" : ""}`}
                onClick={() => handleNavigation("/home/buttons/notification")}
              >
                <li className="li-name">
                  <lord-icon
                    src="https://cdn.lordicon.com/aydxrkfl.json"
                    trigger="click"
                    state="morph-glitter"
                    colors="primary:#bcee66,secondary:#e8e230"
                  ></lord-icon>
                </li>
                <p>Notification</p>
              </div>

              <div
                className={`ul-li ${activeTab === "/home/buttons/create" ? "active" : ""}`}
                onClick={() => handleNavigation("/home/buttons/create")}
              >
                <li className="li-name">
                  <lord-icon
                    src="https://cdn.lordicon.com/wsaaegar.json"
                    trigger="click"
                    colors="primary:#9cf4a7,secondary:#eeca66"
                  ></lord-icon>
                </li>
                <p>Create</p>
              </div>

              <div
                className={`ul-li ${activeTab === "/home/buttons/dashboard" ? "active" : ""}`}
                onClick={() => handleNavigation("/home/buttons/dashboard")}
              >
                <li className="li-name">
                  <lord-icon
                    src="https://cdn.lordicon.com/fcyboqbm.json"
                    trigger="click"
                    colors="primary:#bcee66,secondary:#e8e230"
                  ></lord-icon>
                </li>
                <p>Dashboard</p>
              </div>

              <div
                className={`ul-li ${activeTab === "/home/buttons/more" ? "active" : ""}`}
                onClick={() => handleNavigation("/home/buttons/more")}
              >
                <li className="li-name">
                  <FontAwesomeIcon icon={faBars} className="awesome" />
                </li>
                <p>More</p>
              </div>
            </ul>
          </div>
        </div>

        <div className="img-block li-name" onClick={() => handleNavigation("/home/buttons/Userid")}>
          <div>
            <img src="/imgs/RRR.jpg" className="img-profile" alt="Profile" />
          </div>
          <div className="profile-text">
            <p>Profile</p>
            <span>Rohit Rathod</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftside;
