const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
    {
        email: { type: String, required: true, unique: true },
        theme: { type: String, required: true },
        entries: [{ type: Schema.Types.ObjectId, ref: "entries" }],
        moods: [{ type: Schema.Types.ObjectId, ref: "moods" }]
    },
    { timestamps: true },
);

module.exports = mongoose.model('users', User);