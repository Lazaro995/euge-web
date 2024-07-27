import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => (
    <section id="contact" className="py-10">
        <div className="container mx-auto px-4">
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
);

export default ContactPage;
