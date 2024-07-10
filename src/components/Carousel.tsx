import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Carousel: React.FC = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1} loop={true}>
      <SwiperSlide><img src="imagen1.jpeg" alt="Slide 1" className="w-full h-full object-cover" /></SwiperSlide>
      <SwiperSlide><img src="imagen2.jpeg" alt="Slide 2" className="w-full h-full object-cover" /></SwiperSlide>
      <SwiperSlide><img src="imagen3.jpeg" alt="Slide 3" className="w-full h-full object-cover" /></SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
