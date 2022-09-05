import React from 'react'

const styles = {
  box: {
    borderRadius: "50%",
  }
}

const dataMilestones = ({currentDataPage, handleDataPageChange}) => {
  return (
    <div className='column'>
      <div className="buttons">

        <button
          className={
            currentDataPage === "Applied"
              ? "button is-primary is-active"
              : "button is-primary"
          }
          style={styles.box} 
          onClick={() => handleDataPageChange("Applied")}
          >
          Applied
        </button>

        <button
          className={
            currentDataPage === "PhoneInterview"
              ? "button is-primary is-active"
              : "button is-primary"
          }
          style={styles.box} 
          onClick={() => handleDataPageChange("PhoneInterview")}
          >
          Phone Interview
        </button>
        
        <button
          className={
            currentDataPage === "TechnicalInterview"
              ? "button is-primary is-active"
              : "button is-primary"
          }
          style={styles.box} 
          onClick={() => handleDataPageChange("TechnicalInterview")}
          >
          Technical Interview
        </button>

        <button
          className={
            currentDataPage === "InPersonInterview"
              ? "button is-primary is-active"
              : "button is-primary"
          }
          style={styles.box} 
          onClick={() => handleDataPageChange("InPersonInterview")}
          >
          In-person Interview
        </button>

        <button
          className={
            currentDataPage === "JobOffer"
              ? "button is-primary is-active"
              : "button is-primary"
          }
          style={styles.box} 
          onClick={() => handleDataPageChange("JobOffer")}
          >
          Job Offer
        </button>

        <button
          className={
            currentDataPage === "Accepted"
              ? "button is-primary is-active"
              : "button is-primary"
          }
          style={styles.box} 
          onClick={() => handleDataPageChange("Accepted")}
          >
          Accepted
        </button>

        <button
          className={
            currentDataPage === "Rejected"
              ? "button is-primary is-active"
              : "button is-primary"
          }
          style={styles.box} 
          onClick={() => handleDataPageChange("Rejected")}
          >
          Rejected
        </button>

        <button
          className={
            currentDataPage === "HippoDonations"
              ? "button is-primary is-active"
              : "button is-primary"
          }
          style={styles.box} 
          onClick={() => handleDataPageChange("HippoDonations")}
          >
          Hippo Donations
        </button>

      </div>
    </div>
  )
}

export default dataMilestones
