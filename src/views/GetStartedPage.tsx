import React from 'react';
import Card from '../components/card/Card';
import getImageUrl from '../utils/static';

const cardImages = [
    {
        imageUrl: getImageUrl('bg-card.png'),
        title: 'Biceps',
        description: 'Breve introducción al powerlifting y la importancia de los bíceps en el entrenamiento de fuerza Beneficios de entrenar los bíceps para mejorar el rendimiento en otros ejercicios compuestos.',
        bgColor: 'bg-purpleLight',
        titleColor: 'text-black',
        descriptionColor: 'text-gray-600',
        yPos: 0
    },
    {
        imageUrl: getImageUrl('bg-card.png'),
        title: 'Triceps',
        description: '30 min',
        bgColor: 'bg-pinkLight',
        titleColor: 'text-white',
        descriptionColor: 'text-gray-700',
        yPos: 0
    },
    {
        imageUrl: getImageUrl('bg-card.png'),
        title: 'Piernas',
        description: '56 min',
        bgColor: 'bg-greenLight',
        titleColor: 'text-gray-800',
        descriptionColor: 'text-gray-800',
        yPos: 0
    }
];

const GetStartedPage: React.FC = () => (
    <section id="get-started" className="py-10 bg-gray-100">
        <div className="container mx-auto px-4">
            <h2 className="text-2xl text-black font-bold text-center mb-8">Get Started</h2>
            <div className="flex flex-col -space-y-6">
                {cardImages.map((card, index) => (
                    <Card
                        key={index}
                        imageUrl={card.imageUrl}
                        title={card.title}
                        description={card.description}
                        bgColor={card.bgColor}
                        titleColor={card.titleColor}
                        descriptionColor={card.descriptionColor}
                        yPos={card.yPos}
                    />
                ))}
            </div>
        </div>
    </section>
);


export default GetStartedPage;
