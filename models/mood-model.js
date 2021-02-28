const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Mood = new Schema(
    {
        date: { type: String, required: true },
        time: { type: String, required: true },
        label: { type: String, required: true },
        energy: { type: Number, required: true },
        pleasantness: { type: Number, required: true },
        user: { type: Schema.Types.ObjectId, ref: "users" }
    },
    { timestamps: true },
);

module.exports = mongoose.model('moods', Mood);