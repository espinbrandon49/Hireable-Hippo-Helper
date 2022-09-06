import React from 'react'

const styles = {
  box: {
    borderRadius: "50%",
  }
}

const dataMilestones = ({currentDataPage, handleDataPageChange}) => {
  return (
    <div className='column'>
      <div className="box columns my-2">
        <button
          className={
            currentDataPage === "AppliedFrom"
              ? "button column is-fullwidth py-6 mx-3 my-2 is-primary is-active"
              : "button column is-fullwidth py-6 mx-3 my-2 is-primary"
          }
          style={styles.box} 
          onClick={() => handleDataPageChange("AppliedFrom")}
          >
          Applied From
        </button>

        <button
          className={
            currentDataPage === "AppliedTo"
              ? "button column is-fullwidth py-6 mx-3 my-2 is-primary is-active"
              : "button column is-fullwidth py-6 mx-3 my-2 is-primary"
          }
          style={styles.box} 
          onClick={() => handleDataPageChange("AppliedTo")}
          >
          Applied To
        </button>
        
        <button
          className={
            currentDataPage === "AppliedVsInterviews"
              ? "button column is-fullwidth py-6 mx-3 my-2 is-primary is-active"
              : "button column is-fullwidth py-6 mx-3 my-2 is-primary"
          }
          style={styles.box} 
          onClick={() => handleDataPageChange("AppliedVsInterviews")}
          >
          Applied vs Interviews
        </button>

        <button
          className={
            currentDataPage === "AppliedVsRejected"
              ? "button column is-fullwidth py-6 mx-3 my-2 is-primary is-active"
              : "button column is-fullwidth py-6 mx-3 my-2 is-primary"
          }
          style={styles.box} 
          onClick={() => handleDataPageChange("AppliedVsRejected")}
          >
          Applied vs Rejected
        </button>

        <button
          className={
            currentDataPage === "CurrentMilestones"
              ? "button column is-fullwidth py-6 mx-3 my-2 is-primary is-active"
              : "button column is-fullwidth py-6 mx-3 my-2 is-primary"
          }
          style={styles.box} 
          onClick={() => handleDataPageChange("CurrentMilestones")}
          >
          Current Milestones
        </button>

      </div>
    </div>
  )
}

export default dataMilestones
