const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
    {
        email: { type: String, required: true, unique: true },
        theme: { type: String, required: true }
    },
    { timestamps: true },
);

module.exports = mongoose.model('users', User);