import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Layout from './layouts/Layout';

import AboutPage from './views/AboutPage';
import ContactPage from './views/ContactPage';
import IndexPage from './views/IndexPage';
import GetStartedPage from './views/GetStartedPage';
const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    {/*  HACER EL LAYOUT */}
                    <Route path="/Home" element={<IndexPage />} />
                    <Route path="/" element={<IndexPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/get-started" element={<GetStartedPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
