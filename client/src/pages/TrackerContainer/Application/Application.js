import React, { useState } from "react";
import Auth from "../../../utils/auth";
import Login from "../../Login";
import Subheader from "./components/Subheader";
import CurrentMilestones from "./components/CurrentMilestone";
import AllMilestones from "./components/AllMilestones";
import Notes from "./components/Notes";
import { useLocation } from "react-router-dom";
import UpdateJob from "../../UpdateJob/UpdateJob";

const Application = () => {
  const [updateJob, setUpdateJob] = useState({ updateJob: false })
  const locate = useLocation();
  const application = locate.state;

  console.log(application);

  function updateJobApp() {
    console.log('meow')
    console.log(updateJob)
    setUpdateJob({ updateJob: true })
  }

  function jobUpdated() {
    console.log('meow')
    console.log(updateJob)
    setUpdateJob({ updateJob: false })
  }

  console.log(updateJob.updateJob)

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
              <p>What should we put here?</p>
              <div>ALL JOBS CIRCLE DATA VISUALS</div>
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
