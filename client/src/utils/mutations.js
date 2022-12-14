import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_APPLICATION = gql`
  mutation createApplication(
    $applicant: String,
    $company: String,
    $salary: String, 
    $appliedFrom: String, 
    $contactName: String, 
    $contactEmail: String, 
    $contactPhone: String, 
    $jobTitle: String, 
    $jobLink: String, 
    $jobDescription: String, 
    $jobType: String
    ) {
    createApplication
    (
      applicant: $applicant,
      company: $company,
      salary: $salary, 
      appliedFrom: $appliedFrom,
      contactName: $contactName,
      contactEmail: $contactEmail,
      contactPhone: $contactPhone,
      jobTitle: $jobTitle,
      jobLink: $jobLink,
      jobDescription: $jobDescription,
      jobType: $jobType
      ) {
        _id
        applicant
        company
        salary
        appliedFrom
        contactName
        contactEmail
        contactPhone
        jobTitle
        jobLink
        jobDescription
        jobType
      }
    }
`;

export const REMOVE_APPLICATION = gql`
  mutation removeApplication($_id: String) {
    removeApplication(_id: $_id) {        
      _id
    }
  }
`;

export const UPDATE_NOTE = gql`
  mutation updateNote($_id: String, $note: String) {
    updateNote(_id: $_id, note: $note) {        
      _id
      note
    }
  }
`;

export const UPDATE_MILESTONE = gql`
  mutation updateMilestone($_id: String, $currentMilestone: String) {
    updateMilestone(_id: $_id, currentMilestone: $currentMilestone) {        
      _id
      currentMilestone
    }
  }
`;

export const ADD_MILESTONE = gql`
  mutation addMilestone($_id: String, $milestones: [String]) {
    addMilestone(_id: $_id, milestones: $milestones) {        
      _id
      milestones
    }
  }
`;

export const UPDATE_APPLICATION = gql`
  mutation updateApplication(
    $_id: String,
    $applicant: String,
    $company: String,
    $location: String,
    $salary: String,
    $appliedFrom: String,
    $contactName: String,
    $contactEmail: String,
    $contactPhone: String,
    $jobTitle: String,
    $jobLink: String,
    $jobDescription: String,
    $jobType: String,
    $dateApplied: String,
    $phoneInterview: String,
    $technicalInterview: String,
    $inpersonInterview: String,
    $dateOfOffer: String,
    $startDate: String
    ) {
    updateApplication(
      _id: $_id,
      applicant: $applicant,
      company: $company,
      location: $location,
      salary: $salary,
      appliedFrom: $appliedFrom,
      contactName: $contactName,
      contactEmail: $contactEmail,
      contactPhone: $contactPhone,
      jobTitle: $jobTitle,
      jobLink: $jobLink,
      jobDescription: $jobDescription,
      jobType: $jobType,
      dateApplied: $dateApplied
      phoneInterview: $phoneInterview
      technicalInterview: $technicalInterview
      inpersonInterview: $inpersonInterview
      dateOfOffer: $dateOfOffer
      startDate: $startDate
      ) {        
      _id
      applicant
      company
      location
      salary
      appliedFrom
      contactName
      contactEmail
      contactPhone
      jobTitle
      jobLink
      jobDescription
      jobType
      dateApplied
      phoneInterview
      technicalInterview
      inpersonInterview
      dateOfOffer
      startDate
    }
  }
`;