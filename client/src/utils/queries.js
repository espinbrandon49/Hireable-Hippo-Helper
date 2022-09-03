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

//Brandon - Query single users applications
export const QUERY_SINGLE_APPLICATION = gql`
  query getApplication {
    users {
      applications {
        _id
        jobURL
      }     
    }
  }
`;

// export const QUERY_SINGLE_APPLICATION = gql`
//   query getSingleApplication($applicationId: ID!) {
//     application(applicationId: ID!) {
//       _id
//       jobURL
//       milestones {
//         _id
//         milestone
//         dateOfInterview
//       }
//     }
//   }
// `;

//Brandon - Query number of jobs applied to
// export const QUERY_JOBS_APPLIED = gql`
//   query user($username: String!) {
//     user(username: $username) {
//       applications {
//         milestones {
//           milestone
//         }
//       }
//     }
//   }
// `;