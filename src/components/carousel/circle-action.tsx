import React, { useState, useEffect } from 'react';
import TWallpaper from '@twallpaper/react';
import { motion, AnimatePresence } from 'framer-motion';
import carouselGradient from './background.json';

interface CircleBackgroundProps {
  children?: React.ReactNode;
}

export const CircleBackground: React.FC<CircleBackgroundProps> = ({ children }) => {
  return (
    <div className='absolute h-12 w-12'>
        <TWallpaper options={carouselGradient} />
    </div>
  );
};
