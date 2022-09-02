import React, { useState } from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Homepage from './pages/Homepage';
import AppForm from './pages/AppForm';
import Application from './pages/Application';
import HippoStats from './pages/HippoStats';
import Login from './pages/Login';

export default function TrackerContainer() {
    const [currentPage, setCurrentPage] = useState('Homepage');

    const renderPage = () => {
        if (currentPage === 'Homepage') {
            return <Homepage />;
        }
        if (currentPage === 'HippoStats') {
            return <HippoStats />;
        }
        if (currentPage === 'Application') {
            return <Application />;
        }
        if (currentPage === 'AppForm') {
            return <AppForm />;
        }
        return <Login />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    if (currentPage === 'Homepage' || currentPage === 'AppForm' || currentPage === 'Login') {
        return (
            <div>
                <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
                {renderPage()}
            </div>
        );
    } else {
        return (
            <div>
                <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
                {renderPage()}
                <SideBar />
            </div>
        );
    }

}