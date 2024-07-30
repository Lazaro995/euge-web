import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';

const ContactItem = ({ icon, text, link }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-4 text-xl hover:text-blue-600 transition-colors duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
    <span>{text}</span>
  </motion.a>
);

export const ContactSection = () => {
  return (
    <div className='px-12 py-32 bg-yellow-500/10'>
      <motion.span 
        className='font-impact text-massive font-extrabold uppercase block text-start  mb-12'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        EMPEZAR AHORA
      </motion.span>
      
      <div className="max-w-4xl mx-auto bg-white/10 rounded-lg shadow-xl p-8">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Contacta con nosotros
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactItem 
            icon={<FaWhatsapp className="text-green-500 text-3xl" />}
            text="Chatea por WhatsApp"
            link="https://wa.me/1234567890"
          />
          
          <ContactItem 
            icon={<FaEnvelope className="text-red-500 text-3xl" />}
            text="Envíanos un email"
            link="mailto:info@tuempresa.com"
          />
          
          <ContactItem 
            icon={<FaInstagram className="text-pink-500 text-3xl" />}
            text="Síguenos en Instagram"
            link="https://instagram.com/tuempresa"
          />
          
          <ContactItem 
            icon={<FaFacebook className="text-blue-600 text-3xl" />}
            text="Encuéntranos en Facebook"
            link="https://facebook.com/tuempresa"
          />
        </div>
        
        <motion.form 
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nombre</label>
            <input type="text" id="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tu nombre" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="tu@email.com" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Mensaje</label>
            <textarea id="message" rows={4} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tu mensaje"></textarea>
          </div>
          <button type="submit" className="bg-yellow-600 uppercase text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">Enviar Mensaje</button>
        </motion.form>
      </div>
    </div>
  )
}
