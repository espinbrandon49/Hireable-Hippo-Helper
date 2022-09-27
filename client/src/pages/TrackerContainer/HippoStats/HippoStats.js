import React, { useState } from "react";
import Login from "../../Login";
import Auth from "../../../utils/auth";
import Subheader from "./components/Subheader";
import DataMilestones from "./components/DataMilestones";
import AppliedFrom from './components/partials/AppliedFrom'
import AppTimeline from './components/partials/AppTimeline';
import StatusCount from './components/partials/StatusCount';
import StatusBreakdown from './components/partials/StatusBreakdown';
import DayOfWeek from "./components/partials/DayOfWeek";
import StatusByPercent from "./components/partials/StatusByPercent";
import Card from '@mui/material/Card';


const styles = {
  container: {
    marginLeft: "50px",
    marginRight: "50px",
    maxWidth: "94%",
  },
  box: {
    height: "60vh",
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
    if (currentDataPage === 'DayOfWeek') {
      return <DayOfWeek applications={applications} />;
    }
    if (currentDataPage === 'StatusByPercent') {
      return <StatusByPercent applications={applications} />;
    }
  };

  const handleDataPageChange = (page) => setCurrentDataPage(page);

  return (
    <div className="container column is-full" style={styles.container}>
      {Auth.loggedIn() ? (
        <>
          <Subheader applications={applications} />
          <Card elevation={5} className="mb-4" >
            <DataMilestones 
              currentDataPage={currentDataPage}
              handleDataPageChange={handleDataPageChange}
            />
          </Card>
          <Card elevation={5} className='p-5' style={styles.box}>
            {renderDataPage()}
          </Card>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default HippoStats;
