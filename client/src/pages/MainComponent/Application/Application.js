import React from "react";
import AllMilestones from './components/allMilestones'
import CurrentMilestones from './components/currentMilestone'
import Notes from './components/notes'
import Subheader from './components/subheader'
import Auth from "../../../utils/auth";
import Login from "../../Login";

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
        <Login/>
      )}
    </div>
  );
};
export default Application;