import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
    return (
        <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .max(50, 'Debe tener 50 caracteres o menos')
                    .required('Requerido'),
                email: Yup.string()
                    .email('Dirección de correo inválida')
                    .required('Requerido'),
                message: Yup.string()
                    .max(500, 'Debe tener 500 caracteres o menos')
                    .required('Requerido')
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            <motion.form
                className="bg-secondary bg-opacity-75 p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="mb-4">
                    <label htmlFor="name" className="block text-highlight mb-2">Nombre</label>
                    <Field name="name" type="text" className="w-full p-2 rounded bg-white text-secondary" />
                    <ErrorMessage name="name" component="div" className="text-red-500 mt-1" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-highlight mb-2">Correo Electrónico</label>
                    <Field name="email" type="email" className="w-full p-2 rounded bg-white text-secondary" />
                    <ErrorMessage name="email" component="div" className="text-red-500 mt-1" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-highlight mb-2">Mensaje</label>
                    <Field name="message" as="textarea" className="w-full p-2 rounded bg-white text-secondary h-32" />
                    <ErrorMessage name="message" component="div" className="text-red-500 mt-1" />
                </div>
                <button type="submit" className="bg-highlight text-primary px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition duration-200">
                    Enviar
                </button>
            </motion.form>
        </Formik>
    );
};

export default ContactForm;
