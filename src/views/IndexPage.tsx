import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Carousel from '../components/Carousel';
import { Testimonials } from '../components/testimonials';
import { TrailerSection } from '../components/trailer';
import { DietSection } from '../components/diet';
import { ContactSection } from '../components/contact';

const IndexPage: React.FC = () => {
  const [isTrainerActive, setIsTrainerActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTrainerActive(true);
    }, 2000); // 2 segundos

    return () => clearTimeout(timer);
  }, []);

  // const youtubeLinks = [
  //   'https://www.youtube.com/watch?v=ddj9qUJUAoA&t=1456s',
  //   'https://www.youtube.com/watch?v=iMvADI6vwzA&t=1253s',
  //   'https://www.youtube.com/watch?v=iMvADI6vwzA&t=1253s',
  // ];
  // const videoIds = youtubeLinks.map(link => getYouTubeId(link)).filter((id): id is string => id !== null);

  return (
    <main className='py-12 relative'>
      <section id="home" className="pt-16">
        <Carousel />
      </section>
      <article className='absolute top-[16%] overflow-visible left-24 w-[600px]'>
        <Testimonials />
      </article>
      {isTrainerActive && (
        <motion.div 
          className='fixed bottom-0 right-16 z-50'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <img 
            src='/assets/trainer.png' 
            className='h-72 cursor-pointer'
            alt="Trainer"
          />
        </motion.div>
      )}
      <section className='py-96'>
        <TrailerSection />
        <DietSection />
        <ContactSection />
      </section>
    </main>
  );
};

export default IndexPage;
