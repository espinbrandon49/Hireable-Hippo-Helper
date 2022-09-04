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
  mutation addApplication($applicant: String!, $company: String!, $salary: Int!, $appliedFrom: String!, $contactName: String!, $contactEmail: String!, $contactPhone: String!, $jobTitle: String!, $jobURL: String!, $jobDescription: String!, $dateApplied: String!, $jobType: String!, $currentMilestone: String!) {
      addApplication(applicant: $applicant,
        company: $company,
        salary: $salary, 
        appliedFrom: $appliedFrom,
        contactName: $contactName,
        contactEmail: $contactEmail,
        contactPhone: $contactPhone,
        jobTitle: $jobTitle,
        jobURL: $jobUrl,
        jobDescription: $jobDescription,
        dateApplied: $dateApplied,
        jobType: $jobType,
        currentMilestone: $currentMilestone
        ) {
          application 
            
          
        }
      }
`;



