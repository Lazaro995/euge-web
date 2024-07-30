import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { CircleBackground } from './carousel/circle-action';
import { CarouselItem } from './carousel/item';

const images = [
  'imagen1.jpeg',
  'imagen2.jpeg',
  'imagen3.jpeg'
];

const Carousel: React.FC = () => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      spaceBetween={0}
      slidesPerView={1}
      effect="fade"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      speed={1000}
      className="mt-4"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CarouselItem/>  
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
