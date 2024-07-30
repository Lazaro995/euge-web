import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { TESTIMONIALS } from './constants';
import TestimonialItem from './item';
import { Testimonial } from './interfaces';

export const Testimonials: React.FC = () => {
  const [show, setShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    },4000);
    return () => clearTimeout(timer);
  }, []);

  const getAutoplayDelay = useCallback((description: string) => {
    const baseDelay = 3000;
    const charDelay = 25;
    return baseDelay + description.length * charDelay;
  }, []);

  const autoplayDelay = useMemo(() => {
    const delays = TESTIMONIALS.map(t => getAutoplayDelay(t.description));
    return Math.max(...delays);
  }, [getAutoplayDelay]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomDelay = Math.floor(Math.random() * (40000 - 15000 + 1)) + 15000;
      setTimeout(() => {
        setActiveIndex(prevIndex => (prevIndex + 1) % TESTIMONIALS.length);
      }, randomDelay);
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, [autoplayDelay]);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  const getStyle = (index: number) => {
    if (index === activeIndex) return 'opacity-100 brightness-100';
    if (index < activeIndex) return 'opacity-0 brightness-0';
    const rightOffset = index - activeIndex;
    const opacity = Math.max(0, 1 - rightOffset * 0.2);
    const brightness = Math.max(0, 1 - rightOffset * 0.1);
    return `opacity-${Math.round(opacity * 100)} brightness-${Math.round(brightness * 100)}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      className='relative overflow-visible  -top-32 -left-32'
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      {show && (
        <Swiper
          slidesPerView={8}
          autoplay={{
            delay: autoplayDelay,
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {TESTIMONIALS.map((testimonial: Testimonial, index: number) => (
            <SwiperSlide key={index}>
              <div className={`w-[320px] ${getStyle(index)}`}>
                <TestimonialItem 
                  {...testimonial} 
                  index={index}
                  isActive={index === activeIndex}
                  onItemClick={handleItemClick}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </motion.div>
  );
};


