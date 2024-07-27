import React from 'react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => (
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
);

export default AboutPage;
