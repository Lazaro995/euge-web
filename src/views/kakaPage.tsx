// PageWithVideo.tsx
import React from 'react';
import VideoDetails from '../components/video-details/VideoDetails';
import VideoPlayer from '../components/video-details/VideoPlayer';
import { getYouTubeId } from '../utils';
import MockData from "../components/video-details/mock.json"


const kakaPage: React.FC = () => {
    const handleShare = () => {
        alert('Video shared!');
    };

    const handleLike = () => {
        console.log('Video liked!');
    };

    const videoId = getYouTubeId(MockData.post.video.url);

    return (
        <div className="relative p-4 max-w-7xl mx-auto mt-20">
            <div className="flex flex-col lg:flex-row lg:space-x-4">
                <div className="w-full lg:w-3/5 mb-4 lg:mb-0">
                    <div className="aspect-w-16 aspect-h-9 mb-4">
                        {videoId && <VideoPlayer videoId={videoId} />}
                    </div>
                    <VideoDetails
                        post={MockData.post}
                        profile={MockData.profile}
                        onShare={handleShare}
                        onLike={handleLike}
                    />
                </div>
                <div className="w-full lg:w-2/5 bg-secondary p-4 rounded">
                    {/* Aquí puedes añadir el contenido de la segunda columna */}
                    <h2 className="text-xl font-bold text-highlight mb-2">Más información</h2>
                    <p className="text-text">Contenido adicional aquí...</p>
                </div>
            </div>
        </div>
    );
};

export default kakaPage;
