import React, { useState, useEffect } from "react";
import NavBar from "./NavBar/index";
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

  // Render pages by state
  const [currentPage, setCurrentPage] = useState("homepage");

  if (loading) return "Hippo Loading";

  // Event handler to toggle state
  const handlePageChange = (page) => {
    setCurrentPage(page);
    //first click no console log happens
    //second click "meow"
    console.log('meow'); 
    //first click no console log happens
    //second click I get hippostats or application depending on which navbutton I click
    console.log(page)
  }

  //first click I get homepage when I click hippostats or application (expected hippostat or application)
  //second click I get hippostats or application depending on which navbutton I click
  console.log(currentPage) 
  
  return ( 
    //first click renders navbar and #maincomponent empty, (expect render navbar, sidebar, and either HippoStats and Application)
    //second click renders render navbar, sidebar, and either HippoStats and Application 
    <div>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
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
