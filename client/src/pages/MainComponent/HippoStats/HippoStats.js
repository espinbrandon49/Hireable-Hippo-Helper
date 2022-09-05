import React, { useState } from "react";
import Login from "../../Login";
import Auth from "../../../utils/auth";
import Subheader from "./components/Subheader";
import DataMilestones from "./components/DataMilestones";
import Applied from './components/partials/Applied'
import PhoneInterview from './components/partials/PhoneInterview';
import TechnicalInterview from './components/partials/TechnicalInterview';
import InPersonInterview from '././components/partials/InPersonInterview';
import JobOffer from './components/partials/JobOffer';
import Accepted from './components/partials/Accepted'
import Rejected from './components/partials/Rejected';
import HippoDonations from './components/partials/HippoDonations';

const styles = {
  box: {
    height: "50vh",
  }
}

const HippoStats = ({ applications }) => {
  console.log(applications)

  const [currentDataPage, setCurrentDataPage] = useState('Accepted');

  const renderDataPage = () => {
    if (currentDataPage === 'Applied') {
      return <Applied applications={applications} />;
    }
    if (currentDataPage === 'PhoneInterview') {
      return <PhoneInterview applications={applications} />;
    }
    if (currentDataPage === 'TechnicalInterview') {
      return <TechnicalInterview applications={applications} />;
    }
    if (currentDataPage === 'InPersonInterview') {
      return <InPersonInterview applications={applications} />;
    }
    if (currentDataPage === 'JobOffer') {
      return <JobOffer applications={applications} />;
    }
    if (currentDataPage === 'Accepted') {
      return <Accepted applications={applications} />;
    }
    if (currentDataPage === 'Rejected') {
      return <Rejected applications={applications} />;
    }
    if (currentDataPage === 'HippoDonations') {
      return <HippoDonations applications={applications} />;
    }
  };

  const handleDataPageChange = (page) => setCurrentDataPage(page);

  return (
    <div className="column">
      {Auth.loggedIn() ? (

        <div className="column">

          <div >
            <Subheader applications={applications} />
          </div>

          <div>
            <DataMilestones currentDataPage={currentDataPage} handleDataPageChange={handleDataPageChange} />
          </div>

          <div className='box' style={styles.box}>
            {renderDataPage()}
          </div>

        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default HippoStats;
