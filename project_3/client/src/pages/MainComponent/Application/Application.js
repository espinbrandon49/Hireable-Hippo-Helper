import React from "react";
import AllMilestones from './components/allMilestones'
import CurrentMilestones from './components/currentMilestone'
import Notes from './components/notes'
import Subheader from './components/subheader'
import Auth from "../../../utils/auth";

const Application = () => {
  return (
    <div>
      {Auth.loggedIn() ? (
        <div className='column'>
          <div className='box'>
            <Subheader />
            <CurrentMilestones />
            <div className='columns'>
              <AllMilestones />
              <Notes />
            </div>
          </div>
        </div>
      ) : (
        <div>You must be logged in to see your APPLICATIONS</div>
      )}
    </div>
  );
};
export default Application;