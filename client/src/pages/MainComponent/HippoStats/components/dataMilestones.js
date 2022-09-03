import React from 'react'

const styles = {
  font: {
    fontSize: ".75em",
  },
  width: {
    // resize radio input
    width: "1em",
  },
};

const dataMilestones = () => {
  return (
    <div className='column'>
      <div className='box'>
        <div className="control is-justify-content-center" >
          <label className="radio" for="appliedData" style={styles.font}>
            <input type="radio" name="dataStone" style={styles.width} id="appliedData" />
            Applied
          </label>
          <label className="radio" for="phoneInterviewData" style={styles.font}>
            <input type="radio" name="dataStone" style={styles.width} id="phoneInterviewData"/>
            Phone Interview
          </label>
          <label
            className="radio"
            for="technicalInterviewData"
            style={styles.font}
          >
            <input type="radio" name="dataStone" style={styles.width} id="technicalInterviewData"/>
            Technical Interview
          </label>
          <label
            className="radio"
            for="inPersonInterviewData"
            style={styles.font}
          >
            <input type="radio" name="dataStone" style={styles.width} id="inPersonInterviewData"/>
            In-person Interview
          </label>
          <label className="radio" for="jobOfferData" style={styles.font}>
            <input type="radio" name="dataStone" style={styles.width} id="jobOfferData"/>
            Job Offer
          </label>
          <label className="radio" for="hippoDonateData" style={styles.font}>
            <input type="radio" name="dataStone" style={styles.width} id="hippoDonateData"/>
            Donate to HHH
          </label>
        </div>
      </div>
    </div>
  )
}

export default dataMilestones
