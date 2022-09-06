import React, { useState } from "react";
import Login from "../../Login";
import Auth from "../../../utils/auth";
import Subheader from "./components/Subheader";
import DataMilestones from "./components/DataMilestones";
import AppliedFrom from './components/partials/AppliedFrom'
import AppliedTo from './components/partials/AppliedTo';
import AppliedVsInterviews from './components/partials/AppliedVsInterviews';
import AppliedVsRejected from './components/partials/AppliedVsRejected';
import CurrentMilestones from './components/partials/CurrentMilestones';

const styles = {
  box: {
    height: "50vh",
  }
}

const HippoStats = ({ applications }) => {
  console.log(applications)

  const [currentDataPage, setCurrentDataPage] = useState('');

  const renderDataPage = () => {
    if (currentDataPage === 'AppliedFrom') {
      return <AppliedFrom applications={applications} />;
    }
    if (currentDataPage === 'AppliedTo') {
      return <AppliedTo applications={applications} />;
    }
    if (currentDataPage === 'AppliedVsInterviews') {
      return <AppliedVsInterviews applications={applications} />;
    }
    if (currentDataPage === 'AppliedVsRejected') {
      return <AppliedVsRejected applications={applications} />;
    }
    if (currentDataPage === 'CurrentMilestones') {
      return <CurrentMilestones applications={applications} />;
    }
  };

  const handleDataPageChange = (page) => setCurrentDataPage(page);

  return (
    <div className="container column is-three-quarters">
      {Auth.loggedIn() ? (
        <>
          <Subheader applications={applications} />

          <DataMilestones 
            currentDataPage={currentDataPage}
            handleDataPageChange={handleDataPageChange} />

          <div className='box' style={styles.box}>
            {renderDataPage()}
          </div>

        </>
      ) : (
        <Login />

      )}
    </div>
  );
};

export default HippoStats;
