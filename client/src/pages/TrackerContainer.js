import React, { useState } from 'react';
import NavBar from './NavBar';
import SideBar from './MainComponent/Sidebar/SideBar';
import Homepage from './Homepage/Homepage';
import AppForm from './MainComponent/AddJob/AppForm';
import Application from './MainComponent/Application/Application';
import HippoStats from './MainComponent/HippoStats/HippoStats';
import Login from './Login';
import Signup from './Signup';
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_APPLICATIONS } from "../utils/queries";


export default function TrackerContainer() {

    const { loading, data } = useQuery(QUERY_APPLICATIONS);
    const applications = data?.applications || [];
    // console.log("before " + applications);

    var filteredApps = [];

    // console.log(data)

        if (Auth.getProfile() !== null) {
            filteredApps = applications.filter((application) => application.applicant === Auth.getProfile().data.username);
        }

    // console.log("after " + JSON.stringify(filteredApps));

    const [currentPage, setCurrentPage] = useState('Homepage');


    const renderPage = () => {
        if (currentPage === 'Homepage') {
            return <Homepage />;
        }
        if (currentPage === 'HippoStats') {
            return <HippoStats applications={filteredApps} />;
        }
        if (currentPage === 'Application') {
            return <Application applications={filteredApps} />;
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
                    <SideBar applications={filteredApps} />
                </div>
            </div>
        );
    }

}