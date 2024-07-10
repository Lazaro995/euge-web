import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-secondary text-white p-4 mt-10">
            <div className="container mx-auto text-center">
                <p>© 2024 Eugenia's Gym Courses. All Rights Reserved.</p>
                <p>Contact: <a href="tel:+1234567890" className="text-highlight">+1234567890</a></p>
                <p>WhatsApp: <a href="https://wa.me/1234567890" className="text-highlight">Chat on WhatsApp</a></p>
            </div>
        </footer>
    );
};

export default Footer;
