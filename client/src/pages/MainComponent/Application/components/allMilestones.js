import React from 'react'

const allMilestones = () => {
  return (
    <div className='column is-one-quarter'>
      <div className='box'>
        <h3 className='subtitle mb-2'>Job Information</h3>
        <ul>
          <li>Job Description: </li>
          <li>Location: </li>
          <li>Job Type: </li>
          <li>Salary: </li>
          <li>Link: </li>
        </ul>

        <h3 className='subtitle mb-2 mt-4'>Important Dates</h3>
        <ul>
          <li>Data Applied: </li>
          <li>Interview Dates: </li>
        </ul>

        <h3 className='subtitle mb-2 mt-4'>Contact Info</h3>
        <ul>
          <li>Contact Name: </li>
          <li>Contact Email: </li>
          <li>Contact Phone: </li>
        </ul>
      </div>
    </div>
  )
}

export default allMilestones
