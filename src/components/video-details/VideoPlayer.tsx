// VideoPlayer.tsx
import React from 'react';
import Plyr from 'plyr-react';

interface VideoPlayerProps {
  videoId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
  const videoSrc = {
    type: 'video' as const,
    sources: [
      {
        src: videoId,
        provider: 'youtube' as const,
      },
    ],
  };

  return (
    <div className="relative" >
      <Plyr source={videoSrc} />
    </div>
  );
};

export default VideoPlayer;
