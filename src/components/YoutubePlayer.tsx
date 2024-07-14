import React from 'react';
import YouTube from 'react-youtube';
import { motion } from 'framer-motion'
const YouTubePlayer: React.FC<{ videoId: string }> = ({ videoId }) => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <motion.div
      className='shadow-lg rounded-lg overflow-hidden mb-4'
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <YouTube videoId={videoId} opts={opts} />
    </motion.div>

  );
};

export default YouTubePlayer;
