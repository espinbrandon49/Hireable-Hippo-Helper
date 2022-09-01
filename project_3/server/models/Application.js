const { Schema, model } = require('mongoose');

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
      },
      phoneInterview: {
        type: Boolean,
      },
      technicalInterview: {
        type: Boolean,
      },
      inPersonInterview: {
        type: Boolean,
      },
      jobOffer: {
        type: Boolean,
      },
      accepted: {
        type: Boolean,
      },
      rejected: {
        type: Boolean,
      },
      hippoDonations: {
        type: Boolean,
      },
    },
  ],
  note: {
    type: String
  },
});

const Application = model('Application', applicationSchema);

module.exports = Application;
