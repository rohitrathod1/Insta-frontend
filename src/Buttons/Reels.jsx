import React, { useState, useRef, useEffect } from "react";
import "./Style.css";

const reelsData = [
  {
    id: 1,
    videoSrc: "/imgs/python.mp4",
    profileImage: "https://m.media-amazon.com/images/I/51ORwfFIAzL._AC_UF894,1000_QL80_.jpg",
    userName: "rohitrathod1592",
    songName: "humnava_mere.original_son",
    caption: "read this content",
  },
  {
    id: 2,
    videoSrc: "/imgs/python.mp4",
    profileImage: "https://m.media-amazon.com/images/I/51ORwfFIAzL._AC_UF894,1000_QL80_.jpg",
    userName: "john_doe",
    songName: "summer_vibes",
    caption: "enjoying the summer",
  },
];

const Reels = () => {
  const [currentReel, setCurrentReel] = useState(0);
  const [liked, setLiked] = useState(false);
  const [following, setFollowing] = useState(false);
  const videoRefs = useRef([]);

  useEffect(() => {
    if (videoRefs.current[currentReel]) {
      videoRefs.current[currentReel].play();
    }
  }, [currentReel]);

  const handleVideoClick = (index) => {
    const video = videoRefs.current[index];
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const handleScroll = (event) => {
    if (event.deltaY > 0 && currentReel < reelsData.length - 1) {
      setCurrentReel((prev) => prev + 1);
    } else if (event.deltaY < 0 && currentReel > 0) {
      setCurrentReel((prev) => prev - 1);
    }
  };

  return (
    <div className="reel-container" onWheel={handleScroll}>
      {reelsData.map((reel, index) => (
        <div
          key={reel.id}
          className={`reel-video ${index === currentReel ? "active" : "hidden"}`}
        >
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            src={reel.videoSrc}
            autoPlay={index === currentReel}
            loop
            onClick={() => handleVideoClick(index)}
          ></video>
          <div className="reel-details">
            <div className="profile-content">
              <div className="profile-img">
                <img src={reel.profileImage} alt="Profile" />
              </div>
              <div className="profile-name">
                <p>{reel.userName}</p>
                <span>{reel.songName}</span>
                <button onClick={() => setFollowing(!following)}>
                  {following ? "Following.." : "Follow"}
                </button>
              </div>
            </div>
            <div className="caption">
              <span>{reel.caption}</span>
            </div>
          </div>
          <div className="icon-like">
            <i
              className={`fa${liked ? "s" : "r"} fa-heart`}
              onClick={() => setLiked(!liked)}
            ></i>
            <i className="fa-regular fa-comments"></i>
            <i className="fa-regular fa-paper-plane"></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reels;
