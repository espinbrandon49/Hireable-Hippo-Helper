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
  mutation addApplication($salary: Int!, $appliedFrom: String!, $jobUrl: String!, $jobDescription: String!, $location: String!, $jobType: String!) {
      addApplication(
        _id: ID
        salary: Int!
        dateApplied: String
        contactName: String
        contactEmail: String
        contactPhone: String
        appliedFrom: String!
        jobURL: String!
        jobDescription: String!
        location: String!
        jobType: String!
        ) {
          application 
            
          
        }
      }
    }
  }
`;



