const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar Date
  type MyType {
    created: Date
  }

  type User {
    _id: ID
    name: String!
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
    applied: Boolean!
    phoneInterview: Boolean!
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
    milestones: [Milestone]
    applications: [Application]

    user(email: String!): User
    application(applicationId: ID!): Application
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addApplication(applicationText: String!, applicationAuthor: String!): Application
    addComment(
      applicationId: ID!
      commentText: String!
      commentAuthor: String!
    ): Application
    removeApplication(applicationId: ID!): Application
    removeComment(applicationId: ID!, commentId: ID!): Application
  }

`;

module.exports = typeDefs;
