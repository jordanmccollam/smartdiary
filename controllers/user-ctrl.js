const User = require('../models/user-model');

getUser = async (req, res) => {
    await User.findOne({ email: req.params.email }, (err, user) => {
        if (!err) {
            return res.status(200).json({ success: true, output: user });
        } else {
            return res.status(400).json({ success: false, error: err })
        }
    }).catch(err => console.log(err))
}

createUser = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an user'
        })
    }

    const user = new User(body);

    if (!user) {
        return res.status(400).json({ success: false, error: err })
    }

    user.save().then(() => {
        return res.status(201).json({
            success: true,
            output: user,
            message: 'User created!',
        })
    }).catch(error => {
        return res.status(400).json({
            error,
            message: 'User not created!',
        })
    })
}

module.exports = {
    getUser,
    createUser
}