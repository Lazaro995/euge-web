import React from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer: React.FC<{ videoId: string }> = ({ videoId }) => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="shadow-lg rounded-lg overflow-hidden mb-4">
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default YouTubePlayer;
