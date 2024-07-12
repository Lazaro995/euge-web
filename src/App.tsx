import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import YouTubePlayer from './components/YoutubePlayer';
import { getYouTubeId } from './utils';
const App: React.FC = () => {

const youtubeLinks = [
  'https://www.youtube.com/watch?v=ddj9qUJUAoA&t=1456s',
  'https://www.youtube.com/watch?v=iMvADI6vwzA&t=1253s',
  'https://www.youtube.com/watch?v=iMvADI6vwzA&t=1253s',
];

const videoIds = youtubeLinks.map(link => getYouTubeId(link)).filter(id => id !== null) as string[]

  return (
    <div className="bg-secondary text-white min-h-screen">
      <Navbar />
      <section id="home" className="pt-16">
        <header className="text-center py-10">
          <h1 className="text-4xl text-highlight font-bold">Hola, soy Eugenia</h1>
          <p className="text-xl">Mira mis cursos</p>
        </header>
        <Carousel />
      </section>
      <section id="about" className="py-10">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-highlight">Sobre Mi</h2>
          <p>Información sobre los cursos de gimnasia.</p>
        </div>
      </section>
      <section id="youtube" className="py-10">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-highlight">YouTube Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {videoIds.map((link, index) => (
              <YouTubePlayer key={index} videoId={link} />
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="py-10">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-highlight">Contacto</h2>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
