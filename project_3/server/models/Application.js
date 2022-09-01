const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const applicationSchema = new Schema({
  applicationId: {
    type: Number,
    required: true,
  },
  applicant: {
    type: String,
    required: true,
    trim: true
  },
  salary: {
    type: Number,
    required: true
  },
  dateApplied: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  contactName: {
    type: String,
  },
  contactEmail: {
    type: String,
  },
  contactPhone: {
    type: String,
  },
  appliedFrom: {
    type: String,
    enum: ['LinkedIn', 'Indeed', 'AngelList', 'Handshake', 'Monster', 'Zip Recruiter', 'Job Fair', 'Company Website', 'Craigslist', 'Other'],
    required: true
  },
  jobURL: {
    type: String,
    required: true
  },
  jobDescription: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  jobType: {
    type: String,
    enum: ['In person', 'Hybrid', 'Remote'],
    required: true
  },
  currentMilestone: {
    type: String,
    enum: ['Applied', 'Phone Interview', 'Technical Interview', 'In Person Interview', 'Job Offer', 'Accepted', 'Rejected', 'Hippo Donations'],
    required: true
  },
  milestones: [
    {
      applied: {
        type: Boolean,
        default: false
      },
      phoneInterview: {
        type: Boolean,
        default: false
      },
      technicalInterview: {
        type: Boolean,
        default: false
      },
      inPersonInterview: {
        type: Boolean,
        default: false
      },
      jobOffer: {
        type: Boolean,
        default: false
      },
      accepted: {
        type: Boolean,
        default: false
      },
      rejected: {
        type: Boolean,
        default: false
      },
      hippoDonations: {
        type: Boolean,
        default: false
      },
      dateOfInterview: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
  note: {
    type: String
  },
});

const Application = model('Application', applicationSchema);

module.exports = Application;

//MILESTONE NOTES
// When you select a milestone, it would be like adding a comment, except the comment would be limited by options

// no need to toggle true or false

//so we can remove type boolean and make the type a string, and take all of the options out of the backend, and they will live in the front-end

//cannot be an "enum" field because milestone will be more than one item

//BACKEND
// milestones: [
//   {
//     milestone: {
//       type: String,
//     },
//     dateOfInterview: {
//       type: Date,
//       default: Date.now,
//       get: (timestamp) => dateFormat(timestamp),
//     },
//   },
// ],

//FRONTEND
// when a current milestone is clicked, the option to set a date is selected, or the default date can be date.now

//milestones can be displayed as a data visual on the dashboard

//dateOfInterview for an MVP or as a stretch? 