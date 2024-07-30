import React, { useEffect } from "react";
import { motion, useAnimation } from 'framer-motion';

export const TestimonialBubble: React.FC<{ description: string; isActive: boolean }> = ({ description, isActive }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isActive) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.2 }
      });
    } else {
      controls.start({
        opacity: 0,
        y: 20,
        transition: { duration: 0.3 }
      });
    }
  }, [isActive, controls]);

  return (
    <motion.div
      className="relative mt-4 bg-white text-gray-600 w-64 p-4 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
    >
      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white"></div>
      <p className="text-sm">{description}</p>
    </motion.div>
  );
};
