const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const applicationSchema = new Schema({
  applicant: {
    type: String,
    trim: true
  },
  company: {
    type: String,
  },
  salary: {
    type: String,
  },
  appliedFrom: {
    type: String,
    enum: ['LinkedIn', 'Indeed', 'AngelList', 'Handshake', 'Monster', 'Zip Recruiter', 'Job Fair', 'Company Website', 'Craigslist', 'Other'],
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
  jobTitle: {
    type: String,
  },
  jobLink: {
    type: String,
  },
  jobDescription: {
    type: String,
  },
  jobType: {
    type: String,
    enum: ['In person', 'Hybrid', 'Remote'],
  },
  dateApplied: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  currentMilestone: {
    type: String,
    enum: ['Applied', 'Phone Interview', 'Technical Interview', 'In Person Interview', 'Job Offer', 'Accepted', 'Rejected', 'Hippo Donations'],
  },
  milestones: [
    {
      milestone: {
        type: String,
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
},

);

const Application = model('Application', applicationSchema);

module.exports = Application;

//FRONTEND
// when a current milestone is clicked, the option to set a date is selected, or the default date can be date.now

//milestones can be displayed as a data visual on the dashboard

//dateOfInterview for an MVP or as a stretch? 