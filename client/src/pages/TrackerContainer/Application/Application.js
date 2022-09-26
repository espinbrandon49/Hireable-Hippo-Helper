import React, { useState } from "react";
import Auth from "../../../utils/auth";
import Login from "../../Login";
import Subheader from "./components/Subheader";
import CurrentMilestones from "./components/CurrentMilestone";
import AllMilestones from "./components/AllMilestones";
import Notes from "./components/Notes";
import { useLocation } from "react-router-dom";
import UpdateJob from "../../UpdateJob/UpdateJob";
import AllJobs from "./components/AllJobs";

const Application = ({applications}) => {
  const [updateJob, setUpdateJob] = useState({ updateJob: false })
  const locate = useLocation();

  const application = locate.state;
  const applicationsData = applications

  console.log(application);

  function updateJobApp() {
    setUpdateJob({ updateJob: true })
  }

  function jobUpdated() {
    setUpdateJob({ updateJob: false })
  }

  if (application !== null) {
    return (
      <div className="container column is-three-quarters">
        {Auth.loggedIn() ? (
          <>
            {
              !updateJob.updateJob ? (
                <div>
                  <Subheader application={application} />
                  <CurrentMilestones application={application} />
                  <div className="columns is-1 box">
                    <AllMilestones application={application} updateJobApp={updateJobApp} />
                    <Notes application={application} />
                  </div>
                </div>
              ) : (
                <div>
                  <UpdateJob application={application} jobUpdated={jobUpdated}/>
                </div>
              )
            }
          </>
        ) : (
          <Login />
        )}
      </div>
    );
  } else {
    return (
      <div className="container column is-three-quarters">
        {Auth.loggedIn() ? (
          <>
            <Subheader />
            <div className="columns is-1 box">
            <AllJobs allApplications={applicationsData} />
            </div>
          </>
        ) : (
          <Login />
        )}
      </div>
    );
  }
};
export default Application;
