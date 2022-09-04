import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

//Zori
// Query all applications
export const QUERY_APPLICATIONS = gql`
  query allApps {
    applications {
      _id
      applicant
      jobDescription
      appliedFrom
    }
  }
`;


//Don't delete 
// export const QUERY_APPLICATIONS = gql`
//   query allApps {
//     applications {
//       _id
//       applicant
//       jobDescription
//       appliedFrom
//     }
//   }
// `;