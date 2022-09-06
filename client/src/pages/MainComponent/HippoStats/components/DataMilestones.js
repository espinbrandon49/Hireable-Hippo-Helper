import React from 'react'

const dataMilestones = ({currentDataPage, handleDataPageChange}) => {
  return (
    <div className='box'>
    <div className="buttons is-justify-content-center">
        <button
          className={
            currentDataPage === "AppliedFrom"
              ? "button is-primary is-active"
              : "button is-primary"
          }
          onClick={() => handleDataPageChange("AppliedFrom")}
          >
          Applied From
        </button>

        <button
          className={
            currentDataPage === "AppliedTo"
              ? "button is-primary is-active"
              : "button is-primary"
          }
          onClick={() => handleDataPageChange("AppliedTo")}
          >
          Applied To
        </button>
        
        <button
          className={
            currentDataPage === "AppliedVsInterviews"
              ? "button is-primary is-active"
              : "button is-primary"
          }
          onClick={() => handleDataPageChange("AppliedVsInterviews")}
          >
          Applied vs Interviews
        </button>

        <button
          className={
            currentDataPage === "AppliedVsRejected"
              ? "button is-primary is-active"
              : "button is-primary"
          }
          onClick={() => handleDataPageChange("AppliedVsRejected")}
          >
          Applied vs Rejected
        </button>

        <button
          className={
            currentDataPage === "CurrentMilestones"
              ? "button is-primary is-active"
              : "button is-primary"
          }
          onClick={() => handleDataPageChange("CurrentMilestones")}
          >
          Current Milestones
        </button>

      </div>
    </div>
  )
}

export default dataMilestones
