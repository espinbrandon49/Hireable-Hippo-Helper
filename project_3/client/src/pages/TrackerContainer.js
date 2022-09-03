import React, { useState } from 'react';
import NavBar from './NavBar';
import SideBar from './MainComponent/Sidebar/SideBar';
import Homepage from './Homepage/Homepage';
import AppForm from './MainComponent/AddJob/AppForm';
import Application from './MainComponent/Application/Application';
import HippoStats from './MainComponent/HippoStats/HippoStats';
import Login from './Login';
import Signup from './Signup';

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
        if (currentPage === 'Signup') {
            return <Signup />;
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
                <div className='columns'>
                    {renderPage()}
                    <SideBar />
                </div>
            </div>
        );
    }

}