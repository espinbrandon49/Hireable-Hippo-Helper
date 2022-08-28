const { Schema, model } = require('mongoose');

const applicationSchema = new Schema({
  salary: {

  },
  dateApplied: {

  },
  contact: {
    {
    name: String!,
    address: ,
    phone: ,
  },
  },
appliedFrom: {
  []
},
jobURL: {

},
jobDecsription: {

},
location: {

},
type: {

},
interViewDates: {

},
currentMilestone: {

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

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
