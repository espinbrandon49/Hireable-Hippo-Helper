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
    company: String
    salary: String
    appliedFrom: String
    contactName: String
    contactEmail: String
    contactPhone: String
    jobTitle: String
    jobLink: String
    jobDescription: String
    jobType: String
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
      applicant: String
      company: String
      salary: String
      appliedFrom: String
      contactName: String
      contactEmail: String
      contactPhone: String
      jobTitle: String
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
