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
          <li className="has-text-weight-bold">
            <a>Job Link</a>
          </li>
          <li className="has-text-weight-bold">
            <a>Location</a>
          </li>
          <li className="has-text-weight-bold">
            <a>Job Type</a>
          </li>
          <li className="has-text-weight-bold">
            <a>Salary</a>
          </li>
          <li className="has-text-weight-bold">
            <a>Job Description</a>
          </li>
        </ul>
        <p className="menu-label is-size-5 has-text-weight-bold">
          Important Dates
        </p>
        <ul className="menu-list">
          <li className="has-text-weight-bold">
            <a>Date Applied</a>
          </li>
          <li>
            <a>Interviews</a>
            <ul>
              <li className="has-text-weight-bold">
                <a>Phone</a>
              </li>
              <li className="has-text-weight-bold">
                <a>Technical</a>
              </li>
              <li className="has-text-weight-bold">
                <a>In person</a>
              </li>
            </ul>
          </li>
          <li className="has-text-weight-bold">
            <a>Date of Offer</a>
          </li>
          <li className="has-text-weight-bold">
            <a>Start Date</a>
          </li>
        </ul>
        <p className="menu-label is-size-5 has-text-weight-bold">
          Contact Info
        </p>
        <ul className="menu-list">
          <li className="has-text-weight-bold">
            <a>Contact Name</a>
          </li>
          <li className="has-text-weight-bold">
            <a>Contact Email</a>
          </li>
          <li className="has-text-weight-bold">
            <a>Contact Phone</a>
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
            <a>
              <span className="has-text-weight-bold">Job Link: </span>
              {application.jobLink}
            </a>
          </li>
          <li>
            <a>
              <span className="has-text-weight-bold">Location: </span>
            </a>
          </li>
          <li>
            <a>
              <span className="has-text-weight-bold">Job Type: </span>
              {application.jobType}
            </a>
          </li>
          <li>
            <a>
              <span className="has-text-weight-bold">Salary: </span>
              {application.salary}
            </a>
          </li>
          <li>
            <a>
              <span className="has-text-weight-bold">Job Description: </span>
              {application.jobDescription}
            </a>
          </li>
        </ul>
        <p className="menu-label is-size-5 has-text-weight-bold">
          Important Dates
        </p>
        <ul className="menu-list ">
          <li>
            <a>
              <span className="has-text-weight-bold">Date Applied: </span>
              {application.dateApplied}
            </a>
          </li>
          <li>
            <a>Interviews</a>
            <ul>
              <li>
                <a>
                  <span className="has-text-weight-bold">Phone: </span>
                </a>
              </li>
              <li>
                <a>
                  <span className="has-text-weight-bold">Technical: </span>
                </a>
              </li>
              <li>
                <a>
                  <span className="has-text-weight-bold">In person: </span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a>
              <span className="has-text-weight-bold">Date of Offer: </span>
            </a>
          </li>
          <li>
            <a>
              <span className="has-text-weight-bold">Start Date: </span>
            </a>
          </li>
        </ul>
        <p className="menu-label is-size-5 has-text-weight-bold">
          Contact Info
        </p>
        <ul className="menu-list">
          <li>
            <a>
              <span className="has-text-weight-bold">Contact Name: </span>
              {application.contactName}
            </a>
          </li>
          <li>
            <a>
              <span className="has-text-weight-bold">Contact Email: </span>
              {application.contactEmail}
            </a>
          </li>
          <li>
            <a>
              <span className="has-text-weight-bold">Contact Phone: </span>
              {application.contactPhone}
            </a>
          </li>
        </ul>
        <p className="menu-label is-size-5 has-text-weight-bold">Milestones</p>
        <ul className="menu-list">
          {application.milestones.map((value, i) => {
            return (
              <li key={i}>
                <a>{value}</a>
              </li>
            );
          })}
        </ul>
        {/* <p className="menu-label">
        {application.milestones}
      </p> */}
        {/* current Milestone will be in the buttons bar       */}
        {/* notes will be in notes */}
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
