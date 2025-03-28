import React from 'react';
import "./style.css";

const Rightside = () => {
  const profileData = {
    profileImage: "https://m.media-amazon.com/images/I/51ORwfFIAzL._AC_UF894,1000_QL80_.jpg",
    userName: "rohitrathod1592",
    userId: "Rohit Rathod"
  };

  const suggestedUsers = [
    { username: "krishnapawar3162", followers: "Followed by itz__.roshan.__000 ..." },
    { username: "avi_rathod051", followers: "Followed by vivek_kumar_aghicha..." },
    { username: "its_nikkuuuuu_7", followers: "Followed by avinash_r,." },
    { username: "its_dhoni_07", followers: "Followed by its_nikkuuuu..." },
    { username: "rohan_pawar7", followers: "Followed by its_nikkuuuuu" },
    { username: "rohanpritsing_pawar_01", followers: "Followed by its_nikkuuuuu_" }
  ];

  return (
    <div className="right-box">
      
      {/* User Profile Section */}
      <div className="profile-content">
        <div className="profile-img">
          <img src={profileData.profileImage} alt="Profile" />
        </div>
        <div className="profile-name">
          <p>{profileData.userName}</p>
          <span>{profileData.userId}</span>
        </div>
        <div className="follow-btns">
          <p>Switch</p>
        </div>
      </div>
      <div className="suggesting">
        <p>Suggested for you</p>
        <span>See All</span>
      </div>

      {suggestedUsers.map((user, index) => (
        <div className="profile-content" key={index}>
          <div className="profile-img">
            <img src={profileData.profileImage} alt="Suggested User" />
          </div>
          <div className="profile-name">
            <p>{user.username}</p>
            <span className="followers">{user.followers}</span>
          </div>
          <div className="follow-btn">
            <p>Follow</p>
          </div>
        </div>
      ))}
      <div className="right-bottom">
        <div className="bottom-nav">
          <span>About</span>
          <span>Help</span>
          <span>Press</span>
          <span>API</span>
          <span>Jobs</span>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Location</span>
          <span>Language</span>
          <span>Meta Verified</span>
        </div>
        <div className="meta">
          <span>© 2025 INSTAGRAM FROM META</span>
        </div>
      </div>

    </div>
  );
};

export default Rightside;
