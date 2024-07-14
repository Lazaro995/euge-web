import React from 'react';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import YouTubePlayer from './components/YoutubePlayer';
import { getYouTubeId } from './utils';
import Navbar from './components/NavBar';
import ContactForm from './components/ContactForm';
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
        <div className='container mx-auto'>

          <Carousel />
        </div>
      </section>
      <section id="about" className="py-10">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-highlight mb-4">Sobre Mi</h2>
          <p className='bg-secondary bg-opacity-75 p-6 rounded-lg shadow-lg'>Información sobre los cursos de gimnasia.</p>
        </div>
      </section>
      <section id="youtube" className="py-10">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-highlight mb-4">YouTube Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {videoIds.map((link, index) => (
              <YouTubePlayer key={index} videoId={link} />
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="py-10">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-highlight mb-4">Contacto</h2>
          <ContactForm/>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
