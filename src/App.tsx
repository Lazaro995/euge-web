import React from 'react';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import YouTubePlayer from './components/YoutubePlayer';
import { getYouTubeId } from './utils';
import Navbar from './components/NavBar';
import ContactForm from './components/ContactForm';
import { motion } from 'framer-motion'
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
        <div className="container mx-auto">
          <motion.h1
            className="text-4xl text-highlight font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duracion: 1 }}
          >
            Hola, soy Eugenia
          </motion.h1>
          <motion.p
            className="text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duracion: 1, delay: 0.5 }}
          >
            Mira mis cursos
          </motion.p>
          <Carousel />
        </div>
      </section>
      <section id="about" className="py-10">
        <div className="container mx-auto">
          <motion.h2
            className="text-2xl font-bold text-highlight mb-4"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Sobre Mi
          </motion.h2>
          <motion.p
            className="card p-6"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Información sobre los cursos de gimnasia.
          </motion.p>
        </div>
      </section>
      <section id="youtube" className="py-10">
        <div className="container mx-auto">
          <motion.h2
            className="text-2xl font-bold text-highlight mb-4"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            YouTube Videos
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {videoIds.map((link, index) => (
              <YouTubePlayer key={index} videoId={link} />
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="py-10">
        <div className="container mx-auto">
          <motion.h2
            className="text-2xl font-bold text-highlight mb-4"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Contacto
          </motion.h2>
          <ContactForm />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
