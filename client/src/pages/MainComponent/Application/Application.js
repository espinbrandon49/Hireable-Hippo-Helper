import React from "react";
import Auth from "../../../utils/auth";
import Login from "../../Login";
import Subheader from './components/subheader'
import CurrentMilestones from './components/currentMilestone'
import AllMilestones from './components/AllMilestones'
import Notes from './components/notes'

const Application = ({applications}) => {
  return (
    <div className='column'>
      {Auth.loggedIn() ? (
        <div className='box'>
          <Subheader
            applications={applications}
          />
          <CurrentMilestones />
          <div className='columns'>
            <AllMilestones
              applications={applications}
            />
            <Notes />
          </div>
        </div>
      ) : (
        <Login/>
      )}
    </div>
  );
};
export default Application;