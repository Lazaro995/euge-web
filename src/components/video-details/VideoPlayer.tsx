// VideoPlayer.tsx
import { MediaPlayer, MediaProvider } from '@vidstack/react';
interface VideoPlayerProps {
    videoId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;

    return (
        <MediaPlayer title="Sprite Fight" src={videoSrc}>
            <MediaProvider />
        </MediaPlayer>
    );
};

export default VideoPlayer;
