// VideoDetails.tsx
import React, { useState } from 'react';
import { FaShareAlt, FaHeart } from 'react-icons/fa';
import { Post, Profile } from './interfaces';

interface VideoDetailsProps {
    post: Post;
    profile: Profile;
    onShare: () => void;
    onLike: () => void;
}

const VideoDetails: React.FC<VideoDetailsProps> = ({ post, profile, onShare, onLike }) => {
    const { title, video, short_description, feedback } = post;
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
        onLike();
    };

    return (
        <div className="border p-4 my-4 rounded bg-secondary text-highlight">
            <div className="flex items-center mb-4">
                <img src={profile.imageUrl} alt={profile.name} className="w-10 h-10 rounded-full mr-4" />
                <div>
                    <span className="text-lg font-bold text-highlight">{profile.name}</span>
                    <div className="text-sm text-text">{profile.followers.toLocaleString()} followers</div>
                </div>
            </div>
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-sm text-text mb-4">{short_description}</p>
            <div className="flex justify-between items-center mb-4">
                <span className="text-text">{video.name}</span>
                <span className="text-text">{likes} likes</span>
            </div>
            <div className="flex gap-4 mb-4">
                <button
                    className="flex items-center gap-2 px-4 py-2 bg-buttonGradientStart text-black rounded hover:bg-buttonGradientEnd"
                    onClick={onShare}
                >
                    <FaShareAlt /> Share
                </button>
                <button
                    className="flex items-center gap-2 px-4 py-2 bg-buttonGradientStart text-black rounded hover:bg-buttonGradientEnd"
                    onClick={handleLike}
                >
                    <FaHeart /> Like
                </button>
            </div>
            <div>
                {feedback.comments.map((comment, index) => (
                    <div key={index} className="mt-2 text-text">
                        <strong>{comment.name}:</strong> {comment.comment} ({comment.likes} likes)
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoDetails;
