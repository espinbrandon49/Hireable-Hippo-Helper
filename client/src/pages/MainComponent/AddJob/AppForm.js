import React, { useState } from "react";
import { checkForText, validateEmail } from "../../../utils/helpers";
import Auth from "../../../utils/auth";
import Login from "../../Login";
import { useMutation } from "@apollo/client";
import { ADD_APPLICATION } from "../../../utils/mutations";

const ApplicationForm = (props) => {
  const [formState, setFormState] = useState({
    applicant: "",
    company: "",
    salary: "",
    appliedFrom: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    jobLink: "",
    jobDescription: "",
    dateApplied: "",
    jobType: "",
    currentMileStone: "",
  });
  const [createApplication, { error, data }] = useMutation(ADD_APPLICATION);
  // const [company, setCompany] = useState("");
  // const [title, setTitle] = useState("");
  // const [salary, setSalary] = useState("");
  // const [location, setLocation] = useState("");
  // const [contactName, setContactName] = useState("");
  // const [contactEmail, setContactEmail] = useState("");
  // const [contactPhone, setContactPhone] = useState("");
  // const [jobLink, setJobLink] = useState("");
  // const [jobDescription, setJobDescription] = useState("");

  // const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value} = event.target;
    console.log(event.target)
    console.log(name)

    setFormState({
      ...formState,
      [name]: value,
    });

    // const { target } = event;
    // const inputType = target.name;
    // const inputValue = target.value;

    // if (inputType === "company") {
    //   setCompany(inputValue);
    // } else if (inputType === "title") {
    //   setTitle(inputValue);
    // } else if (inputType === "salary") {
    //   setSalary(inputValue);
    // } else if (inputType === "location") {
    //   setLocation(inputValue);
    // } else if (inputType === "contactName") {
    //   setContactName(inputValue);
    // } else if (inputType === "contactEmail") {
    //   setContactEmail(inputValue);
    // } else if (inputType === "contactPhone") {
    //   setContactPhone(inputValue);
    // } else if (inputType === "jobLink") {
    //   setJobLink(inputValue);
    // } else {
    //   setJobDescription(inputValue);
    // }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    // if (!checkForText(company)) {
    //   setErrorMessage("Company name is required.");
    //   return;
    // }
    // if (!checkForText(title)) {
    //   setErrorMessage("Job title is required.");
    //   return;
    // }
    // if (!validateEmail(contactEmail)) {
    //   setErrorMessage("Email is invalid.");
    //   return;
    // }
    // if (!checkForText(jobDescription)) {
    //   setErrorMessage("Job Description is required.");
    //   return;
    // }

    try {
      const { data } = await createApplication({
        variables: { ...formState },
      });
    } catch (err) {
      console.error(err);
    }

    // clear form values
    setFormState({
      applicant: "",
      company: "",
      salary: "",
      appliedFrom: "",
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      jobLink: "",
      jobDescription: "",
      dateApplied: "",
      jobType: "",
      currentMileStone: "",
    });
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <form onSubmit={handleFormSubmit}>
          <div>
            <div className="field">
              <label htmlFor="applicant" className="label">
                Applicant:
              </label>
              <div className="control">
                <input
                  id="applicant"
                  value={formState.applicant}
                  name="applicant"
                  onChange={handleInputChange}
                  type="text"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="companyName" className="label">
                Company Name:
              </label>
              <div className="control">
                <input
                  id="companyName"
                  value={formState.company}
                  name="company"
                  onChange= {handleInputChange}
                  type="text"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="jobTitle" className="label">
                Job Title:
              </label>
              <div className="control">
                <input
                  id="jobTitle"
                  value={formState.jobType}
                  name="jobType"
                  onChange={handleInputChange}
                  type="text"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="salary" className="label">
                Salary:
              </label>
              <div className="control">
                <input
                  id="salary"
                  value={formState.salary}
                  name="salary"
                  onChange={handleInputChange}
                  type="text"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="jobLocation" className="label">
                Applied From:
              </label>

              <div className="control">
                <div className="select" onChange={handleInputChange}>
                  <select value={formState.appliedFrom} name="appliedFrom" id="jobLocation">
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Indeed">Indeed</option>
                    <option value="AngelList">AngelList</option>
                    <option value="Handshake">Handshake</option>
                    <option value="Monster">Monster</option>
                    <option value="Zip Recruiter">Zip Recruiter</option>
                    <option value="Job Fair">Job Fair</option>
                    <option value="Company Website">Company Website</option>
                    <option value="Craigslist">Craigslist</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <label htmlFor="contactName">Contact Name:</label>
              <div className="control">
                <input
                  id="contactName"
                  value={formState.contactName}
                  name="contactName"
                  onChange={handleInputChange}
                  type="text"
                />
              </div>
            </div>

            <div className="field">
              <label className="contactEmail">Contact Email:</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input is-danger"
                  id="contactEmail"
                  value={formState.contactEmail}
                  name="contactEmail"
                  onChange={handleInputChange}
                  type="email"
                  placeholder="Contact's Email"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-exclamation-triangle"></i>
                </span>
              </div>
              <p className="help is-danger">This email is invalid</p>
            </div>

            <div className="field">
              <label htmlFor="contactPhone" className="label">
                Contact Phone:
              </label>
              <div className="control">
                <input
                  id="contactPhone"
                  value={formState.contactPhone}
                  name="contactPhone"
                  onChange={handleInputChange}
                  type="text"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="jobLink" className="label">
                Job Link:
              </label>
              <div className="control">
                <input
                  id="jobLink"
                  value={formState.jobLink}
                  name="jobLink"
                  onChange={handleInputChange}
                  type="text"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="jobDescrip" className="label">
                Job Description
              </label>
              <div className="control">
                <input
                  id="jobDescrip"
                  value={formState.jobDescription}
                  name="jobDescription"
                  onChange={handleInputChange}
                  type="input"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="jobType" className="label">
                Job Type:
              </label>

              <div className="control">
                <div className="select" onChange={handleInputChange}>
                  <select value={formState.jobType} name="jobType" id="jobType">
                    <option value="In person">In person</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Remote">Remote</option>
                   
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <label htmlFor="dateApplied" className="label">
                Date Applied
              </label>
              <div className="control">
                <input
                  id="dateApplied"
                  value={formState.dateApplied}
                  name="dateApplied"
                  onChange={handleInputChange}
                  type="text"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="currMilestone" className="label">
                Current Milestone:
              </label>

              <div className="control">
                <div className="select" onChange={handleInputChange}>
                  <select value={formState.currentMileStone} name="currentMilestone" id="currMilestone">
                    <option value="Applied">Applied</option>
                    <option value="Phone Interview">Phone Interview</option>
                    <option value="Technical Interview">Technical Interview</option>
                    <option value="In Person Interview">In Person Interview</option>
                    <option value="Job Offer">Job Offer</option>
                    <option value="Accepted">Accepted</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Hippo Donations">Hippo Donations</option>
                   
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <div className="control">
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: "pointer" }}
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <Login />
      )}

      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
};

export default ApplicationForm;
