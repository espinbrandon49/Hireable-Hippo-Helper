import React from "react";
import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { REMOVE_APPLICATION } from "../../../../utils/mutations";

const AllMilestones = ({ applications }) => {
  const { _id } = useParams();

  const application = applications.filter(
    (application) => application._id === _id
  )[0];

  const [removeApplication, { error, data }] = useMutation(REMOVE_APPLICATION);
console.log(error, data)
  const handleDelete = async (event) => {
    console.log(event.type);
    try {
      const { data } = await removeApplication({
        variables: { _id: _id },
      });
      console.log(data);
      window.location.replace("/");
    } catch (err) {
      console.error(err);
    }
  };

  if (!application) {
    return (
      <div className="menu column is-half">
        <p className="menu-label is-size-5 has-text-weight-bold">General</p>
        <ul className="menu-list">
          <li className="has-text-weight-bold navbar-item">
            Job Link
          </li>
          <li className="navbar-item has-text-weight-bold">
            Location
          </li>
          <li className="navbar-item has-text-weight-bold">
            Job Type
          </li>
          <li className="navbar-item has-text-weight-bold">
            Salary
          </li>
          <li className="navbar-item has-text-weight-bold">
            Job Description
          </li>
        </ul>
        <p className="menu-label is-size-5 has-text-weight-bold">
          Important Dates
        </p>
        <ul className="menu-list">
          <li className="navbar-item has-text-weight-bold">
            Date Applied
          </li>
          <li className="navbar-item has-text-weight-bold">
            Interviews
            <ul>
              <li className="navbar-item has-text-weight-bold">
                Phone
              </li>
              <li className="navbar-item has-text-weight-bold">
                Technical
              </li>
              <li className="navbar-item has-text-weight-bold">
                In person
              </li>
            </ul>
          </li>
          <li className="navbar-item has-text-weight-bold">
          Date of Offer
          </li>
          <li className="navbar-item has-text-weight-bold">
            Start Date
          </li>
        </ul>
        <p className="menu-label is-size-5 has-text-weight-bold">
          Contact Info
        </p>
        <ul className="menu-list">
          <li className="navbar-item has-text-weight-bold">
            Contact Name
          </li>
          <li className="navbar-item has-text-weight-bold">
            Contact Email
          </li>
          <li className="navbar-item has-text-weight-bold">
            Contact Phone
          </li>
        </ul>
      </div>
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
              {application.dateApplied}
          </li>
          <li navbar-item has-text-weight-bold>
            Interviews
            <ul>
              <li>
                  <span className="navbar-item has-text-weight-bold">Phone: </span>
              </li>
              <li>
                  <span className="navbar-item has-text-weight-bold">Technical: </span>
              </li>
              <li>
                  <span className="navbar-item has-text-weight-bold">In person: </span>
              </li>
            </ul>
          </li>
          <li>
              <span className="navbar-item has-text-weight-bold">Date of Offer: </span>
          </li>
          <li>
              <span className="navbar-item has-text-weight-bold">Start Date: </span>
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
          </div>
        </div>
      </div>
    );
  }
};

export default AllMilestones;
