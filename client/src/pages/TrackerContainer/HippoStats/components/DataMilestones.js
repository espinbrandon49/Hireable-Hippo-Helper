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
            currentDataPage === "AppTimeline"
              ? "button is-primary is-active"
              : "button is-primary"
          }
          onClick={() => handleDataPageChange("AppTimeline")}
        >
          Application Timeline
        </button>

        <button
          className={
            currentDataPage === "StatusCount"
              ? "button is-primary is-active"
              : "button is-primary"
          }
          onClick={() => handleDataPageChange("StatusCount")}
        >
          Current Status Count
        </button>

        <button
          className={
            currentDataPage === "StatusBreakdown"
              ? "button is-primary is-active"
              : "button is-primary"
          }
          onClick={() => handleDataPageChange("StatusBreakdown")}
        >
          Current Status Breakdown
        </button>

        <button
          className={
            currentDataPage === "DayofWeek"
              ? "button is-primary is-active"
              : "button is-primary"
          }
          onClick={() => handleDataPageChange("DayofWeek")}
        >
          Day of Week
        </button>

      </div>
    </div>
  )
}

export default dataMilestones
