const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    username: String!
    email: String!
    password: String!
    applications: [Application]!
  }

  type Application {
    _id: ID
    applicant: String
    salary: String
    dateApplied: String
    contactName: String
    contactEmail: String
    contactPhone: String
    appliedFrom: String
    jobLink: String
    jobDescription: String
    location: String
    jobType: String
    jobTitle: String
    currentMilestone: String
    milestones: [Milestone]
  }

  type Milestone {
    _id: ID
    milestone: String
    dateOfInterview: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    allApps: [Application]
    applications(username: String): [Application]
    application(applicationId: ID!): Application

  }

  type Mutation {
    addUser(name: String, username: String!, email: String!, password: String!): Auth
    
    login(email: String!, password: String!): Auth
    
    createApplication(
      _id: ID
      applicant: String
      company: String
      jobTitle: String
      salary: String
      appliedFrom: String
      contactName: String
      contactEmail: String
      contactPhone: String
      jobLink: String
      jobDescription: String
      jobType: String
    ): Application  
    
    addMilestone(
      applicationId: ID!
      milestone: String!
      dateOfInterview: String
    ): Application
    
    removeApplication(applicationId: ID!): Application
    
    removeMilestone(applicationId: ID!, milestoneId: ID!): Application
  }
`;


module.exports = typeDefs;
