import React from 'react';
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHouse, faMagnifyingGlass, faCompass, faCirclePlay, 
  faPaperPlane, faHeart, faSquarePlus, faSquarePollVertical, faBars 
} from "@fortawesome/free-solid-svg-icons";

const Leftside = () => {
  return (
    <div>
      <div className="left-box">
        <div className='image'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
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
              x="50"
              y="60"
              fontFamily="'Brush Script MT', cursive"
              fontSize="30"
              fill="url(#instaTextGradient)"
              fontWeight="normal">
              Instagram
            </text>
          </svg>
        </div>

        <div className="list-box">
          <ul>
            <li className='li-name home-btn'><lord-icon src="https://cdn.lordicon.com/jeuxydnh.json" trigger="click" state="morph-neighbourhood" colors="primary:#eeca66,secondary:#08a88a"></lord-icon><p> Home</p></li>
            <li className='li-name'><lord-icon src="https://cdn.lordicon.com/wjyqkiew.json"
              trigger="click"
              state="morph-cross"
              colors="primary:#eeca66,secondary:#08a88a"></lord-icon><p>Search</p></li>
            <li className='li-name'><lord-icon
              src="https://cdn.lordicon.com/qfwgmyhc.json"
              trigger="click"
              stroke="bold"
              colors="primary:#eeca66,secondary:#08a88a"
            >
            </lord-icon><p>Reels</p></li>
            <li className='li-name'><lord-icon
    src="https://cdn.lordicon.com/ozlkyfxg.json"
    trigger="click"
    colors="primary:#bcee66,secondary:#e8e230">
</lord-icon><p>Message</p></li>
            <li className='li-name'><lord-icon
    src="https://cdn.lordicon.com/aydxrkfl.json"
    trigger="click"
    state="morph-glitter"
    colors="primary:#bcee66,secondary:#e8e230">
</lord-icon><p>Notification</p></li>
            <li className='li-name'><lord-icon
    src="https://cdn.lordicon.com/wsaaegar.json"
    trigger="click"   delay="1000"
    state="in-reveal"
    colors="primary:#bcee66,secondary:#e8e230">
</lord-icon><p> Create</p></li>
            <li className='li-name'><lord-icon
    src="https://cdn.lordicon.com/fcyboqbm.json"
    trigger="click"
    colors="primary:#bcee66,secondary:#e8e230">
</lord-icon><p>Dashboard</p></li>
            <li className='li-name'><FontAwesomeIcon icon={faBars} /><p> More</p></li>
          </ul>
        </div>
        
        <div className='img-block li-name'>
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
  )
}

export default Leftside;