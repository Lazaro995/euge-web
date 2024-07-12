import React from 'react';
import { FaHome, FaInfoCircle, FaPhone } from 'react-icons/fa';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-secondary text-white p-4 fixed w-full z-10">


            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2 text-lg font-bold text-highlight">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M9.58 1.077a.75.75 0 0 1 .405.82L9.165 6h4.085a.75.75 0 0 1 .567 1.241l-6.5 7.5a.75.75 0 0 1-1.302-.638L6.835 10H2.75a.75.75 0 0 1-.567-1.241l6.5-7.5a.75.75 0 0 1 .897-.182Z" clipRule="evenodd" />
                    </svg>
                    <span>POWER FIT MDP</span>
                </div>
                <div className="flex space-x-4">
                    <a href="#home" className="flex items-center space-x-1"><FaHome /><span>Inicio</span></a>
                    <a href="#about" className="flex items-center space-x-1"><FaInfoCircle /><span>Sobre Mi</span></a>
                    <a href="#contact" className="flex items-center space-x-1"><FaPhone /><span>Contacto</span></a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
