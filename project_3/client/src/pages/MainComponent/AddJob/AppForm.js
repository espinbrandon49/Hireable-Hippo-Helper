import React, { useState } from 'react';
import { checkForText, validateEmail } from '../../../utils/helpers';

function ApplicationForm() {

    const [company, setCompany] = useState('');
    const [title, setTitle] = useState('');
    const [salary, setSalary] = useState('');
    const [location, setLocation] = useState('');
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [jobLink, setJobLink] = useState('');
    const [jobDescription, setJobDescription] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) => {
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'company') {
            setCompany(inputValue);
        } else if (inputType === 'title') {
            setTitle(inputValue);
        } else if (inputType === 'salary') {
            setSalary(inputValue);
        } else if (inputType === 'location') {
            setLocation(inputValue);
        } else if (inputType === 'contactName') {
            setContactName(inputValue);
        } else if (inputType === 'contactEmail') {
            setContactEmail(inputValue);
        } else if (inputType === 'contactPhone') {
            setContactPhone(inputValue);
        } else if (inputType === 'jobLink') {
            setJobLink(inputValue);
        } else {
            setJobDescription(inputValue);
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if(!checkForText(company)) {
            setErrorMessage('Company name is required.');
            return;
        }
        if(!checkForText(title)) {
            setErrorMessage('Job title is required.');
            return;
        }
        if(!validateEmail(contactEmail)) {
            setErrorMessage('Email is invalid.');
            return;
        }
        if (!checkForText(jobDescription)) {
            setErrorMessage('Job Description is required.');
            return;
        }
        console.log(errorMessage)
        setCompany('');
        setTitle('');
        setContactEmail('');
        setJobDescription('');
    };

    return (
        <div>
            <div className="field">
                <label for="companyName">Company Name:</label>
                <div className="control">
                    <input
                        id='companyName'
                        value={company}
                        name='company'
                        onChange={handleInputChange}
                        type="text"
                    />
                </div>
            </div>

            <div className="field">
                <label for="title">Job Title:</label>
                <div className="control">
                    <input
                        id='title'
                        value={title}
                        name='title'
                        onChange={handleInputChange}
                        type="text"
                    />
                </div>
            </div>

            <div className="field">
                <label for="salary">Salary:</label>
                <div className="control">
                    <input
                        id='salary'
                        value={salary}
                        name='salary'
                        onChange={handleInputChange}
                        type="text"
                    />
                </div>
            </div>

            <div className="field">
                <label for="jobLocation">Job Location:</label>
                <div className="control">
                    <input
                        id='jobLocation'
                        value={location}
                        name='location'
                        onChange={handleInputChange}
                        type="text"
                    />
                </div>
            </div>

            <div className="field">
                <label for="contactName">Contact Name:</label>
                <div className="control">
                    <input
                        id='contactName'
                        value={contactName}
                        name='contactName'
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
                        id='contactEmail'
                        value={contactEmail}
                        name='contactEmail'
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
                        id='contactPhone'
                        value={contactPhone}
                        name='contactPhone'
                        onChange={handleInputChange}
                        type="text"
                    />
                </div>
            </div>

            <div className="field">
                <label for="jobLink">Job Link:</label>
                <div className="control">
                    <input
                        id='jobLink'
                        value={jobLink}
                        name='jobLink'
                        onChange={handleInputChange}
                        type="text"
                    />
                </div>
            </div>

            <div className="field">
                <label className="label">Message</label>
                <div className="control">
                    <textarea
                        id='jobDescription'
                        value={jobDescription}
                        name='jobDescription'
                        onChange={handleInputChange}
                        type='text'
                    />
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <button className="button is-link" onClick={handleFormSubmit}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ApplicationForm;