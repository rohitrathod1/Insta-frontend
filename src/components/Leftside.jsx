import React from 'react';
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Leftside = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="left-box">
        <div className="list-box">
          <div className='list-box-ul'>
            <ul>
              <div className="ul-li insta-text" onClick={() => navigate("/home")}>
                <li className='li-name' >
                  <lord-icon
                    src="https://cdn.lordicon.com/roscsuft.json"
                    trigger="morph"
                    state="morph-alone"
                    colors="primary:#9cf4a7,secondary:#08a88a">
                  </lord-icon>
                </li>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 150 40"
                    height="40"
                    aria-label="Instagram"
                  >
                    <defs>
                      <linearGradient id="instaTextGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#FEDA77' }} />
                        <stop offset="25%" style={{ stopColor: '#F58529' }} />
                        <stop offset="50%" style={{ stopColor: '#DD2A7B' }} />
                        <stop offset="75%" style={{ stopColor: '#8134AF' }} />
                        <stop offset="100%" style={{ stopColor: '#515BD4' }} />
                      </linearGradient>
                    </defs>
                    <text
                      x="0"
                      y="30"
                      fontFamily="'Brush Script MT', cursive"
                      fontSize="30"
                      fill="url(#instaTextGradient)"
                      fontWeight="normal"
                    >
                      Instagram
                    </text>
                  </svg>
                </p>
              </div>
              <div className="ul-li" onClick={() => navigate("/home")}>
                <li className='li-name' >
                  <lord-icon src="https://cdn.lordicon.com/jeuxydnh.json" trigger="click" state="morph-neighbourhood" colors="primary:#eeca66,secondary:#08a88a"></lord-icon>
                </li>
                <p>Home</p>
              </div>
              <div className="ul-li" onClick={() => navigate("/home/buttons/search")}>
                <li className='li-name' >
                  <lord-icon src="https://cdn.lordicon.com/wjyqkiew.json" trigger="click" state="morph-cross" colors="primary:#eeca66,secondary:#08a88a"></lord-icon>
                </li>
                <p>Search</p>
              </div>
              <div className="ul-li" onClick={() => navigate("/home/buttons/reels")}>
                <li className='li-name' >
                  <lord-icon src="https://cdn.lordicon.com/qfwgmyhc.json" trigger="click" stroke="bold" colors="primary:#eeca66,secondary:#08a88a"></lord-icon>
                </li>
                <p>Reels</p>
              </div>
              <div className="ul-li" onClick={() => navigate("/home/buttons/message")}>
                <li className='li-name' >
                  <lord-icon src="https://cdn.lordicon.com/ozlkyfxg.json" trigger="click" colors="primary:#bcee66,secondary:#e8e230"></lord-icon>
                </li>
                <p>Message</p>
              </div>
              <div className="ul-li" onClick={() => navigate("/home/buttons/notification")}>
                <li className='li-name' >
                  <lord-icon src="https://cdn.lordicon.com/aydxrkfl.json" trigger="click" state="morph-glitter" colors="primary:#bcee66,secondary:#e8e230"></lord-icon>
                </li>
                <p>Notification</p>
              </div>
              <div className="ul-li" onClick={() => navigate("/home/buttons/create")}>
                <li className='li-name' >
                  <lord-icon src="https://cdn.lordicon.com/wsaaegar.json" trigger="click" colors="primary:#9cf4a7,secondary:#eeca66"></lord-icon>
                </li>
                <p>Create</p>
              </div>
              <div className="ul-li" onClick={() => navigate("/home/buttons/dashboard")}>
                <li className='li-name' >
                  <lord-icon src="https://cdn.lordicon.com/fcyboqbm.json" trigger="click" colors="primary:#bcee66,secondary:#e8e230"></lord-icon>
                </li>
                <p>Dashboard</p>
              </div>
              <div className="ul-li" onClick={() => navigate("/home/buttons/more")}>
                <li className='li-name'>
                  <FontAwesomeIcon icon={faBars} className='awesome' />
                </li>
                <p>More</p>
              </div>
            </ul>
          </div>
        </div>
        <div className='img-block li-name' onClick={() => navigate("/home/buttons/Userid")}>
          <div>
            <img src="/imgs/RRR.jpg" className='img-profile' alt="Profile" />
          </div>
          <div className="profile-text">
            <p>Profile</p>
            <span>Rohit Rathod</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftside;
