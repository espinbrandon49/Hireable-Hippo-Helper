const { Schema, model } = require('mongoose');

const milestoneSchema = new Schema({

    Applied: {
        type: Boolean,
    },
    PhoneInterview: {
        type: Boolean,
    },
    TechnicalInterview: {
        type: Boolean,
    },
    InPersonInterview: {
        type: Boolean,
    },
    JobOffer: {
        type: Boolean,
    },
    Accepted: {
        type: Boolean,
    },
    Rejected: {
        type: Boolean,
    },
    HippoDonations: {
        type: Boolean,
    },
});

const Milestone = model('Milestone', milestoneSchema);

module.exports = Milestone;