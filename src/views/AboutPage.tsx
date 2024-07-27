import React from 'react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => (
  <section id="about" className="py-10 bg-slate-900 text-white mt-16"> {/*Revisar que coincida con el theme */}
    <div className="container mx-auto px-4">
      <motion.h2
        className="text-3xl font-bold text-highlight mb-6 text-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Sobre Mi
      </motion.h2>
      <motion.div
        className="card p-6 bg-primary rounded-lg shadow-lg max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p className="mb-4">
          ¡Hola! Soy Eugenia, una apasionada del powerlifting y el fitness. Con más de 10 años de experiencia en la industria del fitness, he dedicado mi vida a ayudar a otros a alcanzar sus metas de salud y acondicionamiento físico. A través de mis cursos, ofrezco entrenamiento personalizado y asesoramiento para todos los niveles, desde principiantes hasta atletas avanzados.
        </p>
        <p>
          Mi objetivo es proporcionar un entorno de apoyo y motivación donde cada individuo pueda desafiarse a sí mismo y descubrir su verdadero potencial. ¡Únete a mí en este viaje hacia una vida más fuerte y saludable!
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutPage;
