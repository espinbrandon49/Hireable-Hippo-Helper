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
    salary: Int!
    
    appliedFrom: String!
    jobURL: String!
    jobDescription: String!
    location: String!
    jobType: String!
    currentMilestone: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(email: String!): User
    application(applicationId: ID!): Application
    applications(appliedFrom: String): [Application]
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
