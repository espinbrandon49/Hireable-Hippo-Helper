const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar Date
  type MyType {
    created: Date
  }

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
    salary: Int!
    dateApplied: Date
    contactName: String
    contactEmail: String
    contactPhone: String
    appliedFrom: String!
    jobURL: String!
    jobDescription: String!
    location: String!
    jobType: String!
    currentMilestone: String!
    milestones: [Milestone]
  }

  type Milestone {
    _id: ID
    applied: Boolean
    phoneInterview: Boolean
    technicalInterview: Boolean
    inPersonInterview: Boolean
    jobOffer: Boolean
    accepted: Boolean
    rejected: Boolean
    hippoDonations: Boolean
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User

    applications(username: String): [Application]
    application(applicationId: ID!): Application

  }

  type Mutation {
    addUser(name: String, username: String!, email: String!, password: String!): Auth
    
    login(email: String!, password: String!): Auth
    
    addApplication(
      applicationText: String!, applicationAuthor: String!
      _id: ID
      salary: Int!
      dateApplied: Date
      contactName: String
      contactEmail: String
      contactPhone: String
      appliedFrom: String!
      jobURL: String!
      jobDescription: String!
      location: String!
      jobType: String!
      ): Application
    
    addMilestone(
      applicationId: ID!
      milestone: String!
    ): Application
    
    removeApplication(applicationId: ID!): Application
    
    removeMilestone(applicationId: ID!, milestoneId: ID!): Application
  }
`;

module.exports = typeDefs;
