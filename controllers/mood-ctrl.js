const Mood = require('../models/mood-model');
const User = require('../models/user-model');

createMood = (req, res) => {
    console.log("REQ", req);
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an mood'
        })
    }

    const mood = new Mood(body);

    if (!mood) {
        return res.status(400).json({ success: false, error: err })
    }

    mood.save().then(() => {

        User.findOne({ _id: body.user }, (err, User) => {
            if (err) {
                return res.status(404).json({
                    err,
                    message: 'User not found!',
                })
            }
            User.moods.push(mood._id)
            // User.time = body.time
            User
                .save()
                .then(() => {
                    return res.status(200).json({
                        success: true,
                        output: User,
                        message: 'User updated!',
                    })
                })
                .catch(error => {
                    return res.status(404).json({
                        error,
                        message: 'User not updated!',
                    })
                })
        })

        return res.status(201).json({
            success: true,
            output: mood,
            message: 'Mood created!',
        })
    }).catch(error => {
        return res.status(400).json({
            error,
            message: 'Mood not created!',
        })
    })
}

updateMood = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Mood.findOne({ _id: req.params.id }, (err, mood) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Mood not found!',
            })
        }
        mood.date = body.date
        mood.label = body.label
        mood.energy = body.energy
        mood.pleasantness = body.pleasantness
        mood
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    output: mood,
                    message: 'Mood updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Mood not updated!',
                })
            })
    })
}

deleteMood = async (req, res) => {
    await Mood.findOneAndDelete({ _id: req.params.id }, (err, mood) => {
        if (!err) {
            return res.status(200).json({ success: true, output: req.params.id });
        } else {
            return res.status(400).json({ success: false, error: err });
        }
    }).catch(err => console.log(err))
}

getMood = async (req, res) => {
    await Mood.findOne({ _id: req.params.id }, (err, mood) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!mood) {
            return res
                .status(404)
                .json({ success: false, error: `Mood not found` })
        }
        return res.status(200).json({ success: true, output: mood })
    }).catch(err => console.log(err))
}

getMoods = async (req, res) => {
    await Mood.find({}, (err, moods) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!moods.length) {
            return res
                .status(404)
                .json({ success: false, error: `Mood not found` })
        }
        return res.status(200).json({ success: true, output: moods })
    }).catch(err => console.log(err))
}

module.exports = {
    createMood,
    updateMood,
    deleteMood,
    getMoods,
    getMood,
}