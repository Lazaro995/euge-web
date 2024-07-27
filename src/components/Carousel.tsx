import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  'imagen1.jpeg',
  'imagen2.jpeg',
  'imagen3.jpeg'
];

const Carousel: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop = {true}
      className="mt-4"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
            <div>hola</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
