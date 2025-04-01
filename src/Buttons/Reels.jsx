import React, { useRef } from 'react';
import "./Style.css";

const Reels = () => {
  const profileData = {
    profileImage: "https://m.media-amazon.com/images/I/51ORwfFIAzL._AC_UF894,1000_QL80_.jpg",
    userName: "rohitrathod1592",
    songName: "humnava_mere.original_son",
    caption:"read this content"
  };
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div className='reel-container'>
      <div className="reel-video">
        <video
          ref={videoRef}
          src="/imgs/python.mp4"
          autoPlay
          muted
          loop
          onClick={handleVideoClick}
        ></video>
        <div className="reel-details">
          <div className="profile-content">
            <div className="profile-img">
              <img src={profileData.profileImage} alt="Profile" />
            </div>
            <div className="profile-name">
              <div className="text">
              <p>{profileData.userName}</p>
              <span>{profileData.songName}</span>
              </div>
              <div className="follow-btns">
                <button>Follow</button>
              </div>
            </div>
          </div>
          <div className="caption">
          <span>{profileData.caption}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reels;
