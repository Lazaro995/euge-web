import React from 'react';
import Card from '../components/card/Card';
import getImageUrl from '../utils/static';

const cardImages = [
    {
        imageUrl: getImageUrl('bg-card.png'),
        title: 'Strong Grip',
        description: 'Feel the power in your hands.',
        bgColor: 'bg-purple-100',
        titleColor: 'text-black',
        descriptionColor: 'text-gray-600'
    },
    {
        imageUrl: getImageUrl('bg-card.png'),
        title: 'Exercise',
        description: 'Romanian deadlift and other exercises.',
        bgColor: 'bg-pink-100',
        titleColor: 'text-white',
        descriptionColor: 'text-gray-700'
    },
    {
        imageUrl: getImageUrl('bg-card.png'),
        title: 'Biggest training library',
        description: 'Find the best workout plans for you.',
        bgColor: 'bg-green-100',
        titleColor: 'text-gray-800',
        descriptionColor: 'text-gray-800'
    }
];

const GetStartedPage: React.FC = () => (
    <section id="get-started" className="py-10 bg-gray-100">
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Get Started</h2>
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
                    />
                ))}
            </div>
        </div>
    </section>
);


export default GetStartedPage;
