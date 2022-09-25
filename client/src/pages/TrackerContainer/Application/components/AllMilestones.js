import React from "react";
import { useMutation } from "@apollo/client";
import { REMOVE_APPLICATION } from "../../../../utils/mutations";
const dateFormat = require('../../../../utils/dateFormat');

const AllMilestones = ({ application, updateJobApp }) => {

  const [removeApplication, { error, data }] = useMutation(REMOVE_APPLICATION);

  const handleDelete = async (event) => {
    try {
      const { data } = await removeApplication({
        variables: { _id: application._id },
      });
      window.location.replace("/");
    } catch (err) {
      console.error(err);
    }
  };

  if (application === undefined) {
    return (
      <></>
    );
  } else {
    return (
      <div className="menu column is-half">
        <p className="menu-label is-size-5 has-text-weight-bold">General</p>
        <ul className="menu-list">
          <li>
            <span className="navbar-item has-text-weight-bold">Job Link: </span>
            {application.jobLink}
          </li>
          <li>
            <span className="navbar-item has-text-weight-bold">Location: </span>
            {application.location}
          </li>
          <li>
            <span className="navbar-item has-text-weight-bold">Job Type: </span>
            {application.jobType}
          </li>
          <li>
            <span className="navbar-item has-text-weight-bold">Salary: </span>
            {application.salary}
          </li>
          <li>
            <span className="navbar-item has-text-weight-bold">Job Description: </span>
            {application.jobDescription}
          </li>
        </ul>
        <p className="menu-label is-size-5 has-text-weight-bold">
          Important Dates
        </p>
        <ul className="menu-list ">
          <li>
            <span className="navbar-item has-text-weight-bold">Date Applied: </span>
            {application.dateApplied && dateFormat(application.dateApplied)}
          </li>
          <li navbar-item has-text-weight-bold>
            <span className="navbar-item has-text-weight-bold">Interviews</span>
            <ul>
              <li>
                <span className="navbar-item has-text-weight-bold">Phone: </span>
                {application.phoneInterview && dateFormat(application.phoneInterview)}
              </li>
              <li>
                <span className="navbar-item has-text-weight-bold">Technical: </span>
                {application.technicalInterview && dateFormat(application.technicalInterview)}
              </li>
              <li>
                <span className="navbar-item has-text-weight-bold">In person: </span>
                {application.inpersonInterview && dateFormat(application.inpersonInterview)}
              </li>
            </ul>
          </li>
          <li>
            <span className="navbar-item has-text-weight-bold">Date of Offer: </span>
            {application.dateOfOffer && dateFormat(application.dateOfOffer)}
          </li>
          <li>
            <span className="navbar-item has-text-weight-bold">Start Date: </span>
            {application.startDate && dateFormat(application.startDate)}
          </li>
        </ul>
        <p className="menu-label is-size-5 has-text-weight-bold">
          Contact Info
        </p>
        <ul className="menu-list">
          <li>
            <span className="navbar-item has-text-weight-bold">Contact Name: </span>
            {application.contactName}
          </li>
          <li>
            <span className="navbar-item has-text-weight-bold">Contact Email: </span>
            {application.contactEmail}
          </li>
          <li>
            <span className="navbar-item has-text-weight-bold">Contact Phone: </span>
            {application.contactPhone}
          </li>
        </ul>
        <p className="menu-label is-size-5 has-text-weight-bold">Milestones</p>
        <ul className="menu-list">
          {application.milestones.map((value, i) => {
            return (
              <li className="navbar-item " key={i}>
                {value}
              </li>
            );
          })}
        </ul>
        <div className="field pt-3">
          <div className="control">
            <button
              className="button is-danger"
              onClick={handleDelete}
              style={{ cursor: "pointer" }}
              type="button"
            >
              Delete Application
            </button>

            <button
              onClick={updateJobApp}
              className="button is-size-6 is-fullwidth"
            >
              Update Application
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default AllMilestones;
