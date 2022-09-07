import React, { useState } from "react";
import NavBar from "./NavBar/index";
import SideBar from "./MainComponent/Sidebar/SideBar";
import Homepage from "./Homepage/Homepage";
import AppForm from "./MainComponent/AddJob/AppForm";
import Application from "./MainComponent/Application/Application";
import HippoStats from "./MainComponent/HippoStats/HippoStats";
import Login from "./Login";
import Signup from "./Signup";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_APPLICATIONS } from "../utils/queries";

export default function TrackerContainer() {
  // call all applications
  const { loading, data } = useQuery(QUERY_APPLICATIONS);
  const applications = data?.applications || [];

  // call single applications by username
  var filteredApps = [];
  try {
    filteredApps = applications.filter((application) => application.applicant === Auth.getProfile().data.username);
  } catch (err) {
    console.log(err);
  }


  // render pages by state
  const [currentPage, setCurrentPage] = useState("Homepage");

  if (loading) return "Hippo Loading";

  const renderPage = () => {
    if (currentPage === "Homepage") {
      return <Homepage />;
    }
    if (currentPage === "HippoStats") {
      return <HippoStats applications={filteredApps} />;
    }
    if (currentPage === "Application") {
      return <Application applications={filteredApps} />;
    }
    if (currentPage === "AppForm") {
      return <AppForm />;
    }
    if (currentPage === "Signup") {
      return <Signup />;
    }
    return <Login />;
  };

  // event handler to toggle state
  const handlePageChange = (page) => setCurrentPage(page);

  if (currentPage === "HippoStats" || currentPage === "Application") {
    // render sidebar component with applications list on the page
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
  } else {
    return (
      <div className="m-0 p-0" style={{ height: "100%" }}>
        <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
    );
  }
}
