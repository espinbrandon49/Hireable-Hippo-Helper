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
      company
      jobTitle
      salary
      appliedFrom
      contactName
      contactEmail
      contactPhone
      jobLink
      jobDescription
      jobType
      dateApplied
      phoneInterview
      technicalInterview
      inpersonInterview
      dateOfOffer
      startDate
      currentMilestone
      note
      milestones
    }
  }
`;
