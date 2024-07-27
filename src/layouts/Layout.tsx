import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
    return (
        <div className="bg-primary text-white min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow pt-16 mx-auto max-w-screen-2xl px-4"> {/* Ajustar para dar espacio al header fijo */}
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
