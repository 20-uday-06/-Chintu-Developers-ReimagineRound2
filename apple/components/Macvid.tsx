// app/components/VideoPlayer.js
import React from "react";

const Macvid = () => {
  return (
    <video width="100%" height="100%" autoPlay muted loop>
      <source src="/videos/3vid/mac.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Macvid;
