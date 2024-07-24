// app/components/VideoPlayer.js
import React from 'react';

const VideoPlayer = () => {
  return (
    <video width= "100%" height="auto" autoPlay muted loop>
      <source src="/videos/large.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;


