import React, { useEffect, useState } from "react";
// import NavBar from "./NavBar/index";
import NavBar from "./Navbar";
import SideBar from "./MainComponent/Sidebar/SideBar";
import Application from "./MainComponent/Application/Application";
import HippoStats from "./MainComponent/HippoStats/HippoStats";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_APPLICATIONS } from "../utils/queries";

export default function TrackerContainer() {
  // Call all applications
  const { loading, data } = useQuery(QUERY_APPLICATIONS);
  const applications = data?.applications || [];

  // Call single applications by username
  var filteredApps = [];
  try {
    filteredApps = applications.filter((application) => application.applicant === Auth.getProfile().data.username);
  } catch (err) {
    console.log(err);
  }

  const [currentPage, setCurrentPage] = useState('homepage');

  // Event handler to toggle state
  const handlePageChange = (page) => {
    //first click no console log happens
    //second click "meow"
    console.log('meow');
    //first click no console log happens
    //second click I get hippostats or application depending on which navbutton I click
    console.log(page)
    return setCurrentPage(page);
  }

  const handleHippoStats = () => {
    console.log(currentPage)
    console.log('meow')
    setCurrentPage('HippoStats')
  }

  const handleApplication = () => {
    console.log(currentPage)
    return setCurrentPage('Application')
  }

  //first click I get homepage when I click hippostats or application (expected hippostat or application)
  //second click I get hippostats or application depending on which navbutton I click
  console.log(currentPage)

  if (loading) return "Hippo Loading";

  return (
    //first click renders navbar and #maincomponent empty, (expect render navbar, sidebar, and either HippoStats and Application)
    //second click renders render navbar, sidebar, and either HippoStats and Application 
    <div>
      <NavBar
        handleHippoStats={handleHippoStats}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        handleApplication={handleApplication}
        handlePageChange={handlePageChange}
      />
      <div className="section">
        <div className="columns" id="mainComponent">
          {
            currentPage === "HippoStats" &&
            <>
              <HippoStats applications={filteredApps} />
              <SideBar applications={filteredApps} />
            </>
          }

          {currentPage === "Application" &&
            <>
              <Application applications={filteredApps} />
              <SideBar applications={filteredApps} />
            </>
          }
        </div>
      </div>
    </div>
  );
}

//currentPage needs change before anything else is rendered
