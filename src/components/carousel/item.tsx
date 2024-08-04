import React, { useCallback, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { GleamyProvider, Gold } from 'gleamy';
import { createTextAnimation, letterAnimation } from './animation';
import { useNavigate } from 'react-router-dom';

const CircleSVG: React.FC = () => (
  <motion.svg
    width="400"
    height="400"
    viewBox="0 0 400 400"
    xmlns="http://www.w3.org/2000/svg"
    initial="hidden"
    animate="visible"
  >
    <motion.circle
      cx="200"
      cy="200"
      r="200"
      stroke="#FFD700"
      strokeWidth="4"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 1 }}
    />
  </motion.svg>
);

export const CarouselItem: React.FC = () => {
  const navigate = useNavigate();
  const controls = useAnimation();

  const startAnimation = useCallback(async () => {
    await controls.start({ opacity: 1, transition: { duration: 0.5 } });
    await new Promise(resolve => setTimeout(resolve, 200));
    await controls.start({ y: 0, transition: { duration: 0.5 } });
  }, [controls]);

  useEffect(() => {
    startAnimation();
    return () => {
      controls.stop();
    };
  }, [startAnimation]);

  return (
    <div className='w-full relative overflow-visible h-[384px]'>
    <motion.section 
      className='relative flex flex-row w-full px-10 lg:px-16 justify-between h-96 border-b-4 border-gray-500/10 overflow-hidden'
      initial={{ opacity: 0 }}
      animate={controls}
    >

      <motion.article className='z-10' variants={createTextAnimation(0.2)} initial="hidden" animate="visible">
        {Array.from("potencia tu").map((letter, index) => (
          <motion.span key={index} variants={letterAnimation} className='uppercase text-massive font-display font-bold text-white'>
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.article>

      <motion.div 
        className='relative h-96 w-96 left-0 -bottom-32'
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className='absolute top-0 left-0 w-full h-full'>
          <GleamyProvider>
            <Gold
              width={384}
              height={384}
              clipPath={CircleSVG}
              clipPathScale={1}
              style={{ opacity: 0.15, borderRadius: '50%' }}
            />
          </GleamyProvider>
        </div>
        <motion.img 
          className='h-96 w-96 relative z-10 bottom-20'
          src="/assets/hand.png" 
          alt="Hand"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        />
      </motion.div>
      <motion.article className='z-10' variants={createTextAnimation(0.6)} initial="hidden" animate="visible">
        {Array.from("fuerza").map((letter, index) => (
          <motion.span key={index} variants={letterAnimation} className='uppercase text-massive font-display font-bold text-yellow-300'>
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.article>
    </motion.section>
     <button onClick={()=>navigate('/get-started')} className='py-4 px-16 bg-yellow-500/90 cursor-pointer absolute left-1/2 z-50 bottom-0 rounded-full text-lg'>EMPEZAR YA</button>
    </div>
  );
};
