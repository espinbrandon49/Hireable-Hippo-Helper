const { Schema, model } = require('mongoose');

const applicationSchema = new Schema({
  salary: {
    type: Number,
    required: true
  },
  dateApplied: {
    type: Date,
    required: true
  },
  contact: {
    
    name: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
  
  },
appliedFrom: {
  type: String,
  enum: ['LinkedIn', 'Indeed', 'AngelList', 'Handshake', 'Monster', 'Zip Recruiter', 'Company Website', 'Craigslist', 'Other'],
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
  required: true
},

currentMilestone: {
  type: Array,
  required: true
},
mileStones: {

},
notes: [
  {
    commentText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  },
],
});

const Application = model('Application', applicationSchema);

module.exports = Application;
