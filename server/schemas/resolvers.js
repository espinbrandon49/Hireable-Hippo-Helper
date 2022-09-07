const { AuthenticationError } = require("apollo-server-express");
const { application } = require("express");
// We import the signToken() method and the User model to access the functionality needed in our resolvers to generate a signed token and check a password:
const { User, Application, Milestone } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // find all users
    users: async () => {
      return User.find().populate("applications");
    },

    // find all applications
    applications: async () => {
      return Application.find();
    },

    // find all applications
    allApps: async () => {
      return Application.find();
    },

    // find one user by username
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("applications");
    },

    // find one application by object_Id as applicationId
    application: async (parent, { applicationId }) => {
      return Application.findOne({ _id: applicationId });
    },

  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    createApplication: async (
      parent,
      {
        applicant,
        company,
        salary,
        appliedFrom,
        contactName,
        contactEmail,
        contactPhone,
        jobTitle,
        jobLink,
        jobDescription,
        jobType,
        dateApplied,
      }
    ) => {
      const application = await Application.create({
        applicant,
        company,
        salary,
        appliedFrom,
        contactName,
        contactEmail,
        contactPhone,
        jobTitle,
        jobLink,
        jobDescription,
        jobType,
        dateApplied,
      });

      await User.findOneAndUpdate(
        { username: applicant },
        { $addToSet: { applications: application._id } }
      );
      return application;
    },

    //brandon updateNote
    updateNote: async (parent, {
      _id,
      note
    }) => {
      const noteUpdate = await Application.findOneAndUpdate(
        { _id },
        {
          $set: { "note": note },
        },
        {
          new: true,
          runValidators: true,
        }
      );
      return noteUpdate
    },

    // Update Current Milestone
    updateMilestone: async (parent, {
      _id,
      currentMilestone
    }) => {
      const milestoneUpdate = await Application.findOneAndUpdate(
        { _id },
        {
          $set: { "currentMilestone": currentMilestone },
        },        
        {
          new: true,
          runValidators: true,
        }
      );
      return milestoneUpdate
    },

    addMilestone: async (parent, { _id, milestones  }) => {
      const addMilestone = await Application.findOneAndUpdate(
        { _id },
        {
          $addToSet: { milestones :  milestones},
        },
        {
          new: true,
          runValidators: true,
        }
      );
      return addMilestone
    },


    removeApplication: async (parent, { _id }) => {
      return Application.findOneAndDelete({ _id: _id });
    },

    removeMilestone: async (parent, { applicationId, milestoneId }) => {
      return Application.findOneAndUpdate(
        { _id: applicationId },
        { $pull: { milestones: { _id: milestoneId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
