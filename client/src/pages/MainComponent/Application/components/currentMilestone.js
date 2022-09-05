import React from 'react'

const styles = {
  font: {
    fontSize: "0.5em",

  },
  width: {
    maxWidth: "120px",
    minWidth: "120px",
  },
};

const currentMilestone = () => {
  return (
    <div className='column'>
      <div className='box columns my-2'>
        <input
          className='button is-rounded is-info column py-6 mx-5 my-1'
          style={styles.width}
          id="appliedData"
          value={"Applied"}
        />
        <input
          className='button is-rounded is-info column py-6 mx-5 my-2'
          style={styles.width}
          id="phoneInterviewData"
          value={"Phone Interview"}
        />
        <input
          className='button is-rounded is-info column py-6 mx-5 my-2'
          style={styles.width}
          id="technicalInterviewData"
          value={"Technical Interview"}
        />
        <input
          className='button is-rounded is-info column py-6 mx-5 my-2'
          style={styles.width}
          id="inPersonInterviewData"
          value={"In Person Interview"}
        />
        <input
          className='button is-rounded is-info column py-6 mx-5 my-2'
          style={styles.width}
          id="jobOfferData"
          value={"Job Offer"}
        />
        <input
          className='button is-rounded is-info column py-6 mx-5 my-2'
          style={styles.width}
          id="AcceptedData"
          value={"Accepted"}
        />
        <input
          className='button is-rounded is-info column py-6 mx-5 my-2'
          style={styles.width}
          id="RejectedData"
          value={"Rejected"}
        />
        <input
          className='button is-rounded is-info column py-6 mx-5 my-2'
          style={styles.width}
          id="hippoDonateData"
          value={"Hippo Donations"}
        />
      </div>
    </div>
  )
}

export default currentMilestone
