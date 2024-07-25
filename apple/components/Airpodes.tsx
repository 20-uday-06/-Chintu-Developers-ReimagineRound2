// app/components/VideoPlayer.js
import React from 'react';

const Airpods = () => {
  return (
    <video width= "100%" height="auto" autoPlay muted loop style={{borderRadius: "30px"}}>
      <source src="/videos/airpods.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Airpods;


