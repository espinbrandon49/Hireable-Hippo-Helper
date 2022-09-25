import React, { useState } from "react";
import Login from "../../Login";
import Auth from "../../../utils/auth";
import Subheader from "./components/Subheader";
import DataMilestones from "./components/DataMilestones";
import AppliedFrom from './components/partials/AppliedFrom'
import AppTimeline from './components/partials/AppTimeline';
import StatusCount from './components/partials/StatusCount';
import StatusBreakdown from './components/partials/StatusBreakdown';
import DayofWeek from "./components/partials/DayofWeek";

const styles = {
  box: {
    height: "50vh",
  }
}

const HippoStats = ({ applications }) => {
  const [currentDataPage, setCurrentDataPage] = useState('');

  const renderDataPage = () => {
    if (currentDataPage === 'AppliedFrom') {
      return <AppliedFrom applications={applications} />;
    }
    if (currentDataPage === 'AppTimeline') {
      return <AppTimeline applications={applications} />;
    }
    if (currentDataPage === 'StatusCount') {
      return <StatusCount applications={applications} />;
    }
    if (currentDataPage === 'StatusBreakdown') {
      return <StatusBreakdown applications={applications} />;
    }
    if (currentDataPage === 'DayofWeek') {
      return <DayofWeek applications={applications} />;
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
            handleDataPageChange={handleDataPageChange}
          />
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
