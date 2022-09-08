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
    $dateApplied: String
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
      jobType: $jobType,
      dateApplied: $dateApplied
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
        dateApplied
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