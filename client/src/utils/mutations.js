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
    $jobType: String) {
    createApplication(
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



