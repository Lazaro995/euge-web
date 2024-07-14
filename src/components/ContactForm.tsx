import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm: React.FC = () => {
    return (
        <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .max(50, 'Must be 50 characters or less')
                    .required('Required'),
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
                message: Yup.string()
                    .max(500, 'Must be 500 characters or less')
                    .required('Required')
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            <Form className="bg-secondary bg-opacity-75 p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-highlight mb-2">Name</label>
                    <Field name="name" type="text" className="w-full p-2 rounded bg-white text-secondary" />
                    <ErrorMessage name="name" component="div" className="text-red-500 mt-1" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-highlight mb-2">Email</label>
                    <Field name="email" type="email" className="w-full p-2 rounded bg-white text-secondary" />
                    <ErrorMessage name="email" component="div" className="text-red-500 mt-1" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-highlight mb-2">Message</label>
                    <Field name="message" as="textarea" className="w-full p-2 rounded bg-white text-secondary" />
                    <ErrorMessage name="message" component="div" className="text-red-500 mt-1" />
                </div>
                <button type="submit" className="bg-primary text-secondary p-2 rounded hover:bg-highlight transition duration-200">Submit</button>
            </Form>
        </Formik>
    );
};

export default ContactForm;
