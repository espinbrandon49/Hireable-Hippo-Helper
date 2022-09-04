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
  mutation addApplication($applicant: String!, $salary: Int!, $appliedFrom: String!, $jobUrl: String!, $jobDescription: String!, $jobType: String!, $jobTitle: String!) {
      addApplication(applicant: $applicant,
        salary: $salary, appliedFrom: $appliedFrom, jobURL: $jobUrl, jobDescription: $jobDescription, jobType: $jobType, jobTitle: $jobTitle
        ) {
          application 
            
          
        }
      }
`;



