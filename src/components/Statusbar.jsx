import React, { useState } from 'react';
import './style.css'; // We'll create this CSS file

const Statusbar = () => {
  const [stories, setStories] = useState([
    {
      id: 1,
      username: 'kunnu lt',
      image: '/imgs/RRR.jpg',
      viewed: false
    },
    {
      id: 2,
      username: 'rohan pa',
      image: '/imgs/RRR.jpg',
      viewed: false
    },
    {
      id: 3,
      username: 'hemant ra',
      image: '/imgs/RRR.jpg',
      viewed: false
    },
    {
      id: 4,
      username: 'manish v',
      image: '/imgs/RRR.jpg',
      viewed: false
    },
    {
      id: 5,
      username: 'khushall xd its panku',
      image: '/imgs/RRR.jpg',
      viewed: false
    },
    {
      id: 6,
      username: 'aniket jad',
      image: '/imgs/RRR.jpg',
      viewed: false
    },
    {
      id: 7,
      username: 'wikash_rat',
      image: '/imgs/RRR.jpg',
      viewed: false
    },
    {
      id: 8,
      username: 'wikash_rat',
      image: '/imgs/RRR.jpg',
      viewed: false
    },
    {
      id: 9,
      username: 'wikash_rat',
      image: '/imgs/RRR.jpg',
      viewed: false
    },
    {
      id: 10,
      username: 'wikash_rat',
      image: '/imgs/RRR.jpg',
      viewed: false
    },
  ]);

  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [showStoryViewer, setShowStoryViewer] = useState(false);

  const openStory = (index) => {
    setCurrentStoryIndex(index);
    setShowStoryViewer(true);
    const updatedStories = [...stories];
    updatedStories[index].viewed = true;
    setStories(updatedStories);
  };

  const goToNextStory = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
      
      // Mark as viewed
      const updatedStories = [...stories];
      updatedStories[currentStoryIndex + 1].viewed = true;
      setStories(updatedStories);
    } else {
      setShowStoryViewer(false);
    }
  };

  const goToPrevStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
    } else {
      setShowStoryViewer(false);
    }
  };

  return (
    <div className="instagram-stories">  
      {/* Story circles */}
      <div className="story-container">
        {stories.map((story, index) => (
          <div 
            key={story.id} 
            className={`story-circle ${story.viewed ? 'viewed' : ''}`}
            onClick={() => openStory(index)}
          >
            <div className="story-image-wrapper">
              <img 
                src={story.image} 
                alt={story.username} 
                className="story-preview-image"
              />
            </div>
            <span className="story-username">{story.username}</span>
          </div>
        ))}
      </div>
      
      {/* Story viewer modal */}
      {showStoryViewer && (
        <div className="story-viewer">
          <div className="story-header">
            <div className="progress-bars">
              {stories.map((_, index) => (
                <div 
                  key={index} 
                  className={`progress-bar ${index <= currentStoryIndex ? 'active' : ''} ${index < currentStoryIndex ? 'completed' : ''}`}
                />
              ))}
            </div>
            <div className="story-user-info">
              <span className="story-viewer-username">{stories[currentStoryIndex].username}</span>
              <button className="close-button" onClick={() => setShowStoryViewer(false)}>×</button>
            </div>
          </div>
          
          <div className="story-content">
            <img 
              src={stories[currentStoryIndex].image} 
              alt={`Story by ${stories[currentStoryIndex].username}`} 
              className="story-image"
            />
            
            <button className="nav-button prev-button" onClick={goToPrevStory}>&lt;</button>
            <button className="nav-button next-button" onClick={goToNextStory}>&gt;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Statusbar;