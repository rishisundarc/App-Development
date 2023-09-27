import React from 'react';
import '../assests/css/landing.css';
import video from '../pictures/landing.mp4';
const BackgroundVideo = () => {
  return (
    <div className="background-video">
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Add any content you want on top of the video here */}
    </div>
  );
};

export default BackgroundVideo;
