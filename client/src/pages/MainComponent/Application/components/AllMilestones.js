import React from 'react'
import { useParams } from 'react-router-dom'

const AllMilestones = ({ applications }) => {

  const { _id } = useParams();

  const application = applications.filter((application) => application._id === _id)[0];

  if (!application) {
    return (
        <div className="menu column is-half">
          <p className="menu-label">
            General
          </p>
          <ul class="menu-list">
            <li><a>Job Description</a></li>
            <li><a>Location</a></li>
            <li><a>Job Type</a></li>
            <li><a>Salary</a></li>
          </ul>
          <p className="menu-label">
            Important Dates
          </p>
          <ul className="menu-list">
            <li><a>Date Applied</a></li>
            <li>
              <a>Interviews</a>
              <ul>
                <li><a>Phone</a></li>
                <li><a>Technical</a></li>
                <li><a>In person</a></li>
              </ul>
            </li>
            <li><a>Date of Offer</a></li>
            <li><a>Start Date</a></li>
          </ul>
          <p className="menu-label">
            Contact Info
          </p>
          <ul className="menu-list">
            <li><a>Contact Name</a></li>
            <li><a>Contact Email</a></li>
            <li><a>Contact Phone</a></li>
          </ul>
          {/* current Milestone will be in the buttons bar       */}
          {/* notes will be in notes */}
        </div>
    )
  } else {
    return (
      <div className=" box menu column is-half">
      <p className="menu-label">
        General
      </p>
      <ul className="menu-list">
        <li><a>Job Description: {application.jobLink}</a></li>
        <li><a>Location: </a></li>
        <li><a>Job Type: {application.jobType}</a></li>
        <li><a>Salary: {application.salary}</a></li>
      </ul>
      <p className="menu-label">
        Important Dates
      </p>
      <ul className="menu-list">
        <li><a>Date Applied: {application.dateApplied} </a></li>
        <li>
          <a>Interviews</a>
          <ul>
            <li><a>Phone: </a></li>
            <li><a>Technical: </a></li>
            <li><a>In person: </a></li>
          </ul>
        </li>
        <li><a>Date of Offer: </a></li>
        <li><a>Start Date: </a></li>
      </ul>
      <p className="menu-label">
        Contact Info
      </p>
      <ul className="menu-list">
        <li><a>Contact Name: {application.contactName}</a></li>
        <li><a>Contact Email: {application.contactEmail}</a></li>
        <li><a>Contact Phone: {application.contactPhone}</a></li>
      </ul>
      <p className="menu-label">
        Milestones
      </p>
      <ul className="menu-list">
        <li><a>{application.currentMilestone}</a></li>
        <li><a>{application.currentMilestone}</a></li>
        <li><a>{application.currentMilestone}</a></li>
      </ul>
      <p className="menu-label">
        {application.milestones}
      </p>
      {/* current Milestone will be in the buttons bar       */}
      {/* notes will be in notes */}
    </div>

    )
  }
}

export default AllMilestones
