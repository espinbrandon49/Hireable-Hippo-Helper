import React from 'react'
import { useParams } from 'react-router-dom'

const AllMilestones = ({applications}) => {

  const { _id } = useParams();

  const application = applications.filter((application) => application._id === _id)[0];

  if (!application) {
    return (
      <div className='column is-one-quarter'>
        <div className='box'>
          <h3 className='subtitle mb-2'>Job Information</h3>
          <ul>
            <li>Job Description:</li>
            <li>Location:</li>
            <li>Job Type:</li>
            <li>Salary:</li>
            <li>Link:</li>
          </ul>
  
          <h3 className='subtitle mb-2 mt-4'>Important Dates</h3>
          <ul>
            <li>Data Applied:</li>
            <li>Interview Dates:</li>
          </ul>
  
          <h3 className='subtitle mb-2 mt-4'>Contact Info</h3>
          <ul>
            <li>Contact Name:</li>
            <li>Contact Email:</li>
            <li>Contact Phone:</li>
          </ul>
          <p>Note:</p> 
          <p>Current Milestone:</p>
        </div>
      </div>
    )
  } else {
    return (
      <div className='column is-one-quarter'>
        <div className='box'>
          <h3 className='subtitle mb-2'>Job Information</h3>
          <ul>
            <li>Job Description: {application.jobDescription}</li>
            <li>Location: </li>
            <li>Job Type: {application.jobType}</li>
            <li>Salary: {application.salary}</li>
            <li>Link: {application.jobLink}</li>
          </ul>
  
          <h3 className='subtitle mb-2 mt-4'>Important Dates</h3>
          <ul>
            <li>Data Applied: {application.dateApplied}</li>
            <li>Interview Dates: </li>
          </ul>
  
          <h3 className='subtitle mb-2 mt-4'>Contact Info</h3>
          <ul>
            <li>Contact Name: {application.contactName}</li>
            <li>Contact Email: {application.contactEmail}</li>
            <li>Contact Phone: {application.contactPhone}</li>
          </ul>
          <p>Note: {application.note}</p> 
          <p>Current Milestone: {application.currentMilestone}</p>
        </div>

      </div>
    )
  }
}

export default AllMilestones
