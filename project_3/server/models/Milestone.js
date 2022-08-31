const { Schema, model } = require('mongoose');

const milestoneSchema = new Schema({

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
});

const Milestone = model('Milestone', milestoneSchema);

module.exports = Milestone;