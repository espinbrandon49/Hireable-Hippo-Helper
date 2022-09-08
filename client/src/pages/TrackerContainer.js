import React, { useState } from "react";
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
  const [currentPage, setCurrentPage] = useState("Application");

  if (loading) return "Hippo Loading";

  const renderPage = () => {
    if (currentPage === "HippoStats") {
      return <HippoStats applications={filteredApps} />;
    } else if (currentPage === "Application") {
      return <Application applications={filteredApps} />;
    }
  };

  // Event handler to toggle state
  const handlePageChange = (page) => setCurrentPage(page);
    return (
      <div>
        <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
        <div className="section">
          <div className="columns">
            {renderPage()}
            <SideBar applications={filteredApps} />
          </div>
        </div>
      </div>
    );
}
