import React from 'react'
import Box from '@mui/material/Box';

const dataMilestones = ({currentDataPage, handleDataPageChange}) => {
  return (
    <Box className='p-5'>
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
            currentDataPage === "DayOfWeek"
              ? "button is-primary is-active"
              : "button is-primary"
          }
          onClick={() => handleDataPageChange("DayOfWeek")}
        >
          Day Of Week
        </button>

        <button
          className={
            currentDataPage === "StatusByPercent"
              ? "button is-primary is-active"
              : "button is-primary"
          }
          onClick={() => handleDataPageChange("StatusByPercent")}
        >
          Status By Percent
        </button>

      </div>
    </Box>
  )
}

export default dataMilestones
