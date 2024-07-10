import React from 'react';
import { FaHome, FaInfoCircle, FaPhone } from 'react-icons/fa';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-secondary text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold text-highlight uppercase">Power Fit mdp</div>
                <div className="flex space-x-4">
                    <a href="#home" className="flex items-center space-x-1"><FaHome /><span>Home</span></a>
                    <a href="#about" className="flex items-center space-x-1"><FaInfoCircle /><span>About</span></a>
                    <a href="#contact" className="flex items-center space-x-1"><FaPhone /><span>Contact</span></a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
