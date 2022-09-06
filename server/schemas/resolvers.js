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
    // 🔑 We then write an addUser resolver and pass in name, email, and password as arguments. This resolver will use our imported signToken() method:
    addUser: async (parent, { username, email, password }) => {
      // First we create the user
      // 🔑 We use the data passed in to create a new user in the database:
      const user = await User.create({ username, email, password });
      // To reduce friction for the user, we immediately sign a JSON Web Token and log the user in after they are created
      // 🔑 Next, we call the signToken() function to generate a signed token that includes the user information as the payload. The newly created user and token are then returned:
      const token = signToken(user);
      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      // Look up the user by the provided email address. Since the `email` field is unique, we know that only one person will exist with that email
      // 🔑 We use the .findOne() method to search the database for a matching email:
      const user = await User.findOne({ email });

      // If there is no user with that email address, return an Authentication error stating so
      // If no user is found, we return an error message indicating there is no match:
      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      // If there is a user found, execute the `isCorrectPassword` instance method and check if the correct password was provided
      // 🔑 If a match is found, we use the .isCorrectPassword() method from the User model to check if the password is also match:
      const correctPw = await user.isCorrectPassword(password);

      // If the password is incorrect, return an Authentication error stating so
      // If there is no password match, we return an error. Otherwise, we use the signToken() function to generate a signed token that contains the user information:
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      // If email and password are correct, sign user into the application with a JWT
      const token = signToken(user);

      // Return an `Auth` object that consists of the signed token and user's information
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


    removeApplication: async (parent, { applicationId }) => {
      return Application.findOneAndDelete({ _id: applicationId });
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
