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
    location: String
    salary: String
    appliedFrom: String
    contactName: String
    contactEmail: String
    contactPhone: String
    jobTitle: String
    jobLink: String
    jobDescription: String
    jobType: String
    dateApplied: String
    phoneInterview: String
    technicalInterview: String
    inpersonInterview: String
    dateOfOffer: String
    startDate: String
    currentMilestone: String
    milestones: [String]
    note: String
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
    
    updateNote(
      _id: String
      note: String
    ): Application

    updateMilestone(
      _id: String
      currentMilestone: String
    ): Application

    addMilestone(
      _id: String
      milestones: [String]
    ): Application

    removeApplication(_id: String): Application
    
    removeMilestone(applicationId: ID!, milestoneId: ID!): Application

    updateApplication(
      _id: String
      applicant: String
      company: String
      location: String
      salary: String
      appliedFrom: String
      contactName: String
      contactEmail: String
      contactPhone: String
      jobTitle: String
      jobLink: String
      jobDescription: String
      jobType: String
      dateApplied: String
      phoneInterview: String
      technicalInterview: String
      inpersonInterview: String
      dateOfOffer: String
      startDate: String
    ): Application  
    
  }
`;

module.exports = typeDefs;
