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
  mutation addApplication($applicant: String, $company: String, $jobTitle: String, $salary: String, $appliedFrom: String, $contactName: String, $contactEmail: String, $contactPhone: String, $jobLink: String, $jobDescription: String, $jobType: String) {
    addApplication(
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



