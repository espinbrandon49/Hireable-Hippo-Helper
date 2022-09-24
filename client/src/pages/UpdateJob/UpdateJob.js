import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_APPLICATION } from "../../utils/mutations";
import Auth from "../../utils/auth";
import Login from "../Login";
import { useNavigate } from "react-router-dom";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const UpdateJob = ({ application, jobUpdated }) => {

  // const [startdate, setStartDate] = useState(new Date(application.dateApplied));
  const [dateApplied, setDateApplied] = useState(new Date(application.dateApplied));
  const [phoneInterview, setPhoneInterview] = useState(new Date(application.phoneInterview));
  const [technicalInterview, setTechnicalInterview] = useState(new Date(application.technicalInterview));
  const [inpersonInterview, setInpersonInterview] = useState(new Date(application.inpersonInterview));
  const [dateOfOffer, setDateOfOffer] = useState(new Date(application.dateOfOffer));
  const [startDate, setStartDate] = useState(new Date(application.startDate));

  // console.log(startdate)
  console.log(dateApplied)
  console.log(application.dateApplied)

  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    applicant: application.applicant,
    company: application.company,
    location: application.location,
    salary: application.salary,
    appliedFrom: application.appliedFrom,
    contactName: application.contactName,
    contactEmail: application.contactEmail,
    contactPhone: application.contactPhone,
    jobTitle: application.jobTitle,
    jobLink: application.jobLink,
    jobDescription: application.jobDescription,
    jobType: application.jobType,
    dateApplied: application.dateApplied,
    phoneInterview: application.phoneInterview,
    technicalInterview: application.technicalInterview,
    inpersonInterview: application.inpersonInterview,
    dateOfOffer: application.dateOfOffer,
    startDate: application.startDate
  });

  const [updateApplication, { error }] = useMutation(UPDATE_APPLICATION);

  useEffect(() => {
    setFormState({
      applicant: application.applicant,
      company: application.company,
      location: application.location,
      salary: application.salary,
      appliedFrom: application.appliedFrom,
      contactName: application.contactName,
      contactEmail: application.contactEmail,
      contactPhone: application.contactPhone,
      jobTitle: application.jobTitle,
      jobLink: application.jobLink,
      jobDescription: application.jobDescription,
      jobType: application.jobType,
      dateApplied: application.dateApplied,
      phoneInterview: application.phoneInterview,
      technicalInterview: application.technicalInterview,
      inpersonInterview: application.inpersonInterview,
      dateOfOffer: application.dateOfOffer,
      startDate: application.startDate
    })
  }, [application])

  // Update state based on form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateApplication({
        variables: {
          _id: application._id,
          applicant: formState.applicant,
          company: formState.company,
          location: formState.location,
          salary: formState.salary,
          appliedFrom: formState.appliedFrom,
          contactName: formState.contactName,
          contactEmail: formState.contactEmail,
          contactPhone: formState.contactPhone,
          jobTitle: formState.jobTitle,
          jobLink: formState.jobLink,
          jobDescription: formState.jobDescription,
          jobType: formState.jobType,
          dateApplied: dateApplied,
          phoneInterview: phoneInterview,
          technicalInterview: technicalInterview,
          inpersonInterview: inpersonInterview,
          dateOfOffer: dateOfOffer,
          startDate: startDate
        },
      });
      // await setFormState(...formState)
      // setFormState({
      //   applicant: application.applicant,
      //   company: application.company,
      //   location: application.location,
      //   salary: application.salary,
      //   appliedFrom: application.appliedFrom,
      //   contactName: application.contactName,
      //   contactEmail: application.contactEmail,
      //   contactPhone: application.contactPhone,
      //   jobTitle: application.jobTitle,
      //   jobLink: application.jobLink,
      //   jobDescription: application.jobDescription,
      //   jobType: application.jobType,
      //   dateApplied: application.dateApplied,
      //   phoneInterview: application.phoneInterview,
      //   technicalInterview: application.technicalInterview,
      //   inpersonInterview: application.inpersonInterview,
      //   dateOfOffer: application.dateOfOffer,
      //   startDate: application.startDate
      // })
      jobUpdated()
      navigate(`/Main/Application/${application._id}`)
      console.log('success')
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      {Auth.loggedIn() ? (
        <div className="column is-half is-offset-one-quarter">
          <form onSubmit={handleFormSubmit}>
            <div className="box">

              <div className="pb-5">
                <h1 className='title'>
                  Welcome {Auth.getProfile().data.username}!
                </h1>
                <h2 className='subtitle'>
                  Update Application:
                </h2>
              </div>

              <div className="field">
                <label htmlFor="companyName" className="label">
                  Company Name:
                </label>

                <div className="control">
                  <input
                    className="input"
                    id="companyName"
                    value={formState.company}
                    name="company"
                    onChange={handleInputChange}
                    type="text"
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="location" className="label">
                  Location:
                </label>

                <div className="control">
                  <input
                    className="input"
                    id="location"
                    value={formState.location}
                    name="location"
                    onChange={handleInputChange}
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
                    className="input"
                    id="jobTitle"
                    value={formState.jobTitle}
                    name="jobTitle"
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
                    className="input"
                    id="salary"
                    value={formState.salary}
                    name="salary"
                    onChange={handleInputChange}
                    type="text"
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="dateApplied" className="label">
                  Date Applied:
                </label>
                <DatePicker selected={dateApplied} onChange={(date) => setDateApplied(date)} />
              </div>

              <div className="field">
                <label htmlFor="phoneInterview" className="label">
                  Phone Interview:
                </label>
                <DatePicker selected={phoneInterview} onChange={(date) => setPhoneInterview(date)} />
              </div>

              <div className="field">
                <label htmlFor="technicalInterview" className="label">
                  Technical Interview:
                </label>
                <DatePicker selected={technicalInterview} onChange={(date) => setTechnicalInterview(date)} />
              </div>

              <div className="field">
                <label htmlFor="inpersonInterview" className="label">
                  In-person Interview:
                </label>
                <DatePicker selected={inpersonInterview} onChange={(date) => setInpersonInterview(date)} />
              </div>

              <div className="field">
                <label htmlFor="dateOfOffer" className="label">
                  Date Of Offer:
                </label>
                <DatePicker selected={dateOfOffer} onChange={(date) => setDateOfOffer(date)} />
              </div>

              <div className="field">
                <label htmlFor="startDate" className="label">
                  Start Date:
                </label>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
              </div>

              <div className="field">
                <label htmlFor="jobLocation" className="label">
                  Applied From:
                </label>

                <div className="control">
                  <div className="select" >
                    <select value={formState.appliedFrom} name="appliedFrom" id="jobLocation" onChange={handleInputChange}>
                      <option value="" disabled selected>
                        Select your option
                      </option>
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
                <label htmlFor="contactName" className="label">
                  Contact Name:
                </label>

                <div className="control">
                  <input
                    className="input"
                    id="contactName"
                    value={formState.contactName}
                    name="contactName"
                    onChange={handleInputChange}
                    type="text"
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="contactEmail" className="label">
                  Contact Email:
                </label>

                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    id="contactEmail"
                    value={formState.contactEmail}
                    name="contactEmail"
                    onChange={handleInputChange}
                    type="email"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-exclamation-triangle"></i>
                  </span>
                </div>
              </div>

              <div className="field">
                <label htmlFor="contactPhone" className="label">
                  Contact Phone:
                </label>

                <div className="control">
                  <input
                    className="input"
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
                    className="input"
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
                    className="input"
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
                  <div className="select">
                    <select value={formState.jobType} name="jobType" id="jobType" onChange={handleInputChange}>
                      <option value="" disabled selected>
                        Select your option
                      </option>
                      <option value="In person">In person</option>
                      <option value="Hybrid">Hybrid</option>
                      <option value="Remote">Remote</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="field pt-3">
                <div className="control">
                  <button
                    className="button is-info"
                    style={{ cursor: "pointer" }}
                    name="submit"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <Login />
      )}

      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </>
  );
};

export default UpdateJob;