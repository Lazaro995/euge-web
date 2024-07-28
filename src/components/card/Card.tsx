import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    imageUrl: string;
    title: string;
    description: string;
    bgColor: string;
    titleColor: string;
    descriptionColor: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description, bgColor,titleColor,descriptionColor }) => (
    <motion.div
        className={`flex flex-row w-full h-64 overflow-hidden rounded-xl ${bgColor}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
    >
        <div className={`p-4 w-4/6 rounded-lg${bgColor}`}>
            <h3 className={`${titleColor} text-xl font-semibold`}>{title}</h3>
            <p className={`${descriptionColor}`}>{description}</p>
        </div>
        <img
            src={imageUrl}
            alt={title}
            className="object-cover"
        />
    </motion.div>
);

export default Card;
