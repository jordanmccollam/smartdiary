const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Entry = new Schema(
    {
        date: { type: String, required: true },
        time: { type: String, required: true },
        content: { type: String, required: true }
    },
    { timestamps: true },
);

module.exports = mongoose.model('entries', Entry);