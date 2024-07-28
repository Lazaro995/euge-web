import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ImCross } from 'react-icons/im';

interface CardProps {
    imageUrl: string;
    title: string;
    description: string;
    bgColor: string;
    titleColor: string;
    descriptionColor: string;
    yPos: number;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description, bgColor, titleColor, descriptionColor, yPos }) => {
    const [state, setState] = useState(false);
    const controls = useAnimation();

    const handleTap = () => {
        state ? controls.start({ y: 0 }) : setState(!state);
    };

    const variants = {
        active: {
            width: '100%',
            height: '90vh',
            borderRadius: 0,
            overflow: "visible",
            left: '0%',
            y: 0,
            transition: { duration: 0.3, type: "spring", damping: 10, mass: 0.6 }
        },
        inactive: {
            width: '100%',
            height: '280px',
            borderRadius: '24px',
            overflow: "hidden",
            left: '0%',
            y: yPos,
            transition: { duration: 0.3, type: "spring", damping: 10, mass: 0.6 }
        }
    };

    return (
        <motion.div
            variants={variants}
            animate={state ? "active" : "inactive"}
            initial="inactive"
            style={{ zIndex: state ? 10 : 1, position: 'relative', cursor: 'pointer', margin: '0 auto' }}
            onClick={handleTap}
            className={`${bgColor} shadow-lg`}
        >
            <motion.div
                initial={{ height: '100%' }}
                animate={controls}
                className="overflow-y-scroll"
            >
                <div className="relative">
                    <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />
                    <div className="absolute top-4 left-4">
                        <h2 className={`${titleColor} text-2xl font-semibold`}>{title}</h2>
                        <p className={`${descriptionColor} opacity-75`}>{description}</p>
                    </div>
                </div>
                <div className="p-4 bg-white">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
            </motion.div>
            {state && (
                <div
                    className="absolute top-4 right-4 bg-green-500 p-1 rounded-full"
                    onClick={(e) => {
                        e.stopPropagation();
                        setState(false);
                    }}
                >
                    <ImCross color="white" />
                </div>
            )}
        </motion.div>
    );
};

export default Card;
