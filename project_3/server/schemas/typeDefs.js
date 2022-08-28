const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String!
    email: String!
    password: String!
    applications: [Application]!
  }

  type Application {
    _id: ID
    salary: Number
    dateApplied: Date!
    contact: {
      name: String!
      emailAddress: String!
      phone: String
    }
    appliedFrom: String!
    jobURL: String!
    jobDescription: String!
    location: String!
    jobType: String!
    currentMilestone: String!
    milestones: Array!
  }


`;

module.exports = typeDefs;
