import React, { useState } from "react";
import { checkForText, validateEmail } from "../../../utils/helpers";
import Auth from "../../../utils/auth";
import Login from "../../Login";
import { useMutation } from "@apollo/client";
import { ADD_APPLICATION } from "../../../utils/mutations";

const ApplicationForm = (props) => {
  const [formState, setFormState] = useState({
    company: "",
    title: "",
    salary: "",
    location: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    jobLink: "",
    jobDescription: "",
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
    const { name, value } = event.target;

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
      company: "",
      title: "",
      salary: "",
      location: "",
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      jobLink: "",
      jobDescription: "",
    });
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <form onSubmit={handleFormSubmit}>
          <div>
            <div className="field">
              <label for="companyName">Company Name:</label>
              <div className="control">
                <input
                  id="companyName"
                  value={formState.company}
                  name="company"
                  onChange={handleInputChange}
                  type="text"
                />
              </div>
            </div>

            <div className="field">
              <label for="title">Job Title:</label>
              <div className="control">
                <input
                  id="title"
                  value={formState.title}
                  name="title"
                  onChange={handleInputChange}
                  type="text"
                />
              </div>
            </div>

            <div className="field">
              <label for="salary">Salary:</label>
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
              <label for="jobLocation">Job Location:</label>
              <div className="control">
                <input
                  id="jobLocation"
                  value={formState.location}
                  name="location"
                  onChange={handleInputChange}
                  type="text"
                />
              </div>
            </div>

            <div className="field">
              <label for="contactName">Contact Name:</label>
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
              <label for="contactPhone">Contact Phone:</label>
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
              <label for="jobLink">Job Link:</label>
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
              <label className="label">Message</label>
              <div className="control">
                <textarea
                  id="jobDescription"
                  value={formState.jobDescription}
                  name="jobDescription"
                  onChange={handleInputChange}
                  type="text"
                />
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
