import React from 'react';
import Navbar from '../components/Navbar';
import FooterPage from './FooterPage';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 transition-colors font-sans flex flex-col">
            <Navbar />
            <div className="flex-1 pb-16">
                <Outlet />
            </div>
            <FooterPage />
        </div>
    );
};

export default HomePage;
