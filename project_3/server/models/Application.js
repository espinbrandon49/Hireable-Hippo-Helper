const { Schema, model } = require('mongoose');

const applicationSchema = new Schema({
  salary: {
    type: Number,
    required: true
  },
  dateApplied: {
    type: Date,
  
  },
  contact: {
    
    name: {
      type: String,
      
    },
    emailAddress: {
      type: String,
      
    },
    phone: {
      type: String,
    },
  
  },
appliedFrom: {
  type: String,
  enum: ['LinkedIn', 'Indeed', 'AngelList', 'Handshake', 'Monster', 'Zip Recruiter', 'Job Fair', 'Company Website', 'Craigslist', 'Other'],
  required : true 
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
milestones: {
  type: Array,
},

note: {
  type: String
},

});

const Application = model('Application', applicationSchema);

module.exports = Application;
