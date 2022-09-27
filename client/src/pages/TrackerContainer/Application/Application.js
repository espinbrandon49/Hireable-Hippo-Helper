import React, { useState } from "react";
import Auth from "../../../utils/auth";
import Login from "../../Login";
import Subheader from "./components/Subheader";
import CurrentMilestones from "./components/CurrentMilestone";
import AllMilestones from "./components/AllMilestones";
import Notes from "./components/Notes";
import { useLocation } from "react-router-dom";
import UpdateJob from "../../UpdateJob/UpdateJob";
import Card from '@mui/material/Card';

const Application = () => {
  const [updateJob, setUpdateJob] = useState({ updateJob: false })
  const locate = useLocation();

  const application = locate.state;

  // console.log(application);

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
                  <Card elevation={5} className="columns is-1 mb-5">
                    <CurrentMilestones application={application} />
                  </Card>
                  <Card elevation={5} className="columns is-1 p-5">
                    <AllMilestones application={application} updateJobApp={updateJobApp} />
                    <Notes application={application} />
                  </Card>
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
            <Card elevation={5} className="columns is-1">
              <p>What should we put here?</p>
              <div>ALL JOBS CIRCLE DATA VISUALS</div>
            </Card>
          </>
        ) : (
          <Login />
        )}
      </div>
    );
  }
};
export default Application;
