import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_APPLICATIONS } from "../../utils/queries";
import Auth from "../../utils/auth";
import SideBar from "./Sidebar/SideBar";
import Application from "./Application/Application";
import HippoStats from "./HippoStats/HippoStats";
import "../../index.css"

export default function TrackerContainer({currentPage}) {
  // Call all applications
  const { loading, data } = useQuery(QUERY_APPLICATIONS);
  const applications = data?.applications || [];
  // console.log(applications)

  // Call single applications by username
  var filteredApps = [];
  try {
    filteredApps = applications.filter((application) => application.applicant === Auth.getProfile().data.username);
  } catch (err) {
    console.log(err);
  }

  if (loading) return "Hippo Loading";

  const styles = {
    statsBackground: {
      height: "100%",
      paddingLeft: 0,
      paddingRight: 0,
    },
  };
  
  if(currentPage === 1) {
    return (
      <>
        {Auth.loggedIn() ? (
          <div className="section" id="mainBackground" style={styles.statsBackground}>
            <div className="columns" sx={{width: "100%"}}>
              <HippoStats applications={filteredApps} />
            </div>
          </div>
        ) : (
          <></>
        )}
      </>
    )
  } else if (currentPage === 2) {
    return (
      <>
        {Auth.loggedIn() ? (
          <div className="section" id="mainBackground">
            <div className="columns">
              <Application />
              <SideBar applications={filteredApps} />
            </div>
          </div>
        ) : (
          <></>
        )}
      </>
    )
  } else {
    return (
      <></>
    )
  }
}