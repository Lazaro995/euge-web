import TWallpaper from '@twallpaper/react';
import carouselGradient from './background.json';

interface CircleBackgroundProps {
  children?: React.ReactNode;
}

export const CircleBackground: React.FC<CircleBackgroundProps> = () => {
  return (
    <div className='absolute h-12 w-12'>
        <TWallpaper options={carouselGradient} />
    </div>
  );
};
