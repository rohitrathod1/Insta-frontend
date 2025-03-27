import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart, faBookmark as solidBookmark } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faComment, faBookmark, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import Statubar from "./Statusbar";
const Middleside = () => {
  return (
    <div>
      <div className="middle-box">
        <Statubar />
        <div className="main-content">
          <div className="reel-head">
            <div className='reel-img-block'>
              <div>
                <img src="/imgs/RRR.jpg" className='reel-img-profile' alt="Profile" />
              </div>
              <div className="reel-profile-text">
                <div className='bluestar-text'>
                  <p>Rohit Rathod</p>
                  <img src="/imgs/blueicon.jpg" alt="" className='blueicon' />
                </div>
                <span>original audio</span>
              </div>
            </div>
            <div>...</div>
          </div>

          <div className="reels-images">
            <img src="/imgs/RRR.jpg" alt="" />
          </div>
          <div>
            <div className="post-actions">
              <div className="left-icons">
                <FontAwesomeIcon icon={faHeart} className="icon" />
                <FontAwesomeIcon icon={faComment} className="icon" />
                <FontAwesomeIcon icon={faPaperPlane} className="icon" />
                <p>11,791 likes</p>
              </div>
              <FontAwesomeIcon icon={faBookmark} className="icon" />
            </div>
            <div className="post-caption">
              <span className="username">rohirathod1592</span> new post on instagaram …
            </div>
            <div className="view-comments">View all 140 comments</div>
            <div className="add-comment">Add a comment...</div>
          </div>
        </div>
        <div className="main-content">
          <div className="reel-head">
            <div className='reel-img-block'>
              <div>
                <img src="/imgs/RRR.jpg" className='reel-img-profile' alt="Profile" />
              </div>
              <div className="reel-profile-text">
                <div className='bluestar-text'>
                  <p>Rohit Rathod</p>
                  <img src="/imgs/blueicon.jpg" alt="" className='blueicon' />
                </div>
                <span>original audio</span>
              </div>
            </div>
            <div>...</div>
          </div>

          <div className="reels-images">
            <img src="/imgs/RRR.jpg" alt="" />
          </div>
          <div>
            <div className="post-actions">
              <div className="left-icons">
                <FontAwesomeIcon icon={faHeart} className="icon" />
                <FontAwesomeIcon icon={faComment} className="icon" />
                <FontAwesomeIcon icon={faPaperPlane} className="icon" />
                <p>11,791 likes</p>
              </div>
              <FontAwesomeIcon icon={faBookmark} className="icon" />
            </div>
            <div className="post-caption">
              <span className="username">rohirathod1592</span> new post on instagaram …
            </div>
            <div className="view-comments">View all 140 comments</div>
            <div className="add-comment">Add a comment...</div>
          </div>
        </div>
        <div className="main-content">
          <div className="reel-head">
            <div className='reel-img-block'>
              <div>
                <img src="/imgs/RRR.jpg" className='reel-img-profile' alt="Profile" />
              </div>
              <div className="reel-profile-text">
                <div className='bluestar-text'>
                  <p>Rohit Rathod</p>
                  <img src="/imgs/blueicon.jpg" alt="" className='blueicon' />
                </div>
                <span>original audio</span>
              </div>
            </div>
            <div>...</div>
          </div>
          <div className="reels-images">
            <img src="/imgs/RRR.jpg" alt="" />
          </div>
          <div>
            <div className="post-actions">
              <div className="left-icons">
                <FontAwesomeIcon icon={faHeart} className="icon" />
                <FontAwesomeIcon icon={faComment} className="icon" />
                <FontAwesomeIcon icon={faPaperPlane} className="icon" />
                <p>11,791 likes</p>
              </div>
              <FontAwesomeIcon icon={faBookmark} className="icon" />
            </div>
            <div className="post-caption">
              <span className="username">rohirathod1592</span> new post on instagaram …
            </div>
            <div className="view-comments">View all 140 comments</div>
            <div className="add-comment">Add a comment...</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Middleside;