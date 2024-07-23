// app/components/VideoPlayer.js
import React from 'react';

const Watchvid = () => {
  return (
    <video width= "100%" height="80%" autoPlay muted loop>
      <source src="/videos/3vid/watch.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Watchvid;
