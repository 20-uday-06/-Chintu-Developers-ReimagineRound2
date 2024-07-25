// app/components/VideoPlayer.js
import React from 'react';

const VideoPlayer = () => {
  return (
    <video width= "100%" height="100%" autoPlay muted loop style={{borderRadius: "30px"}}>
      <source src="/videos/large.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;


