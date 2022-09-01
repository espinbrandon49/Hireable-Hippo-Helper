import React, { useState } from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import AppForm from './pages/AppForm';
import Application from './pages/Application';
import HippoStats from './pages/HippoStats';
import Login from './pages/Login';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('HippoStats');

    const renderPage = () => {
        if (currentPage === 'HippoStats') {
            return <HippoStats />;
        }
        if (currentPage === 'Application') {
            return <Application />;
        }
        return <AppForm />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <SideBar />
        </div>
    );
}