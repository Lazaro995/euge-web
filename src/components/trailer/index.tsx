import YouTube from 'react-youtube';

const VideoWrapper = ({ videoId }: { videoId: string }) => {
  const opts = {
    height: '220',
    width: '100%',
    playerVars: {
      autoplay: 0,
      controls: 1,
      rel: 0,
      showinfo: 0,
      mute: 1,
      modestbranding: 1
    },
  };

  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-lg">
      <YouTube
        videoId={videoId}
        opts={opts}
        className="absolute top-0 left-0 w-full h-full"
        iframeClassName="w-full h-full"
      />
    </div>
  );
};

export const TrailerSection = () => {
  return (
    <div className='px-16 py-12 bg-yellow-500/20 flex flex-col gap-12'>
      <header className='font-display font-bold text-massive '>
        TU RUTINA, TUS TIEMPOS, TU RITMO
      </header>
      <section className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <VideoWrapper videoId="9mbhtkVT-sw" />
        <VideoWrapper videoId="Qy2LPLnQUZU" />
        <VideoWrapper videoId="HPg6rgSojOw" />
      </section>
      <footer className='text-3xl uppercase font-display'>
        Unite a nuestro team y vas a obtener más de 300 horas en video para que puedas repetir, observar y prácticar.
      </footer>

    </div>
  )
}
