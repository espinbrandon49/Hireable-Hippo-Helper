import React from "react";
import { useMutation } from "@apollo/client";
import { REMOVE_APPLICATION } from "../../../../utils/mutations";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

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
            <span className="pl-3">{application.jobLink}</span>
          </li>
          <li>
            <span className="navbar-item has-text-weight-bold">Location: </span>
            <span className="pl-3">{application.location}</span>
          </li>
          <li>
            <span className="navbar-item has-text-weight-bold">Job Type: </span>
            <span className="pl-3">{application.jobType}</span>
          </li>
          <li>
            <span className="navbar-item has-text-weight-bold">Salary: </span>
            <span className="pl-3">{application.salary}</span>
          </li>
          <li>
            <span className="navbar-item has-text-weight-bold">Job Description: </span>
            <span className="pl-3">{application.jobDescription}</span>
          </li>
        </ul>
        <p className="menu-label is-size-5 has-text-weight-bold">
          Important Dates
        </p>
        <ul className="menu-list ">
          <li>
            <span className="navbar-item has-text-weight-bold">Date Applied: </span>
            <span className="pl-3">{application.dateApplied && dateFormat(application.dateApplied)}</span>
          </li>
          <li navbar-item has-text-weight-bold>
            <span className="navbar-item has-text-weight-bold">Interviews</span>
            <ul>
              <li>
                <span className="navbar-item has-text-weight-bold">Phone: </span>
                <span className="pl-3">{application.phoneInterview && dateFormat(application.phoneInterview)}</span>
              </li>
              <li>
                <span className="navbar-item has-text-weight-bold">Technical: </span>
                <span className="pl-3">{application.technicalInterview && dateFormat(application.technicalInterview)}</span>
              </li>
              <li>
                <span className="navbar-item has-text-weight-bold">In person: </span>
                <span className="pl-3">{application.inpersonInterview && dateFormat(application.inpersonInterview)}</span>
              </li>
            </ul>
          </li>
          <li>
            <span className="navbar-item has-text-weight-bold">Date of Offer: </span>
            <span className="pl-3">{application.dateOfOffer && dateFormat(application.dateOfOffer)}</span>
          </li>
          <li>
            <span className="navbar-item has-text-weight-bold">Start Date: </span>
            <span className="pl-3">{application.startDate && dateFormat(application.startDate)}</span>
          </li>
        </ul>
        <p className="menu-label is-size-5 has-text-weight-bold">
          Contact Info
        </p>
        <ul className="menu-list">
          <li>
            <span className="navbar-item has-text-weight-bold">Contact Name: </span>
            <span className="pl-3">{application.contactName}</span>
          </li>
          <li>
            <span className="navbar-item has-text-weight-bold">Contact Email: </span>
            <span className="pl-3">{application.contactEmail}</span>
          </li>
          <li>
            <span className="navbar-item has-text-weight-bold">Contact Phone: </span>
            <span className="pl-3">{application.contactPhone}</span>
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
        <Stack spacing={2} direction="row" className="pt-3">
          <Button
            variant="contained"
            size="large"
            color="error"
            onClick={handleDelete}
          >
            Delete Application
          </Button>

          <Button
            variant="contained"
            size="large"
            color="secondary"
            onClick={updateJobApp}
          >
            Update Application
          </Button>
        </Stack>
      </div>
    );
  }
};

export default AllMilestones;
