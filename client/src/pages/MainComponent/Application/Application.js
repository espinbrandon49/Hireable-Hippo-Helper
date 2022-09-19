import React from "react";
import Auth from "../../../utils/auth";
import Login from "../../Login";
import Subheader from './components/Subheader'
import CurrentMilestones from './components/CurrentMilestone'
import AllMilestones from './components/AllMilestones'
import Notes from './components/Notes'
import { useLocation } from "react-router-dom";

const Application = ({ applications }) => {
  const Bob = useLocation()
  console.log(Bob)
  return (
    <div className='container column is-three-quarters'>
      {Auth.loggedIn() ? (
        <>
          <Subheader
            applications={applications}
          />
          <CurrentMilestones
            applications={applications}
          />
          <div className='columns is-1 box'>
            <AllMilestones
              applications={applications}
            />
            <Notes
              applications={applications}
            />
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};
export default Application;