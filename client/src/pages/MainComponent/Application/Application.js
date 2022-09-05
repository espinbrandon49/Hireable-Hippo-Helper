import React from "react";
import Auth from "../../../utils/auth";
import Login from "../../Login";
import Subheader from './components/Subheader'
import CurrentMilestones from './components/CurrentMilestone'
import AllMilestones from './components/AllMilestones'
import Notes from './components/Notes'

const Application = ({applications}) => {
  return (
    <div className='column'>
      {Auth.loggedIn() ? (
        <div className='box'>
          <Subheader
            applications={applications}
          />
          <CurrentMilestones 
            applications={applications}
          />
          <div className='columns'>
            <AllMilestones
              applications={applications}
            />
            <Notes
             applications={applications}
            />
          </div>
        </div>
      ) : (
        <Login/>
      )}
    </div>
  );
};
export default Application;