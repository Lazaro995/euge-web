import React from 'react';
import { motion } from 'framer-motion';
import Carousel from '../components/Carousel';
import YouTubePlayer from '../components/YoutubePlayer';
import { getYouTubeId } from '../utils';

const IndexPage: React.FC = () => {
  const youtubeLinks = [
    'https://www.youtube.com/watch?v=ddj9qUJUAoA&t=1456s',
    'https://www.youtube.com/watch?v=iMvADI6vwzA&t=1253s',
    'https://www.youtube.com/watch?v=iMvADI6vwzA&t=1253s',
  ];

  const videoIds = youtubeLinks.map(link => getYouTubeId(link)).filter(id => id !== null) as string[];

  return (
    <>
      <section id="home" className="pt-16">
        <div className="container mx-auto">
          <motion.h1
            className="text-4xl text-highlight font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Hola, soy Eugenia
          </motion.h1>
          <motion.p
            className="text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Mira mis cursos
          </motion.p>
          <Carousel />
        </div>
      </section>
      <section id="youtube" className="py-10">
        <div className="container mx-auto">
          <motion.h2
            className="text-2xl font-bold text-highlight mb-4"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            YouTube Videos
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {videoIds.map((link, index) => (
              <YouTubePlayer key={index} videoId={link} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default IndexPage;
