import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import TWallpaper from '@twallpaper/react';
import backgroundConfig from './background.json';

const Layout: React.FC = () => {
    return (
        <div className="text-white min-h-screen flex flex-col">
          <TWallpaper options={backgroundConfig} />
          <Header />
          <main className="flex-grow">
            <Outlet />
          </main>
          <Footer />
        </div>
    );
};

export default Layout;
