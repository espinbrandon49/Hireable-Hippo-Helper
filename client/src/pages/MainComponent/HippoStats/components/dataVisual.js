import React, { useState } from 'react'
import DataMilestones from "./DataMilestones";

import Applied from './partials/Applied'
import PhoneInterview from './partials/PhoneInterview';
import TechnicalInterview from './partials/TechnicalInterview';
import InPersonInterview from './partials/InPersonInterview';
import JobOffer from './partials/JobOffer';
import Accepted from './partials/Accepted'
import Rejected from './partials/Rejected';
import HippoDonations from './partials/HippoDonations';

const styles = {
  box: {
    height: "50vh",
  }
}

const DataVisual = ({ applications }) => {
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
    <div>
      <h2>DATA VISUALS</h2>

      <div>
        <DataMilestones currentDataPage={currentDataPage} handleDataPageChange={handleDataPageChange} />
      </div>

      <div className='box column' style={styles.box}>
        {renderDataPage()}
      </div>

    </div>
  )
}

export default DataVisual
